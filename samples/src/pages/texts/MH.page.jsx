import { Box, Button, MH } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MH` component sample page.
 *
 * @module pages/texts/MHPage
 * @type {import("react").ReactElement}
 */
const MHPage = () => {
  const refMH = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage SPage">
      <section className="Title">
        <h1>
          <code>MH</code>(Memoized Heading) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MH } from "abreactui"

export const MHSample = () => {
  return <MH debug>MH basic sample</MH>
}`}
              </code>
            </pre>
            <div className="Result">
              <MH debug>MH basic sample</MH>
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
                {`import { MH } from "abreactui"

export const MHSample = () => {
  return (
    <>
      <style>{".myH { color: red; }"}</style>
      <MH className="myH" debug>
        MH className props sample
      </MH>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myH { color: red; }"}</style>
              <MH className="myH" debug>
                MH className props sample
              </MH>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>level</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MH } from "abreactui"

export const MHSample = () => {
  return (
    <>
      <MH debug level={1}>
        MH level={1} props sample
      </MH>
      <MH debug level={2}>
        MH level={2} props sample
      </MH>
      <MH debug level={3}>
        MH level={3} props sample
      </MH>
      <MH debug level={4}>
        MH level={4} props sample
      </MH>
      <MH debug level={5}>
        MH level={5} props sample
      </MH>
      <MH debug level={6}>
        MH level={6} props sample
      </MH>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MH debug level={1}>
                MH level={1} props sample
              </MH>
              <MH debug level={2}>
                MH level={2} props sample
              </MH>
              <MH debug level={3}>
                MH level={3} props sample
              </MH>
              <MH debug level={4}>
                MH level={4} props sample
              </MH>
              <MH debug level={5}>
                MH level={5} props sample
              </MH>
              <MH debug level={6}>
                MH level={6} props sample
              </MH>
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
                {`import { Box, Button, MH } from "abreactui"
import React from "react"

export const MHSample = () => {
  const refMH = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <MH ref={refMH} debug>
          MH ref props sample
        </MH>
      </Box>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <Button
          onClick={() => {
            const text = refMH.current
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
                <MH ref={refMH} debug>
                  MH ref props sample
                </MH>
              </Box>
              <Box style={{ margin: "1rem", textAlign: "center" }}>
                <Button
                  onClick={() => {
                    const text = refMH.current
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

export { MHPage }
