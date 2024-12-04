import { Box, Button, MSection } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MSection` component sample page.
 *
 * @module pages/containers/MSectionPage
 * @type {import("react").ReactElement}
 */
const MSectionPage = () => {
  const refMSection = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage MSectionPage">
      <section className="Title">
        <h1>
          <code>MSection</code>(Memoized Section) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MSection } from "abreactui"

export const MSectionSample = () => {
  return <MSection debug>MSection basic sample</MSection>
}`}
              </code>
            </pre>
            <div className="Result">
              <MSection debug>MSection basic sample</MSection>
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
                {`import { MSection } from "abreactui"

export const MSectionSample = () => {
  return (
    <MSection align="center" debug>
      MSection align=&quot;center&quot; props sample
    </MSection>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MSection align="center" debug>
                MSection align=&quot;center&quot; props sample
              </MSection>
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
                {`import { MSection } from "abreactui"

export const MSectionSample = () => {
  return (
    <>
      <style>{".mySection { color: red; }"}</style>
      <MSection className="mySection" debug>
        MSection className props sample
      </MSection>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".mySection { color: red; }"}</style>
              <MSection className="mySection" debug>
                MSection className props sample
              </MSection>
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
                {`import { Box, Button, MSection } from "abreactui"
import React from "react"

export const MSectionSample = () => {
  const refMSection = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Box style={{ textAlign: "center" }}>
      <MSection
        debug
        ref={refMSection}
        style={{
          margin: "1rem",
          padding: "1rem",
          border: "1px solid transparent",
          borderRadius: "0.5rem",
        }}
      >
        MSection ref props sample
      </MSection>
      <Button
        onClick={() => {
          const article = refMSection.current
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
        {active ? "Inactive" : "Active"} section
      </Button>
    </Box>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ textAlign: "center" }}>
                <MSection
                  debug
                  ref={refMSection}
                  style={{
                    margin: "1rem",
                    padding: "1rem",
                    border: "1px solid transparent",
                    borderRadius: "0.5rem",
                  }}
                >
                  MSection ref props sample
                </MSection>
                <Button
                  onClick={() => {
                    const article = refMSection.current
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
                  {active ? "Inactive" : "Active"} section
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
                {`import { MSection } from "abreactui"

export const MSectionSample = () => {
  return (
    <MSection debug tag="div">
      MSection tag props sample
    </MSection>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MSection debug tag="div">
                MSection tag props sample
              </MSection>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MSectionPage }
