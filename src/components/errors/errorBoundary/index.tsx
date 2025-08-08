import React, { Component, ReactNode } from "react";
import { BugIcon } from "@phosphor-icons/react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });

    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="text-center flex flex-col gap-8 w-fit mx-auto my-auto h-[70vh] items-center justify-center">
          <div className="flex items-center justify-center p-4 mx-auto bg-blue-100 rounded-full">
            <BugIcon size={32} className=" text-blue-600" />
          </div>
          <h1 className="md:text-5xl text-5xl">
            Oops! <br />
            Something went wrong
          </h1>
          <div className="mt-6">
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-fit cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <h4 className="text-xl">Refresh Page</h4>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
