import { Box, Button, S } from "abreactui"
import React from "react"

import "../styles"

/**
 * `S` component sample page.
 *
 * @module pages/texts/SPage
 * @type {import("react").ReactElement}
 */
const SPage = () => {
  const refS = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage SPage">
      <section className="Title">
        <h1>
          <code>S</code>(Span) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { S } from "abreactui"

export const SSample = () => {
  return <S debug>S basic sample</S>
}`}
              </code>
            </pre>
            <div className="Result">
              <S debug>S basic sample</S>
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
                {`import { S } from "abreactui"

export const SSample = () => {
  return (
    <>
      <style>{".myS { color: red; }"}</style>
      <S className="myS" debug>
        S className props sample
      </S>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myS { color: red; }"}</style>
              <S className="myS" debug>
                S className props sample
              </S>
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
                {`import { Box, Button, S } from "abreactui"
import React from "react"

export const SSample = () => {
  const refS = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <S ref={refS} debug>
          S ref props sample
        </S>
      </Box>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <Button
          onClick={() => {
            const text = refS.current
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
                <S ref={refS} debug>
                  S ref props sample
                </S>
              </Box>
              <Box style={{ margin: "1rem", textAlign: "center" }}>
                <Button
                  onClick={() => {
                    const text = refS.current
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
                {`import { S } from "abreactui"

export const SSample = () => {
  return (
    <S tag="em" debug>
      S tag props sample
    </S>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <S tag="em" debug>
                S tag props sample
              </S>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { SPage }
