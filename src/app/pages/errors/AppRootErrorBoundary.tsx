import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export const AppRootErrorBoundary = () => {
  const error = useRouteError();

  let status = 500;
  let message = "Something went wrong.";
  let sorry = "Sorry, an unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    status = error.status;
    try {
      const parsed = JSON.parse(error.data);
      sorry = parsed.sorry || sorry;
    } catch {
      // If it's not JSON, fallback
      message = typeof error.data === "string" ? error.data : message;
    }
  } else if (error instanceof Error) {
    message = error.message;
  }
  return (
    <div role="alert" aria-live="assertive" aria-labelledby="error-message">
      <h1 id="error-message">{status}</h1>
      <h2>{sorry}</h2>
      <p>
        {message}
        <br />
        If you believe this is a mistake, please reach out to{" "}
        <a
          href="mailto:e.videnov@smart-projects.bg"
          aria-label="Email Emanuil Videnov"
        >
          e.videnov@smart-projects.bg
        </a>
        .
      </p>
    </div>
  );
};
