import { Images } from "../assets"
import "./styles"

/**
 * Home index page.
 *
 * @module pages/HomePage
 * @type {import("react").ReactElement}
 */
const HomePage = () => {
  return (
    <div className="Pages HomePage">
      <section className="Title">
        <img src={Images.React} className="ReactLogo" alt="React logo" />
        <h1>
          <em>ABReactUI</em> Samples
        </h1>
      </section>
      <section className="Links">
        <ul>
          <li>
            <a href="/containers">Container elements</a>
          </li>
          <li>
            <a href="/texts">Text elements</a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export { HomePage }
