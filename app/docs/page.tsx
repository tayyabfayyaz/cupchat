// app/docs/page.tsx
export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">How to Use Your API Key</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Install the Chatbot Component</h2>
          <pre className="bg-gray-100 p-4 rounded-lg">
{`npm install @your-company/chatbot-sdk
# or
yarn add @your-company/chatbot-sdk`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Import and Use in Your Code</h2>
          <pre className="bg-gray-100 p-4 rounded-lg">
{`import ChatbotToggleButton from '@your-company/chatbot-sdk';

function YourApp() {
  return (
    <div>
      <h1>Your Application</h1>
      <ChatbotToggleButton 
        apiUrl="http://127.0.0.1:8000/api/chat"
        apiKey="YOUR_API_KEY_HERE"
      />
    </div>
  );
}`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Environment Variables (Optional)</h2>
          <pre className="bg-gray-100 p-4 rounded-lg">
{`// For security, you can use environment variables
REACT_APP_CHATBOT_API_URL=http://127.0.0.1:8000/api/chat
REACT_APP_CHATBOT_API_KEY=your_api_key_here`}
          </pre>
        </section>
      </div>
    </div>
  );
}