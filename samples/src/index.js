import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import App from "./App"
import { log, reportWebVitals } from "./utils"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

reportWebVitals(log.debug)
