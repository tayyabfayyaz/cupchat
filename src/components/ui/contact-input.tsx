import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContactInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const ContactInput = React.forwardRef<HTMLInputElement, ContactInputProps>(
  ({ className, type, label, id, ...props }, ref) => {
    const inputId = id;
    
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-foreground/90 tracking-wide"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={inputId}
          className={cn(
            "flex h-12 w-full rounded-lg border border-input bg-contact-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-smooth",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-contact-primary focus-visible:border-transparent",
            "hover:border-contact-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
ContactInput.displayName = "ContactInput";

export interface ContactTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const ContactTextarea = React.forwardRef<HTMLTextAreaElement, ContactTextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    const textareaId = id;
    
    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-sm font-semibold text-foreground/90 tracking-wide"
          >
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            "flex min-h-[120px] w-full rounded-lg border border-input bg-contact-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-smooth resize-vertical",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-contact-primary focus-visible:border-transparent",
            "hover:border-contact-primary/50 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
ContactTextarea.displayName = "ContactTextarea";

