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
  const myArticle = useRef(null)

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
          <pre>
            <code>&lt;Article&gt;Article element&lt;/Article&gt;</code>
          </pre>
          <div className="Result">
            <Article>Article element</Article>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>className</code> props
          </h2>
          <pre>
            <code>
              &lt;Article className=&ldquo;myArticle&rdquo;&gt;Article
              element&lt;/Article&gt;
            </code>
          </pre>
          <div className="Result">
            <Article className="myArticle">Article element</Article>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>style</code> props
          </h2>
          <pre>
            <code>
              &lt;Article style=
              {`{{ padding: "1rem", backgroundColor: "aqua" }}`}
              &gt;Article element&lt;/Article&gt;
            </code>
          </pre>
          <div className="Result">
            <Article style={{ padding: "1rem", backgroundColor: "aqua" }}>
              Article element
            </Article>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>tag</code> props
          </h2>
          <pre>
            <code>
              &lt;Article tag=&ldquo;span&rdquo;&gt;Article
              element&lt;/Article&gt;
            </code>
          </pre>
          <div className="Result">
            <Article tag="span">Article element</Article>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>ref</code> props
          </h2>
          <pre>
            <code>
              &lt;Article ref={`{myArticle}`}&gt;Article element&lt;/Article&gt;
            </code>
          </pre>
          <div className="Result">
            <Article ref={myArticle}>Article element</Article>
          </div>
        </article>
      </section>
    </div>
  )
}

export { ArticlePage }
