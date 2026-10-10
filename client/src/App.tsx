import ErrorBoundary from "@/components/ErrorBoundary";
import type { ComponentType } from "react";

export default function App({ Page }: { Page: ComponentType }) {
  return (
    <ErrorBoundary>
      <Page />
    </ErrorBoundary>
  );
}
