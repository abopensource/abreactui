import { log } from "abreactui"
import React from "react"
import ReactDOM from "react-dom/client"

import { App } from "./components"
import { reportWebVitals } from "./utils"

const root = ReactDOM.createRoot(document.getElementById("root"))
if ((process.env.NODE_ENV || "production") === "production") {
  root.render(<App ref={(ref) => (window.app = ref)} />)
} else {
  const _env = "Strict Mode"
  log.debug(`${"=".repeat(_env.length)}\n${_env}\n${"-".repeat(_env.length)}`)

  root.render(
    <React.StrictMode>
      <App ref={(ref) => (window.app = ref)} />
    </React.StrictMode>,
  )

  reportWebVitals(log.debug)
}
