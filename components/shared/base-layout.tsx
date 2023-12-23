import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return <div className="min-h-screen bg-gradient-to-br">{children}</div>;
}
