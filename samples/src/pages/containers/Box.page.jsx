import { Box, Button } from "abreactui"
import React from "react"

import "../styles"

/**
 * `Box` component sample page.
 *
 * @module pages/containers/BoxPage
 * @type {import("react").ReactElement}
 */
const BoxPage = () => {
  const refBox = React.useRef()
  const [active, setActive] = React.useState(false)

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
          <div className="Example">
            <pre>
              <code>
                {`import { Box } from "abreactui"

export const BoxSample = () => {
  return <Box>Box basic sample</Box>
}`}
              </code>
            </pre>
            <div className="Result">
              <Box>Box basic sample</Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>align</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box } from "abreactui"

export const BoxSample = () => {
  return <Box align="center">Box align=&quot;center&quot; props sample</Box>
}`}
              </code>
            </pre>
            <div className="Result">
              <Box align="center">
                Box align=&quot;center&quot; props sample
              </Box>
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
                {`import { Box } from "abreactui"

export const BoxSample = () => {
  return (
    <>
      <style>{".myBox { color: red; }"}</style>
      <Box className="myBox">Box className props sample</Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myBox { color: red; }"}</style>
              <Box className="myBox">Box className props sample</Box>
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
                {`import { Box, Button } from "abreactui"
import React from "react"

export const BoxSample = () => {
  const refBox = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Box style={{ textAlign: "center" }}>
      <Box
        ref={refBox}
        style={{
          margin: "1rem",
          padding: "1rem",
          border: "1px solid transparent",
          borderRadius: "0.5rem",
        }}
      >
        Box ref props sample
      </Box>
      <Button
        onClick={() => {
          const box = refBox.current
          if (!active) {
            box.style.borderColor = "rgba(0, 0, 0, 0.25)"
            box.style.backgroundColor = "rgba(150, 200, 50, 0.125)"
          } else {
            box.style.borderColor = "transparent"
            box.style.backgroundColor = ""
          }
          setActive(!active)
        }}
      >
        {active ? "Inactive" : "Active"} box
      </Button>
    </Box>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ textAlign: "center" }}>
                <Box
                  ref={refBox}
                  style={{
                    margin: "1rem",
                    padding: "1rem",
                    border: "1px solid transparent",
                    borderRadius: "0.5rem",
                  }}
                >
                  Box ref props sample
                </Box>
                <Button
                  onClick={() => {
                    const box = refBox.current
                    if (!active) {
                      box.style.borderColor = "rgba(0, 0, 0, 0.25)"
                      box.style.backgroundColor = "rgba(150, 200, 50, 0.125)"
                    } else {
                      box.style.borderColor = "transparent"
                      box.style.backgroundColor = ""
                    }
                    setActive(!active)
                  }}
                >
                  {active ? "Inactive" : "Active"} box
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
                {`import { Box } from "abreactui"

export const BoxSample = () => {
  return <Box tag="p">Box tag props sample</Box>
}`}
              </code>
            </pre>
            <div className="Result">
              <Box tag="p">Box tag props sample</Box>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { BoxPage }
