import { Section } from "abreactui"
import { useRef } from "react"

import "../styles"

/**
 * `Section` component sample page.
 *
 * @module pages/containers/SectionPage
 * @type {import("react").ReactElement}
 */
const SectionPage = () => {
  const refSection = useRef(null)

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
                {`import { Section } from "abreactui"
import { useRef } from "react"

export const SectionSample = () => {
  const refSection = useRef(null)

  return (
    <Section
      onMouseOut={() => {
        refSection.current.style.backgroundColor = ""
      }}
      onMouseOver={() => {
        refSection.current.style.backgroundColor = "rgba(0, 0, 0, 0.125)"
      }}
      ref={refSection}
    >
      Section ref props sample
    </Section>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Section
                onMouseOut={() => {
                  refSection.current.style.backgroundColor = ""
                }}
                onMouseOver={() => {
                  refSection.current.style.backgroundColor =
                    "rgba(0, 0, 0, 0.125)"
                }}
                ref={refSection}
              >
                Section ref props sample
              </Section>
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
                {`import { Section } from "abreactui"

export const SectionSample = () => {
  return (
    <Section style={{ padding: "1rem", backgroundColor: "yellowgreen" }}>
      Section style prop sample
    </Section>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Section
                style={{ padding: "1rem", backgroundColor: "yellowgreen" }}
              >
                Section style prop sample
              </Section>
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
  return <Section tag="span">Section tag prop sample</Section>
}`}
              </code>
            </pre>
            <div className="Result">
              <Section tag="span">Section tag prop sample</Section>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { SectionPage }
