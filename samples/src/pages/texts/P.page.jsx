import { Box, Button, P } from "abreactui"
import React from "react"

import "../styles"

/**
 * `P` component sample page.
 *
 * @module pages/texts/PPage
 * @type {import("react").ReactElement}
 */
const PPage = () => {
  const refP = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage SPage">
      <section className="Title">
        <h1>
          <code>P</code>(Paragraph) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { P } from "abreactui"

export const PSample = () => {
  return <P debug>P basic sample</P>
}`}
              </code>
            </pre>
            <div className="Result">
              <P debug>P basic sample</P>
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
                {`import { P } from "abreactui"

export const PSample = () => {
  return (
    <>
      <style>{".myP { color: red; }"}</style>
      <P className="myP" debug>
        P className props sample
      </P>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myP { color: red; }"}</style>
              <P className="myP" debug>
                P className props sample
              </P>
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
                {`import { Box, Button, P } from "abreactui"
import React from "react"

export const PSample = () => {
  const refS = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <P ref={refP} debug>P ref props sample</P>
      </Box>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <Button
          onClick={() => {
            const text = refP.current
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
                <P ref={refP} debug>
                  P ref props sample
                </P>
              </Box>
              <Box style={{ margin: "1rem", textAlign: "center" }}>
                <Button
                  onClick={() => {
                    const text = refP.current
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
      </section>
    </div>
  )
}

export { PPage }
