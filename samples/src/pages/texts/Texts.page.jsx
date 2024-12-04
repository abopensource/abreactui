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
            <a href="/texts/h">
              <code>H(Heading)</code>
            </a>
          </li>
          <li>
            <a href="/texts/mh">
              <code>MH(Memoized Heading)</code>
            </a>
          </li>
          <li>
            <a href="/texts/p">
              <code>P(Paragraph)</code>
            </a>
          </li>
          <li>
            <a href="/texts/mp">
              <code>MP(Memoized Paragraph)</code>
            </a>
          </li>
          <li>
            <a href="/texts/s">
              <code>S(Span)</code>
            </a>
          </li>
          <li>
            <a href="/texts/ms">
              <code>MS(Memoized Span)</code>
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export { TextsPage }
