import { IconButton } from "abreactui"
import { useRef } from "react"
import {
  BsBellFill,
  BsBookmarkFill,
  BsGoogle,
  BsGrid,
  BsTrash3,
} from "react-icons/bs"

import "../styles"

/**
 * `IconButton` component sample page.
 *
 * @module pages/buttons/IconButtonPage
 * @type {import("react").ReactElement}
 */
const IconButtonPage = () => {
  const myButton = useRef(null)

  return (
    <div className="Pages SamplePage IconButtonPage">
      <section className="Title">
        <h1>
          <code>IconButton</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          {/* prettier-ignore */}
          <pre>
            <code>
                {
`<IconButton>
  <BsBellFill />
</IconButton>
<IconButton>
  <BsBookmarkFill />
</IconButton>
<IconButton>
  <BsGrid />
</IconButton>
<IconButton>
  <BsTrash3 />
</IconButton>`
                }
              </code>
          </pre>
          <div className="Result">
            <IconButton>
              <BsBellFill />
            </IconButton>
            <IconButton>
              <BsBookmarkFill />
            </IconButton>
            <IconButton>
              <BsGrid />
            </IconButton>
            <IconButton>
              <BsTrash3 />
            </IconButton>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>className</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<IconButton className="myButton">
  <BsBellFill />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            <IconButton className="myButton">
              <BsBellFill />
            </IconButton>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>disabled</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<IconButton disabled>
  <BsBellFill />
</IconButton>
<IconButton disabled>
  <BsBookmarkFill />
</IconButton>
<IconButton disabled>
  <BsGrid />
</IconButton>
<IconButton disabled>
  <BsTrash3 />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            <IconButton disabled>
              <BsBellFill />
            </IconButton>
            <IconButton disabled>
              <BsBookmarkFill />
            </IconButton>
            <IconButton disabled>
              <BsGrid />
            </IconButton>
            <IconButton disabled>
              <BsTrash3 />
            </IconButton>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>style</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<IconButton style={{ color: "yellowgreen" }}>
  <BsBellFill />
</IconButton>
<IconButton style={{ color: "red" }}>
  <BsTrash3 />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            <IconButton style={{ color: "yellowgreen" }}>
              <BsBellFill />
            </IconButton>
            <IconButton style={{ color: "red" }}>
              <BsTrash3 />
            </IconButton>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>styled</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<IconButton styled="fill">
  <BsBellFill />
</IconButton>
<IconButton styled="fill">
  <BsTrash3 />
</IconButton>
<IconButton styled="outline">
  <BsBellFill />
</IconButton>
<IconButton styled="outline">
  <BsTrash3 />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            <IconButton styled="fill">
              <BsBellFill />
            </IconButton>
            <IconButton styled="fill">
              <BsTrash3 />
            </IconButton>
            <IconButton styled="outline">
              <BsBellFill />
            </IconButton>
            <IconButton styled="outline">
              <BsTrash3 />
            </IconButton>
          </div>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`Underline button component sample: &nbsp;
<IconButton>
  <BsBellFill />
</IconButton>
<IconButton>
  <BsTrash3 />
</IconButton>
<IconButton styled="normal">
  <BsBookmarkFill />
</IconButton>
<IconButton styled="normal">
  <BsGrid />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            Normal button component sample: &nbsp;
            <IconButton>
              <BsBellFill />
            </IconButton>
            <IconButton>
              <BsTrash3 />
            </IconButton>
            <IconButton styled="normal">
              <BsBookmarkFill />
            </IconButton>
            <IconButton styled="normal">
              <BsGrid />
            </IconButton>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>styled disabled</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<IconButton disabled styled="fill">
  <BsBellFill />
</IconButton>
<IconButton disabled styled="outline">
  <BsTrash3 />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            <IconButton disabled styled="fill">
              <BsBellFill />
            </IconButton>
            <IconButton disabled styled="outline">
              <BsTrash3 />
            </IconButton>
          </div>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`Underline button component sample: &nbsp;
<IconButton disabled>
  <BsBookmarkFill />
</IconButton>
<IconButton disabled styled="normal">
  <BsGrid />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            Underline button component sample: &nbsp;
            <IconButton disabled>
              <BsBookmarkFill />
            </IconButton>
            <IconButton disabled styled="normal">
              <BsGrid />
            </IconButton>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>tag</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<IconButton tag="a" href="https://google.com" target="blank">
  <BsGoogle />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            <IconButton tag="a" href="https://google.com" target="blank">
              <BsGoogle />
            </IconButton>
          </div>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<IconButton
  href="https://google.com"
  styled="outline"
  target="blank"
>
  <BsGoogle />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            <IconButton
              href="https://google.com"
              styled="outline"
              target="blank"
            >
              <BsGoogle />
            </IconButton>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>ref</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<IconButton ref={myButton}>
  <BsBellFill />
</IconButton>`
              }
            </code>
          </pre>
          <div className="Result">
            <IconButton ref={myButton}>
              <BsBellFill />
            </IconButton>
          </div>
        </article>
      </section>
    </div>
  )
}

export { IconButtonPage }
