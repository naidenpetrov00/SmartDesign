// import { createBrowserRouter } from "react-router-dom";
// import { AppRootErrorBoundary } from "../app/pages/errors/AppRootErrorBoundary";
// import { paths } from "./paths";

// export const createAppRouter = () =>
//   createBrowserRouter([
//     {
//       path: "/",
//       lazy: async () => {
//         const { AppRoot } = await import("../app/AppRoot");
//         return { Component: AppRoot };
//       },
//       ErrorBoundary: AppRootErrorBoundary,
//       children: [
//         {
//           index: true,
//           lazy: async () => {
//             const { HomePage } = await import("../app/pages/HomePage/HomePage");
//             return { Component: HomePage };
//           },
//           ErrorBoundary: AppRootErrorBoundary,
//         },
//         {
//           path: paths.contacts.path,
//           lazy: async () => {
//             const { ContactsPage } = await import("../app/pages/ContactsPage");
//             return { Component: ContactsPage };
//           },
//           ErrorBoundary: AppRootErrorBoundary,
//         },
//         {
//           path: paths.ourWork.path,
//           lazy: async () => {
//             const { OurWorkPage } = await import("../app/pages/OurWorkPage");
//             return { Component: OurWorkPage };
//           },
//           ErrorBoundary: AppRootErrorBoundary,
//         },
//       ],
//     },
//     {
//       path: "*",
//       lazy: async () => {
//         const { NotFoundRoute } = await import(
//           "../app/pages/errors/NotFoundPage"
//         );
//         return { Component: NotFoundRoute };
//       },
//       ErrorBoundary: AppRootErrorBoundary,
//     },
//   ]);

import { createBrowserRouter } from "react-router-dom";
import { AppRootErrorBoundary } from "../app/pages/errors/AppRootErrorBoundary";
import { paths } from "./paths";

import { AppRoot } from "../app/AppRoot";
import { HomePage } from "../app/pages/HomePage/HomePage";
import { ContactsPage } from "../app/pages/ContactsPage";
import { OurWorkPage } from "../app/pages/OurWorkPage";
import { NotFoundRoute } from "../app/pages/errors/NotFoundPage";

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <AppRoot />,
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          index: true,
          element: <HomePage />,
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.contacts.path,
          element: <ContactsPage />,
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.ourWork.path,
          element: <OurWorkPage />,
          ErrorBoundary: AppRootErrorBoundary,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundRoute />,
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);
