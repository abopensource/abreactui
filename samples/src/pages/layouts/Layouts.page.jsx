import "../styles"

/**
 * ABReactUI layout elements sample page.
 *
 * @module pages/layouts/LayoutsPage
 * @type {import("react").ReactElement}
 */
const LayoutsPage = () => {
  return (
    <div className="Pages SamplePage LayoutsPage">
      <section className="Title">
        <h1>
          <code>layouts</code> Samples
        </h1>
      </section>
      <section className="Links">
        <ul>
          <li>
            <a href="/layouts/page">
              <code>Page</code>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export { LayoutsPage }
