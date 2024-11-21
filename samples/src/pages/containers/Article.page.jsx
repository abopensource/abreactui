import { Article } from "abreactui"
import { useRef } from "react"

import "../styles"

/**
 * `Article` component sample page.
 *
 * @module pages/containers/ArticlePage
 * @type {import("react").ReactElement}
 */
const ArticlePage = () => {
  const refArticle = useRef(null)

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
              <code>{`import { Article } from "abreactui"

export const ArticleSample = () => {
  return <Article>Article basic sample</Article>
}`}</code>
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
            <code>style</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Article } from "abreactui"

export const ArticleSample = () => {
  return (
    <Article style={{ padding: "1rem", backgroundColor: "yellowgreen" }}>
      Article style props sample
    </Article>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Article
                style={{ padding: "1rem", backgroundColor: "yellowgreen" }}
              >
                Article style props sample
              </Article>
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
  return <Article tag="span">Article tag props sample</Article>
}`}
              </code>
            </pre>
            <div className="Result">
              <Article tag="span">Article tag props sample</Article>
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
                {`import { Article } from "abreactui"
import { useRef } from "react"

export const ArticleSample = () => {
  const refArticle = useRef(null)

  return (
    <Article
      onMouseOut={() => {
        refArticle.current.style.backgroundColor = ""
      }}
      onMouseOver={() => {
        refArticle.current.style.backgroundColor = "rgba(0, 0, 0, 0.125)"
      }}
      ref={refArticle}
    >
      Article ref props sample
    </Article>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Article
                onMouseOut={() => {
                  refArticle.current.style.backgroundColor = ""
                }}
                onMouseOver={() => {
                  refArticle.current.style.backgroundColor =
                    "rgba(0, 0, 0, 0.125)"
                }}
                ref={refArticle}
              >
                Article ref props sample
              </Article>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { ArticlePage }
