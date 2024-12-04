import { Box, Button, MContainer } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MContainer` component sample page.
 *
 * @module pages/containers/MContainerPage
 * @type {import("react").ReactElement}
 */
const MContainerPage = () => {
  const refMContainer = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage MContainerPage">
      <section className="Title">
        <h1>
          <code>MContainer</code>(Memoized Container) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MContainer } from "abreactui"

export const MContainerSample = () => {
  return <MContainer debug>MContainer basic sample</MContainer>
}`}
              </code>
            </pre>
            <div className="Result">
              <MContainer debug>MContainer basic sample</MContainer>
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
                {`import { MContainer } from "abreactui"

export const MContainerSample = () => {
  return (
    <MContainer align="center" debug>
      MContainer align=&quot;center&quot; props sample
    </MContainer>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MContainer align="center" debug>
                MContainer align=&quot;center&quot; props sample
              </MContainer>
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
                {`import { MContainer } from "abreactui"

export const MContainerSample = () => {
  return (
    <>
      <style>{".myContainer { color: red; }"}</style>
      <MContainer className="myContainer" debug>
        MContainer className props sample
      </MContainer>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myContainer { color: red; }"}</style>
              <MContainer className="myContainer" debug>
                MContainer className props sample
              </MContainer>
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
                {`import { Box, Button, MContainer } from "abreactui"
import React from "react"

export const MContainerSample = () => {
  const refMContainer = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Box style={{ textAlign: "center" }}>
      <MContainer
        debug
        ref={refMContainer}
        style={{
          margin: "1rem",
          padding: "1rem",
          border: "1px solid transparent",
          borderRadius: "0.5rem",
        }}
      >
        MContainer ref props sample
      </MContainer>
      <Button
        onClick={() => {
          const article = refMContainer.current
          if (!active) {
            article.style.borderColor = "rgba(0, 0, 0, 0.25)"
            article.style.backgroundColor = "rgba(150, 200, 50, 0.25)"
          } else {
            article.style.borderColor = "transparent"
            article.style.backgroundColor = ""
          }
          setActive(!active)
        }}
      >
        {active ? "Inactive" : "Active"} container
      </Button>
    </Box>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ textAlign: "center" }}>
                <MContainer
                  debug
                  ref={refMContainer}
                  style={{
                    margin: "1rem",
                    padding: "1rem",
                    border: "1px solid transparent",
                    borderRadius: "0.5rem",
                  }}
                >
                  MContainer ref props sample
                </MContainer>
                <Button
                  onClick={() => {
                    const article = refMContainer.current
                    if (!active) {
                      article.style.borderColor = "rgba(0, 0, 0, 0.25)"
                      article.style.backgroundColor = "rgba(150, 200, 50, 0.25)"
                    } else {
                      article.style.borderColor = "transparent"
                      article.style.backgroundColor = ""
                    }
                    setActive(!active)
                  }}
                >
                  {active ? "Inactive" : "Active"} container
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
                {`import { MContainer } from "abreactui"

export const MContainerSample = () => {
  return (
    <MContainer debug tag="section">
      MContainer tag props sample
    </MContainer>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MContainer debug tag="section">
                MContainer tag props sample
              </MContainer>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MContainerPage }
