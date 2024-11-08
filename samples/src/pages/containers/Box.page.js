import { Box } from "abreactui"
import { useRef } from "react"

import "../styles"

/**
 * `Box` component sample page.
 *
 * @module pages/containers/BoxPage
 * @type {import("react").ReactElement}
 */
const BoxPage = () => {
  const myBox = useRef(null)

  return (
    <div className="Pages SamplePage BoxPage">
      <section className="Title">
        <h1>
          <code>Box</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <pre>
            <code>&lt;Box&gt;Box element&lt;/Box&gt;</code>
          </pre>
          <div className="Result">
            <Box>Box element</Box>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>className</code> props
          </h2>
          <pre>
            <code>&lt;Box className="myBox"&gt;Box element&lt;/Box&gt;</code>
          </pre>
          <div className="Result">
            <Box className="myBox">Box element</Box>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>style</code> props
          </h2>
          <pre>
            <code>
              &lt;Box style={`{{ padding: "1rem", backgroundColor: "aqua" }}`}
              &gt;Box element&lt;/Box&gt;
            </code>
          </pre>
          <div className="Result">
            <Box style={{ padding: "1rem", backgroundColor: "aqua" }}>
              Box element
            </Box>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>tag</code> props
          </h2>
          <pre>
            <code>&lt;Box tag="span"&gt;Box element&lt;/Box&gt;</code>
          </pre>
          <div className="Result">
            <Box tag="span">Box element</Box>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>ref</code> props
          </h2>
          <pre>
            <code>&lt;Box ref={`{myBox}`}&gt;Box element&lt;/Box&gt;</code>
          </pre>
          <div className="Result">
            <Box ref={myBox}>Box element</Box>
          </div>
        </article>
      </section>
    </div>
  )
}

export { BoxPage }
