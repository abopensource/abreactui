import { Container } from "abreactui"
import { useRef } from "react"

import "../styles"

/**
 * `Container` component sample page.
 *
 * @module pages/containers/ContainerPage
 * @type {import("react").ReactElement}
 */
const ContainerPage = () => {
  const myContainer = useRef(null)

  return (
    <div className="Pages SamplePage ContainerPage">
      <section className="Title">
        <h1>
          <code>Container</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <pre>
            <code>&lt;Container&gt;Container element&lt;/Container&gt;</code>
          </pre>
          <div className="Result">
            <Container>Container element</Container>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>className</code> props
          </h2>
          <pre>
            <code>
              &lt;Container className=&ldquo;myContainer&rdquo;&gt;Container
              element&lt;/Container&gt;
            </code>
          </pre>
          <div className="Result">
            <Container className="myContainer">Container element</Container>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>style</code> props
          </h2>
          <pre>
            <code>
              &lt;Container style=
              {`{{ padding: "1rem", backgroundColor: "aqua" }}`}
              &gt;Container element&lt;/Container&gt;
            </code>
          </pre>
          <div className="Result">
            <Container style={{ padding: "1rem", backgroundColor: "aqua" }}>
              Container element
            </Container>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>tag</code> props
          </h2>
          <pre>
            <code>
              &lt;Container tag=&ldquo;span&rdquo;&gt;Container
              element&lt;/Container&gt;
            </code>
          </pre>
          <div className="Result">
            <Container tag="span">Container element</Container>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>ref</code> props
          </h2>
          <pre>
            <code>
              &lt;Container ref={`{myContainer}`}&gt;Container
              element&lt;/Container&gt;
            </code>
          </pre>
          <div className="Result">
            <Container ref={myContainer}>Container element</Container>
          </div>
        </article>
      </section>
    </div>
  )
}

export { ContainerPage }