import { createBrowserRouter } from "react-router-dom"

import {
  ArticlePage,
  BoxPage,
  ButtonPage,
  ButtonsPage,
  ContainerPage,
  ContainersPage,
  HomePage,
  IconButtonPage,
  SamplePage,
  SectionPage,
  TextPage,
  TextsPage,
} from "../pages"

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
        path: "sample",
        element: <SamplePage />,
      },
      {
        path: "buttons",
        children: [
          {
            path: "",
            element: <ButtonsPage />,
          },
          {
            path: "button",
            element: <ButtonPage />,
          },
          {
            path: "icon-button",
            element: <IconButtonPage />,
          },
        ],
      },
      {
        path: "containers",
        children: [
          {
            path: "",
            element: <ContainersPage />,
          },
          {
            path: "article",
            element: <ArticlePage />,
          },
          {
            path: "box",
            element: <BoxPage />,
          },
          {
            path: "container",
            element: <ContainerPage />,
          },
          {
            path: "section",
            element: <SectionPage />,
          },
        ],
      },
      {
        path: "texts",
        children: [
          {
            path: "",
            element: <TextsPage />,
          },
          {
            path: "text",
            element: <TextPage />,
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
