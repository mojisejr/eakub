"use client";
import { useFormStatus } from "react-dom";

interface FormButtonProps {
  text: string;
}

export default function FormButton({ text }: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-primary">
      {pending ? (
        <div className="loading loading-spinner"></div>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
