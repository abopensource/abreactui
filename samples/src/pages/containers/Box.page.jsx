import { Box } from "abreactui"
import { useRef, useState } from "react"

import "../styles"

/**
 * `Box` component sample page.
 *
 * @module pages/containers/BoxPage
 * @type {import("react").ReactElement}
 */
const BoxPage = () => {
  const [active, setActive] = useState(false)
  const refBox = useRef(null)

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
              <code>{`import { Box } from "abreactui"

export const BoxSample = () => {
  return <Box>Box basic sample</Box>
}`}</code>
            </pre>
            <div className="Result">
              <Box>Box basic sample</Box>
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
            <code>style</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box } from "abreactui"

export const BoxSample = () => {
  return (
    <Box style={{ padding: "1rem", backgroundColor: "yellowgreen" }}>
      Box style props sample
    </Box>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ padding: "1rem", backgroundColor: "yellowgreen" }}>
                Box style props sample
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
  return <Box tag="span">Box tag props sample</Box>
}`}
              </code>
            </pre>
            <div className="Result">
              <Box tag="span">Box tag props sample</Box>
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
                {`import { Box } from "abreactui"
import { useRef, useState } from "react"

export const BoxSample = () => {
  const [active, setActive] = useState(false)
  const refBox = useRef(null)

  return (
    <Box
      onClick={() => {
        refBox.current.style.color = active ? "" : "red"
        setActive(!active)
      }}
      ref={refBox}
    >
      Box ref props sample
    </Box>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box
                onClick={() => {
                  refBox.current.style.color = active ? "" : "red"
                  setActive(!active)
                }}
                ref={refBox}
              >
                Box ref props sample
              </Box>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { BoxPage }
