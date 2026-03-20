import { Component, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
    // Add analytics / reporting service here if needed
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
          <h1 className="text-4xl font-serif font-bold mb-3">Something went wrong</h1>
          <p className="text-base text-muted-foreground mb-4 max-w-xl text-center">
            We couldn&apos;t load this section. Please refresh the page or try again later.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-400 text-white font-semibold transition"
            >
              Reload
            </button>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}
              className="px-5 py-2 rounded-full bg-slate-700 hover:bg-slate-600 text-white font-semibold transition"
            >
              Close
            </button>
          </div>
          {this.state.error && (
            <details className="mt-5 text-xs text-slate-300 bg-black/25 p-3 rounded max-w-lg overflow-x-auto">
              <summary>Error details</summary>
              <pre className="whitespace-pre-wrap">{this.state.error.message}</pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
