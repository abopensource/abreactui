import { Text } from "abreactui"
import { useRef } from "react"

import "../styles"

/**
 * `Text` component sample page.
 *
 * @module pages/texts/TextPage
 * @type {import("react").ReactElement}
 */
const TextPage = () => {
  const myText = useRef(null)

  return (
    <div className="Pages SamplePage TextPage">
      <section className="Title">
        <h1>
          <code>Text</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <pre>
            <code>{`<Text>Text element</Text>`}</code>
          </pre>
          <div className="Result">
            <Text>Text element</Text>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>className</code> props
          </h2>
          <pre>
            <code>{`<Text className="myText">Text element</Text>`}</code>
          </pre>
          <div className="Result">
            <Text className="myText">Text element</Text>
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
`<Text style={{ padding: "1rem", backgroundColor: "aqua" }}>
  Text element
</Text>`
              }
            </code>
          </pre>
          <div className="Result">
            <Text style={{ padding: "1rem", backgroundColor: "aqua" }}>
              Text element
            </Text>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>tag</code> props
          </h2>
          <pre>
            <code>{`<Text tag="p">Text element</Text>`}</code>
          </pre>
          <div className="Result">
            <Text tag="p">Text element</Text>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>ref</code> props
          </h2>
          <pre>
            <code>{`<Text ref={myText}>Text element</Text>`}</code>
          </pre>
          <div className="Result">
            <Text ref={myText}>Text element</Text>
          </div>
        </article>
      </section>
    </div>
  )
}

export { TextPage }
