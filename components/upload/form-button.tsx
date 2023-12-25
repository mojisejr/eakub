"use client";
import { useFormStatus } from "react-dom";

export default function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-primary">
      {pending ? <div className="loading loading-spinner"></div> : "ขายเลย"}
    </button>
  );
}
