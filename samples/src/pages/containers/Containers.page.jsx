import "../styles"

/**
 * ABReactUI container elements sample page.
 *
 * @module pages/containers/ContainersPage
 * @type {import("react").ReactElement}
 */
const ContainersPage = () => {
  return (
    <div className="Pages SamplePage ContainersPage">
      <section className="Title">
        <h1>
          <code>containers</code> Samples
        </h1>
      </section>
      <section className="Links">
        <ul>
          <li>
            <a href="/containers/article">
              <code>Article</code>
            </a>
          </li>
          <li>
            <a href="/containers/marticle">
              <code>MArticle(Memoized Article)</code>
            </a>
          </li>
          <li>
            <a href="/containers/box">
              <code>Box</code>
            </a>
          </li>
          <li>
            <a href="/containers/mbox">
              <code>MBox(Memoized Box)</code>
            </a>
          </li>
          <li>
            <a href="/containers/container">
              <code>Container</code>
            </a>
          </li>
          <li>
            <a href="/containers/mcontainer">
              <code>MContainer(Memoized Container)</code>
            </a>
          </li>
          <li>
            <a href="/containers/section">
              <code>Section</code>
            </a>
          </li>
          <li>
            <a href="/containers/msection">
              <code>MSection(Memoized Section)</code>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export { ContainersPage }
