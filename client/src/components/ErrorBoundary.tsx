import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Falha não tratada na interface do site", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="status-page">
        <div className="status-page__panel">
          <AlertTriangle size={42} aria-hidden="true" />
          <span className="eyebrow">Falha temporária</span>
          <h1>Não foi possível carregar esta página</h1>
          <p>
            Ocorreu um erro inesperado na interface. Recarregue a página para tentar novamente.
          </p>
          <button className="button-burgundy" type="button" onClick={() => window.location.reload()}>
            Recarregar página <RotateCcw size={17} />
          </button>
        </div>
      </main>
    );
  }
}

export default ErrorBoundary;
