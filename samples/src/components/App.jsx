import React from "react"
import { RouterProvider } from "react-router-dom"

import { Router } from "../routes"

/**
 * Application component.
 *
 * @module components/App
 * @type {import("react").ForwardRefExoticComponent}
 */
const App = React.forwardRef((props, ref) => {
  React.useImperativeHandle(ref, () => {})

  return <RouterProvider router={Router} />
})

export { App }
