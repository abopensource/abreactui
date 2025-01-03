import { Box, Button, Container } from "abreactui"
import React from "react"

import "../styles"

/**
 * `Container` component sample page.
 *
 * @module pages/containers/ContainerPage
 * @type {import("react").ReactElement}
 */
const ContainerPage = () => {
  const refContainer = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage ContainerPage">
      <section className="Title">
        <h1>
          <code>Container</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Container } from "abreactui"

export const ContainerSample = () => {
  return <Container debug>Container basic sample</Container>
}`}
              </code>
            </pre>
            <div className="Result">
              <Container debug>Container basic sample</Container>
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
                {`import { Container } from "abreactui"

export const ContainerSample = () => {
  return (
    <Container align="center" debug>
      Container align=&quot;center&quot; props sample
    </Container>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Container align="center" debug>
                Container align=&quot;center&quot; props sample
              </Container>
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
                {`import { Container } from "abreactui"

export const ContainerSample = () => {
  return (
    <>
      <style>{".myContainer { color: red; }"}</style>
      <Container className="myContainer" debug>
        Container className props sample
      </Container>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myContainer { color: red; }"}</style>
              <Container className="myContainer" debug>
                Container className props sample
              </Container>
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
                {`import { Box, Button, Container } from "abreactui"
import React from "react"

export const ContainerSample = () => {
  const refContainer = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Box style={{ textAlign: "center" }}>
      <Container
        debug
        ref={refContainer}
        style={{
          margin: "1rem",
          padding: "1rem",
          border: "1px solid transparent",
          borderRadius: "0.5rem",
        }}
      >
        Container ref props sample
      </Container>
      <Button
        onClick={() => {
          const article = refContainer.current
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
                <Container
                  debug
                  ref={refContainer}
                  style={{
                    margin: "1rem",
                    padding: "1rem",
                    border: "1px solid transparent",
                    borderRadius: "0.5rem",
                  }}
                >
                  Container ref props sample
                </Container>
                <Button
                  onClick={() => {
                    const article = refContainer.current
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
                {`import { Container } from "abreactui"

export const ContainerSample = () => {
  return (
    <Container debug tag="section">
      Container tag props sample
    </Container>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Container debug tag="section">
                Container tag props sample
              </Container>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { ContainerPage }
