import { createBrowserRouter } from "react-router-dom"

import {
  ArticlePage,
  BoxPage,
  ButtonPage,
  ButtonsPage,
  ContainerPage,
  ContainersPage,
  FormPage,
  FormsPage,
  HomePage,
  HPage,
  IconButtonPage,
  InputPage,
  LayoutsPage,
  PagePage,
  PPage,
  SamplePage,
  SectionPage,
  SPage,
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
            path: "iconbutton",
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
        path: "forms",
        children: [
          {
            path: "",
            element: <FormsPage />,
          },
          {
            path: "form",
            element: <FormPage />,
          },
          {
            path: "input",
            element: <InputPage />,
          },
        ],
      },
      {
        path: "layouts",
        children: [
          {
            path: "",
            element: <LayoutsPage />,
          },
          {
            path: "page",
            element: <PagePage />,
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
            path: "h",
            element: <HPage />,
          },
          {
            path: "p",
            element: <PPage />,
          },
          {
            path: "s",
            element: <SPage />,
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
const Router = createBrowserRouter(
  routes.map((route) => {
    return {
      children: route.children,
      element: route.element,
      errorElement: route.errorElement,
      path: route.path,
    }
  }),
)

export { Router }
