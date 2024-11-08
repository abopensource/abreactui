import "../styles"

/**
 * ABReactUI container elements sample page.
 *
 * @module pages/containers
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
            <a href="/containers/box">
              <code>Box</code>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export { ContainersPage }
