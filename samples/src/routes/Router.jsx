import { createBrowserRouter } from "react-router-dom"

import { HomePage } from "../pages"

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
    element: <HomePage />,
  },
]

/**
 * Browser router for client-side routing.
 *
 * @module routes/Router
 * @type {import("@remix-run/router").Router}
 */
const Router = createBrowserRouter(
  routes.map(({ children, element, errorElement, path }) => ({
    children,
    element,
    errorElement,
    path,
  })),
)

export { Router }
