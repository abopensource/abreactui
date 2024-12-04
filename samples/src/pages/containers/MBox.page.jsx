import { MBox, Button } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MBox` component sample page.
 *
 * @module pages/containers/MBoxPage
 * @type {import("react").ReactElement}
 */
const MBoxPage = () => {
  const refMBox = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage MBoxPage">
      <section className="Title">
        <h1>
          <code>MBox</code>(Memoized Box) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MBox } from "abreactui"

export const MBoxSample = () => {
  return <MBox debug>MBox basic sample</MBox>
}`}
              </code>
            </pre>
            <div className="Result">
              <MBox debug>MBox basic sample</MBox>
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
                {`import { MBox } from "abreactui"

export const MBoxSample = () => {
  return (
    <MBox align="center" debug>
      MBox align=&quot;center&quot; props sample
    </MBox>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MBox align="center" debug>
                MBox align=&quot;center&quot; props sample
              </MBox>
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
                {`import { MBox } from "abreactui"

export const MBoxSample = () => {
  return (
    <>
      <style>{".myBox { color: red; }"}</style>
      <MBox className="myBox" debug>
        MBox className props sample
      </MBox>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myBox { color: red; }"}</style>
              <MBox className="myBox" debug>
                MBox className props sample
              </MBox>
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
                {`import { MBox, Button } from "abreactui"
import React from "react"

export const MBoxSample = () => {
  const refMBox = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <MBox style={{ textAlign: "center" }}>
      <MBox
        debug
        ref={refMBox}
        style={{
          margin: "1rem",
          padding: "1rem",
          border: "1px solid transparent",
          borderRadius: "0.5rem",
        }}
      >
        MBox ref props sample
      </MBox>
      <Button
        onClick={() => {
          const box = refMBox.current
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
    </MBox>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MBox style={{ textAlign: "center" }}>
                <MBox
                  debug
                  ref={refMBox}
                  style={{
                    margin: "1rem",
                    padding: "1rem",
                    border: "1px solid transparent",
                    borderRadius: "0.5rem",
                  }}
                >
                  MBox ref props sample
                </MBox>
                <Button
                  onClick={() => {
                    const box = refMBox.current
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
              </MBox>
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
                {`import { MBox } from "abreactui"

export const MBoxSample = () => {
  return (
    <MBox debug tag="p">
      MBox tag props sample
    </MBox>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MBox debug tag="p">
                MBox tag props sample
              </MBox>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MBoxPage }
