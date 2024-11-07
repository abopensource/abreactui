import { Images } from "../assets"

import "./styles/Home.page.css"

/**
 * Home index page.
 *
 * @module pages/HomePage
 * @type {import("react").ReactElement}
 */
const HomePage = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Images.React} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export { HomePage }
