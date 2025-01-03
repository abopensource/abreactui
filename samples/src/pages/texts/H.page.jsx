import { Box, Button, H } from "abreactui"
import React from "react"

import "../styles"

/**
 * `H` component sample page.
 *
 * @module pages/texts/HPage
 * @type {import("react").ReactElement}
 */
const HPage = () => {
  const refH = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage SPage">
      <section className="Title">
        <h1>
          <code>H</code>(Heading) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { H } from "abreactui"

export const HSample = () => {
  return <H debug>H basic sample</H>
}`}
              </code>
            </pre>
            <div className="Result">
              <H debug>H basic sample</H>
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
                {`import { H } from "abreactui"

export const HSample = () => {
  return (
    <>
      <style>{".myH { color: red; }"}</style>
      <H className="myH" debug>
        H className props sample
      </H>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myH { color: red; }"}</style>
              <H className="myH" debug>
                H className props sample
              </H>
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
                {`import { H } from "abreactui"

export const HSample = () => {
  return (
    <>
      <H debug level={1}>
        H level={1} props sample
      </H>
      <H debug level={2}>
        H level={2} props sample
      </H>
      <H debug level={3}>
        H level={3} props sample
      </H>
      <H debug level={4}>
        H level={4} props sample
      </H>
      <H debug level={5}>
        H level={5} props sample
      </H>
      <H debug level={6}>
        H level={6} props sample
      </H>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <H debug level={1}>
                H level={1} props sample
              </H>
              <H debug level={2}>
                H level={2} props sample
              </H>
              <H debug level={3}>
                H level={3} props sample
              </H>
              <H debug level={4}>
                H level={4} props sample
              </H>
              <H debug level={5}>
                H level={5} props sample
              </H>
              <H debug level={6}>
                H level={6} props sample
              </H>
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
                {`import { Box, Button, H } from "abreactui"
import React from "react"

export const HSample = () => {
  const refH = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <H ref={refH} debug>
          H ref props sample
        </H>
      </Box>
      <Box style={{ margin: "1rem", textAlign: "center" }}>
        <Button
          onClick={() => {
            const text = refH.current
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
                <H ref={refH} debug>
                  H ref props sample
                </H>
              </Box>
              <Box style={{ margin: "1rem", textAlign: "center" }}>
                <Button
                  onClick={() => {
                    const text = refH.current
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

export { HPage }
