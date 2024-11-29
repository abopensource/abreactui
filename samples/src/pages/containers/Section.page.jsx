import { Box, Button, Section } from "abreactui"
import React from "react"

import "../styles"

/**
 * `Section` component sample page.
 *
 * @module pages/containers/SectionPage
 * @type {import("react").ReactElement}
 */
const SectionPage = () => {
  const refSection = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage SectionPage">
      <section className="Title">
        <h1>
          <code>Section</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Section } from "abreactui"

export const SectionSample = () => {
  return <Section>Section basic sample</Section>
}`}
              </code>
            </pre>
            <div className="Result">
              <Section>Section basic sample</Section>
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
                {`import { Section } from "abreactui"

export const SectionSample = () => {
  return (
    <>
      <style>{".mySection { color: red; }"}</style>
      <Section className="mySection">Section className props sample</Section>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".mySection { color: red; }"}</style>
              <Section className="mySection">
                Section className props sample
              </Section>
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
                {`import { Box, Button, Section } from "abreactui"
import React from "react"

export const SectionSample = () => {
  const refSection = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Box style={{ textAlign: "center" }}>
      <Section
        ref={refSection}
        style={{
          margin: "1rem",
          padding: "1rem",
          border: "1px solid transparent",
          borderRadius: "0.5rem",
        }}
      >
        Section ref props sample
      </Section>
      <Button
        onClick={() => {
          const article = refSection.current
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
                <Section
                  ref={refSection}
                  style={{
                    margin: "1rem",
                    padding: "1rem",
                    border: "1px solid transparent",
                    borderRadius: "0.5rem",
                  }}
                >
                  Section ref props sample
                </Section>
                <Button
                  onClick={() => {
                    const article = refSection.current
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
                {`import { Section } from "abreactui"

export const SectionSample = () => {
  return <Section tag="div">Section tag props sample</Section>
}`}
              </code>
            </pre>
            <div className="Result">
              <Section tag="div">Section tag props sample</Section>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { SectionPage }
