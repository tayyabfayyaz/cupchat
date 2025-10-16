#!/usr/bin/env python3
"""
Startup script for the Agent API Server.
This script starts the FastAPI server and provides easy management.
"""

import subprocess
import sys
import os
import time
import signal
import threading
import webbrowser
from pathlib import Path

def get_project_root():
    """Get the project root directory."""
    return Path(__file__).parent.parent

def get_src_dir():
    """Get the src directory."""
    return Path(__file__).parent

def check_fastapi_dependencies():
    """Check if required dependencies are installed."""
    try:
        import fastapi
        import uvicorn
        import pydantic
        return True
    except ImportError:
        return False

def install_dependencies():
    """Install required Python dependencies."""
    print("Installing required dependencies...")
    try:
        subprocess.check_call([
            sys.executable, "-m", "pip", "install", 
            "fastapi", "uvicorn", "pydantic", "python-dotenv"
        ])
        return True
    except subprocess.CalledProcessError:
        return False

def start_fastapi():
    """Start the FastAPI server."""
    print("Starting FastAPI server...")
    
    # Change to the src directory where agent.py is located
    os.chdir(get_src_dir())
    
    try:
        process = subprocess.Popen([
            sys.executable, "-m", "uvicorn", 
            "agent:app", 
            "--host", "0.0.0.0", 
            "--port", "8000",
            "--reload"
        ], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        
        print(f"FastAPI server starting on http://127.0.0.1:8000")
        print(f"API documentation: http://127.0.0.1:8000/docs")
        print(f"Server PID: {process.pid}")
        
        # Wait a moment for server to start, then check if it's running
        time.sleep(2)
        if process.poll() is not None:
            # Process has already terminated, indicating an error
            stderr_output = process.stderr.read().decode() if process.stderr else "Unknown error"
            print(f"Failed to start FastAPI server: {stderr_output}")
            return None
        
        return process
    except Exception as e:
        print(f"Error starting FastAPI server: {e}")
        return None

def check_server_health():
    """Check if the server is healthy by making a test request."""
    import requests
    try:
        response = requests.get("http://127.0.0.1:8000/", timeout=5)
        if response.status_code == 200:
            print("✓ FastAPI server is running and healthy")
            return True
    except requests.ConnectionError:
        print("✗ FastAPI server is not responding")
    except Exception as e:
        print(f"✗ Health check error: {e}")
    return False

def open_browser_delayed():
    """Open the browser to the API docs after a delay."""
    time.sleep(3)
    webbrowser.open("http://127.0.0.1:8000/docs")

def main():
    """Main function to start the servers."""
    print("=" * 50)
    print("Starting Agent API Server")
    print("=" * 50)
    
    # Check if dependencies are installed
    if not check_fastapi_dependencies():
        print("Required dependencies not found.")
        if input("Install dependencies now? (y/n): ").lower() == 'y':
            if not install_dependencies():
                print("Failed to install dependencies. Please install manually:")
                print("pip install fastapi uvicorn pydantic python-dotenv")
                return
        else:
            print("Please install dependencies manually:")
            print("pip install fastapi uvicorn pydantic python-dotenv")
            return
    
    # Start FastAPI server
    fastapi_process = start_fastapi()
    if not fastapi_process:
        print("Failed to start FastAPI server. Exiting.")
        return
    
    # Start browser opening in a separate thread
    browser_thread = threading.Thread(target=open_browser_delayed, daemon=True)
    browser_thread.start()
    
    # Perform health check
    time.sleep(2)
    check_server_health()
    
    print("\n" + "=" * 50)
    print("Server management commands:")
    print("• Press Ctrl+C to stop the server")
    print("• API URL: http://127.0.0.1:8000")
    print("• API Docs: http://127.0.0.1:8000/docs")
    print("• Next.js app should connect to: http://127.0.0.1:8000/api")
    print("=" * 50 + "\n")
    
    try:
        # Keep the script running
        while True:
            time.sleep(1)
            # Check if process is still alive
            if fastapi_process.poll() is not None:
                print("FastAPI server has stopped unexpectedly.")
                break
                
    except KeyboardInterrupt:
        print("\nShutting down servers...")
        
    finally:
        # Cleanup
        if fastapi_process and fastapi_process.poll() is None:
            fastapi_process.terminate()
            try:
                fastapi_process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                fastapi_process.kill()
        
        print("Servers stopped.")
        print("Thank you for using Agent API Server!")

if __name__ == "__main__":
    main()