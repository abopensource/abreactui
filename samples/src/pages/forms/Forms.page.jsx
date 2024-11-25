import "../styles"

/**
 * ABReactUI user input form field elements sample page.
 *
 * @module pages/forms/FormsPage
 * @type {import("react").ReactElement}
 */
const FormsPage = () => {
  return (
    <div className="Pages SamplePage FormsPage">
      <section className="Title">
        <h1>
          <code>forms</code> Samples
        </h1>
      </section>
      <section className="Links">
        <ul>
          <li>
            <a href="/forms/input">
              <code>Input</code>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export { FormsPage }
