import { Section } from "abreactui"
import { useRef } from "react"

import "../styles"

/**
 * `Section` component sample page.
 *
 * @module pages/containers/SectionPage
 * @type {import("react").ReactElement}
 */
const SectionPage = () => {
  const mySection = useRef(null)

  return (
    <div className="Pages SamplePage SectionPage">
      <section className="Title">
        <h1>
          <code>Section</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <pre>
            <code>{`<Section>Section element</Section>`}</code>
          </pre>
          <div className="Result">
            <Section>Section element</Section>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>className</code> props
          </h2>
          <pre>
            <code>{`<Section className="mySection">Section element</Section>`}</code>
          </pre>
          <div className="Result">
            <Section className="mySection">Section element</Section>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>style</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<Section style={{ padding: "1rem", backgroundColor: "aqua" }}>
  Section element
</Section>`                
              }
            </code>
          </pre>
          <div className="Result">
            <Section style={{ padding: "1rem", backgroundColor: "aqua" }}>
              Section element
            </Section>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>tag</code> props
          </h2>
          <pre>
            <code>{`<Section tag="span">Section element</Section>`}</code>
          </pre>
          <div className="Result">
            <Section tag="span">Section element</Section>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>ref</code> props
          </h2>
          <pre>
            <code>{`<Section ref={mySection}>Section element</Section>`}</code>
          </pre>
          <div className="Result">
            <Section ref={mySection}>Section element</Section>
          </div>
        </article>
      </section>
    </div>
  )
}

export { SectionPage }
