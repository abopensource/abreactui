import { MArticle, Box, Button } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MArticle` component sample page.
 *
 * @module pages/containers/MArticlePage
 * @type {import("react").ReactElement}
 */
const MArticlePage = () => {
  const refMArticle = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage MArticlePage">
      <section className="Title">
        <h1>
          <code>MArticle</code>(Memoized Article) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MArticle } from "abreactui"

export const MArticleSample = () => {
  return <MArticle debug>MArticle basic sample</MArticle>
}`}
              </code>
            </pre>
            <div className="Result">
              <MArticle debug>MArticle basic sample</MArticle>
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
                {`import { MArticle } from "abreactui"

export const MArticleSample = () => {
  return (
    <MArticle align="center" debug>
      MArticle align=&quot;center&quot; props sample
    </MArticle>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MArticle align="center" debug>
                MArticle align=&quot;center&quot; props sample
              </MArticle>
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
                {`import { MArticle } from "abreactui"

export const MArticleSample = () => {
  return (
    <>
      <style>{".myArticle { color: red; }"}</style>
      <MArticle className="myArticle" debug>
        MArticle className props sample
      </MArticle>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myArticle { color: red; }"}</style>
              <MArticle className="myArticle" debug>
                MArticle className props sample
              </MArticle>
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
                {`import { MArticle, Box, Button } from "abreactui"
import React from "react"

export const MArticleSample = () => {
  const refMArticle = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Box style={{ textAlign: "center" }}>
      <MArticle
        debug
        ref={refMArticle}
        style={{
          margin: "1rem",
          padding: "1rem",
          border: "1px solid transparent",
          borderRadius: "0.5rem",
        }}
      >
        MArticle ref props sample
      </MArticle>
      <Button
        onClick={() => {
          const article = refMArticle.current
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
        {active ? "Inactive" : "Active"} article
      </Button>
    </Box>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ textAlign: "center" }}>
                <MArticle
                  debug
                  ref={refMArticle}
                  style={{
                    margin: "1rem",
                    padding: "1rem",
                    border: "1px solid transparent",
                    borderRadius: "0.5rem",
                  }}
                >
                  MArticle ref props sample
                </MArticle>
                <Button
                  onClick={() => {
                    const article = refMArticle.current
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
                  {active ? "Inactive" : "Active"} article
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
                {`import { MArticle } from "abreactui"

export const MArticleSample = () => {
  return (
    <MArticle debug tag="div">
      MArticle tag props sample
    </MArticle>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MArticle debug tag="div">
                MArticle tag props sample
              </MArticle>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MArticlePage }
