import { Box, Button, MS } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MS` component sample page.
 *
 * @module pages/texts/MSPage
 * @type {import("react").ReactElement}
 */
const MSPage = () => {
  const refMS = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage MSPage">
      <section className="Title">
        <h1>
          <code>MS</code>(Memoized Span) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MS } from "abreactui"

export const MSSample = () => {
  return <MS debug>MS basic sample</MS>
}`}
              </code>
            </pre>
            <div className="Result">
              <MS debug>MS basic sample</MS>
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
                {`import { MS } from "abreactui"

export const MSSample = () => {
  return (
    <>
      <style>{".myMS { color: red; }"}</style>
      <MS className="myMS" debug>
        MS className props sample
      </MS>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myMS { color: red; }"}</style>
              <MS className="myMS" debug>
                MS className props sample
              </MS>
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
                {`import { Box, Button, MS } from "abreactui"
import React from "react"

export const MSSample = () => {
  const refMS = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <MS ref={refMS} debug>
          MS ref props sample
        </MS>
      </Box>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <Button
          onClick={() => {
            const text = refMS.current
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
                <MS ref={refMS} debug>
                  MS ref props sample
                </MS>
              </Box>
              <Box style={{ margin: "1rem", textAlign: "center" }}>
                <Button
                  onClick={() => {
                    const text = refMS.current
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
                {`import { MS } from "abreactui"

export const MSSample = () => {
  return (
    <MS tag="em" debug>
      MS tag props sample
    </MS>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MS tag="em" debug>
                MS tag props sample
              </MS>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MSPage }
