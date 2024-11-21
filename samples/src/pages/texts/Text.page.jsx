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
  const refText = useRef(null)

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
          <div className="Example">
            <pre>
              <code>
                {`import { Text } from "abreactui"

export const TextSample = () => {
  return <Text>Text basic sample</Text>
}`}
              </code>
            </pre>
            <div className="Result">
              <Text>Text basic sample</Text>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>className</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Text } from "abreactui"

export const TextSample = () => {
  return (
    <>
      <style>{".myText { color: red; }"}</style>
      <Text className="myText">Text className props sample</Text>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myText { color: red; }"}</style>
              <Text className="myText">Text className props sample</Text>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>ref</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Text } from "abreactui"
import { useRef } from "react"

export const TextSample = () => {
  const refText = useRef(null)

  return (
    <Text
      onMouseOut={() => {
        refText.current.style.backgroundColor = ""
      }}
      onMouseOver={() => {
        refText.current.style.backgroundColor = "rgba(0, 0, 0, 0.125)"
      }}
      ref={refText}
    >
      Text ref props sample
    </Text>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Text
                onMouseOut={() => {
                  refText.current.style.backgroundColor = ""
                }}
                onMouseOver={() => {
                  refText.current.style.backgroundColor = "rgba(0, 0, 0, 0.125)"
                }}
                ref={refText}
              >
                Text ref props sample
              </Text>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>style</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Text } from "abreactui"

export const TextSample = () => {
  return (
    <Text style={{ padding: "1rem", backgroundColor: "yellowgreen" }}>
      Text style props sample
    </Text>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Text style={{ padding: "1rem", backgroundColor: "yellowgreen" }}>
                Text style props sample
              </Text>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>tag</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Text } from "abreactui"

export const TextSample = () => {
  return <Text tag="p">Text tag props sample</Text>
}`}
              </code>
            </pre>
            <div className="Result">
              <Text tag="p">Text tag props sample</Text>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { TextPage }
