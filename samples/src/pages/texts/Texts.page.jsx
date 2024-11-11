import "../styles"

/**
 * ABReactUI text elements sample page.
 *
 * @module pages/texts/TextsPage
 * @type {import("react").ReactElement}
 */
const TextsPage = () => {
  return (
    <div className="Pages SamplePage TextsPage">
      <section className="Title">
        <h1>
          <code>texts</code> Samples
        </h1>
      </section>
      <section className="Links">
        <ul>
          <li>
            <a href="/texts/text">
              <code>Text</code>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export { TextsPage }
