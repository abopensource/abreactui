import { createBrowserRouter } from "react-router-dom"

import { BoxPage, ContainersPage, HomePage } from "../pages"

/**
 * List of `RouteObject` to use in the browser router.
 *
 * @private
 * @constant
 * @type {import("react-router").RouteObject[]}
 */
const routes = [
  {
    path: "/",
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "containers",
        children: [
          {
            path: "",
            element: <ContainersPage />,
          },
          {
            path: "box",
            element: <BoxPage />,
          },
        ],
      },
    ],
  },
]

/**
 * Browser router for client-side routing.
 *
 * @module routes/Router
 * @type {import("@remix-run/router").Router}
 */
const Router = createBrowserRouter(routes)

export { Router }
