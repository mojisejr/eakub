import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout1({ children }: BaseLayoutProps) {
  return <div className="min-h-screen my-bg-1 px-10">{children}</div>;
}
