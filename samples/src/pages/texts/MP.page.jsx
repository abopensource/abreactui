import { Box, Button, MP } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MP` component sample page.
 *
 * @module pages/texts/MPPage
 * @type {import("react").ReactElement}
 */
const MPPage = () => {
  const refMP = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage SPage">
      <section className="Title">
        <h1>
          <code>MP</code>(Memoized Paragraph) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MP } from "abreactui"

export const MPSample = () => {
  return <MP debug>MP basic sample</MP>
}`}
              </code>
            </pre>
            <div className="Result">
              <MP debug>MP basic sample</MP>
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
                {`import { MP } from "abreactui"

export const MPSample = () => {
  return (
    <>
      <style>{".myMP { color: red; }"}</style>
      <MP className="myMP" debug>
        MP className props sample
      </MP>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myMP { color: red; }"}</style>
              <MP className="myMP" debug>
                MP className props sample
              </MP>
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
                {`import { Box, Button, MP } from "abreactui"
import React from "react"

export const MPSample = () => {
  const refS = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <MP ref={refMP} debug>
          MP ref props sample
        </MP>
      </Box>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <Button
          onClick={() => {
            const text = refMP.current
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
                <MP ref={refMP} debug>
                  MP ref props sample
                </MP>
              </Box>
              <Box style={{ margin: "1rem", textAlign: "center" }}>
                <Button
                  onClick={() => {
                    const text = refMP.current
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

export { MPPage }
