import { Box, Button, Text } from "abreactui"
import React from "react"

import "../styles"

/**
 * `Text` component sample page.
 *
 * @module pages/texts/TextPage
 * @type {import("react").ReactElement}
 */
const TextPage = () => {
  const refText = React.useRef()
  const [active, setActive] = React.useState(false)

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
                {`import { Box, Button, Text } from "abreactui"
import React from "react"

export const TextSample = () => {
  const refText = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <Text ref={refText}>Text ref props sample</Text>
      </Box>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <Button
          onClick={() => {
            const text = refText.current
            text.style.color = !active ? "red" : ""
            setActive(!active)
          }}
        >
          {active ? "Inactive" : "Active"} text
        </Button>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ margin: "1rem", textAlign: "center" }}>
                <Text ref={refText}>Text ref props sample</Text>
              </Box>
              <Box style={{ margin: "1rem", textAlign: "center" }}>
                <Button
                  onClick={() => {
                    const text = refText.current
                    text.style.color = !active ? "red" : ""
                    setActive(!active)
                  }}
                >
                  {active ? "Inactive" : "Active"} text
                </Button>
              </Box>
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
