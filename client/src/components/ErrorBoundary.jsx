import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <main className="flex min-h-screen items-center justify-center p-6">
          <div className="panel-card max-w-lg text-center">
            <h1 className="text-xl font-semibold text-white">Something went wrong</h1>
            <p className="mt-3 text-sm text-gray-400">
              Make sure you started the site with <code className="text-accent-light">npm run dev</code>
              {' '}and open <code className="text-accent-light">http://localhost:5173</code>
            </p>
            <p className="mt-2 text-xs text-gray-500">{String(this.state.error)}</p>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
