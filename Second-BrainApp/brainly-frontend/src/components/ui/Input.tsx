import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, { placeholder: string; type?: string }>(
  ({ placeholder, type = "text" }, ref) => {
    return (
      <div>
        <input
          ref={ref}
          placeholder={placeholder}
          type={type}
          className="px-4 py-2 border rounded m-2"
        />
      </div>
    );
  }
);
