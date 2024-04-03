"use client";
const ErrorBoundary = ({ error, reset }) => {
  return (
    <div>
      <h1>ErrorBoundary {error.message}</h1>
      <button onClick={reset}>Try again</button>
    </div>
  );
};
export default ErrorBoundary;
