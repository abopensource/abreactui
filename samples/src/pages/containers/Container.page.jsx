import { Container } from "abreactui"
import { useRef } from "react"

import "../styles"

/**
 * `Container` component sample page.
 *
 * @module pages/containers/ContainerPage
 * @type {import("react").ReactElement}
 */
const ContainerPage = () => {
  const refContainer = useRef(null)

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
  return <Container>Container basic sample</Container>
}`}
              </code>
            </pre>
            <div className="Result">
              <Container>Container basic sample</Container>
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
      <Container className="myContainer">
        Container className props sample
      </Container>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myContainer { color: red; }"}</style>
              <Container className="myContainer">
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
                {`import { Container } from "abreactui"
import { useRef } from "react"

export const ContainerSample = () => {
  const refContainer = useRef(null)

  return (
    <Container
      onMouseOut={() => {
        refContainer.current.style.backgroundColor = ""
      }}
      onMouseOver={() => {
        refContainer.current.style.backgroundColor =
          "rgba(0, 0, 0, 0.125)"
      }}
      ref={refContainer}
    >
      Container ref props sample
    </Container>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Container
                onMouseOut={() => {
                  refContainer.current.style.backgroundColor = ""
                }}
                onMouseOver={() => {
                  refContainer.current.style.backgroundColor =
                    "rgba(0, 0, 0, 0.125)"
                }}
                ref={refContainer}
              >
                Container ref props sample
              </Container>
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
                {`import { Container } from "abreactui"

export const ContainerSample = () => {
  return (
    <Container style={{ padding: "1rem", backgroundColor: "yellowgreen" }}>
      Container style props sample
    </Container>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Container
                style={{ padding: "1rem", backgroundColor: "yellowgreen" }}
              >
                Container style props sample
              </Container>
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
  return <Container tag="span">Container tag props sample</Container>
}`}
              </code>
            </pre>
            <div className="Result">
              <Container tag="span">Container tag props sample</Container>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { ContainerPage }
