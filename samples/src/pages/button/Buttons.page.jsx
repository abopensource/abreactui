import "../styles"

/**
 * ABReactUI button elements sample page.
 *
 * @module pages/buttons/ButtonsPage
 * @type {import("react").ReactElement}
 */
const ButtonsPage = () => {
  return (
    <div className="Pages SamplePage ButtonsPage">
      <section className="Title">
        <h1>
          <code>buttons</code> Samples
        </h1>
      </section>
      <section className="Links">
        <ul>
          <li>
            <a href="/buttons/button">
              <code>Button</code>
            </a>
          </li>
          <li>
            <a href="/buttons/icon-button">
              <code>IconButton</code>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export { ButtonsPage }
