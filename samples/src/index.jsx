import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./components"
import { log, reportWebVitals } from "./utils"

const nodeEn = process.env.NODE_ENV || "production"
const isProd = nodeEn === "production"
const _env = `${nodeEn.replace(/\b[a-z]/, (c) => c.toUpperCase())} Environment${isProd ? "" : " - Strict Mode"}`
log.debug(`${"=".repeat(_env.length)}\n${_env}\n${"-".repeat(_env.length)}`)

const root = ReactDOM.createRoot(document.getElementById("root"))
if (isProd) {
  root.render(<App />)
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

  reportWebVitals(log.debug)
}
