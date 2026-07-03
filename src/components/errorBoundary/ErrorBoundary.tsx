import './ErrorBoundary.scss';

import React from 'react';

import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

function ErrorBoundaryFallback() {
  const handleGoHome = () => {
    window.location.assign('/');
  };

  return (
    <div className='error-boundary'>
      <Header />
      <main className='error-boundary__content'>
        <div className='error-boundary__body'>
          <h1 className='error-boundary__title'>Something went wrong</h1>
          <button
            type='button'
            className='error-boundary__button'
            onClick={handleGoHome}
          >
            Go to main page
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryFallback />;
    }

    return this.props.children;
  }
}
