import { Article, Box, Button } from "abreactui"
import React from "react"

import "../styles"

/**
 * `Article` component sample page.
 *
 * @module pages/containers/ArticlePage
 * @type {import("react").ReactElement}
 */
const ArticlePage = () => {
  const refArticle = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage ArticlePage">
      <section className="Title">
        <h1>
          <code>Article</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Article } from "abreactui"

export const ArticleSample = () => {
  return <Article>Article basic sample</Article>
}`}
              </code>
            </pre>
            <div className="Result">
              <Article>Article basic sample</Article>
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
                {`import { Article } from "abreactui"

export const ArticleSample = () => {
  return (
    <>
      <style>{".myArticle { color: red; }"}</style>
      <Article className="myArticle">Article className props sample</Article>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myArticle { color: red; }"}</style>
              <Article className="myArticle">
                Article className props sample
              </Article>
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
                {`import { Article, Box, Button } from "abreactui"
import React from "react"

export const ArticleSample = () => {
  const refArticle = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Box style={{ textAlign: "center" }}>
      <Article
        ref={refArticle}
        style={{
          margin: "1rem",
          padding: "1rem",
          border: "1px solid transparent",
          borderRadius: "0.5rem",
        }}
      >
        Article ref props sample
      </Article>
      <Button
        onClick={() => {
          const article = refArticle.current
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
                <Article
                  ref={refArticle}
                  style={{
                    margin: "1rem",
                    padding: "1rem",
                    border: "1px solid transparent",
                    borderRadius: "0.5rem",
                  }}
                >
                  Article ref props sample
                </Article>
                <Button
                  onClick={() => {
                    const article = refArticle.current
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
                {`import { Article } from "abreactui"

export const ArticleSample = () => {
  return <Article tag="div">Article tag props sample</Article>
}`}
              </code>
            </pre>
            <div className="Result">
              <Article tag="div">Article tag props sample</Article>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { ArticlePage }
