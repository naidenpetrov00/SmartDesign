import { RouterProvider } from "react-router-dom";
import { createAppRouter } from "../config/createAppRouter";
import { Suspense } from "react";

export const AppRouter = () => {
  const router = createAppRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />;
    </Suspense>
  );
};
