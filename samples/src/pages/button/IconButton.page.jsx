import { Box, IconButton } from "abreactui"
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
  const refButton = useRef(null)

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
          <div className="Example">
            <pre>
              <code>
                {`import { IconButton } from "abreactui"
import { BsBellFill, BsBookmarkFill, BsGrid, BsTrash3 } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <>
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
    </>
  )
}`}
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
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>className</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { IconButton } from "abreactui"
import { BsBellFill } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <>
      <style>{".myButton { border: 1px solid yellowgreen; }"}</style>
      <IconButton className="myButton">
        <BsBellFill />
      </IconButton>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myButton { border: 1px solid yellowgreen; }"}</style>
              <IconButton className="myButton">
                <BsBellFill />
              </IconButton>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>disabled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { IconButton } from "abreactui"
import { BsBellFill, BsBookmarkFill, BsGrid, BsTrash3 } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <>
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
    </>
  )
}`}
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
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>href</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { IconButton } from "abreactui"
import { BsGoogle } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <IconButton href="https://google.com" target="blank">
      <BsGoogle />
    </IconButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <IconButton href="https://google.com" target="blank">
                <BsGoogle />
              </IconButton>
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
                {`import { IconButton } from "abreactui"
import { useRef } from "react"
import { BsBellFill } from "react-icons/bs"

export const IconButtonSample = () => {
  const refButton = useRef(null)

  return (
    <IconButton
      onMouseOut={() => {
        refButton.current.style.color = ""
      }}
      onMouseOver={() => {
        refButton.current.style.color = "yellowgreen"
      }}
      ref={refButton}
    >
      <BsBellFill />
    </IconButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <IconButton
                onMouseOut={() => {
                  refButton.current.style.color = ""
                }}
                onMouseOver={() => {
                  refButton.current.style.color = "yellowgreen"
                }}
                ref={refButton}
              >
                <BsBellFill />
              </IconButton>
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
                {`import { IconButton } from "abreactui"
import { BsBellFill, BsTrash3 } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <>
      <IconButton style={{ color: "yellowgreen" }}>
        <BsBellFill />
      </IconButton>
      <IconButton style={{ color: "red" }}>
        <BsTrash3 />
      </IconButton>
    </>
  )
}`}
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
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>styled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, IconButton } from "abreactui"
import { BsBellFill, BsTrash3 } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <>
      <Box style={{ margin: "1rem" }}>
        styled=&quot;fill&quot; button sample: &nbsp;
        <IconButton styled="fill">
          <BsBellFill />
        </IconButton>
        <IconButton styled="fill">
          <BsTrash3 />
        </IconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        styled=&quot;outline&quot; button sample: &nbsp;
        <IconButton styled="outline">
          <BsBellFill />
        </IconButton>
        <IconButton styled="outline">
          <BsTrash3 />
        </IconButton>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ margin: "1rem" }}>
                styled=&quot;fill&quot; button sample: &nbsp;
                <IconButton styled="fill">
                  <BsBellFill />
                </IconButton>
                <IconButton styled="fill">
                  <BsTrash3 />
                </IconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                styled=&quot;outline&quot; button sample: &nbsp;
                <IconButton styled="outline">
                  <BsBellFill />
                </IconButton>
                <IconButton styled="outline">
                  <BsTrash3 />
                </IconButton>
              </Box>
            </div>
          </div>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, IconButton } from "abreactui"
import { BsBellFill, BsBookmarkFill, BsGrid, BsTrash3 } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <Box style={{ margin: "1rem" }}>
      Basic button and styled=&quot;normal&quot; button sample: &nbsp;
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
    </Box>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ margin: "1rem" }}>
                Basic button and styled=&quot;normal&quot; button sample: &nbsp;
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
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>styled disabled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { IconButton } from "abreactui"
import { BsBellFill, BsTrash3 } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <>
      <IconButton disabled styled="fill">
        <BsBellFill />
      </IconButton>
      <IconButton disabled styled="outline">
        <BsTrash3 />
      </IconButton>
    </>
  )
}`}
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
          </div>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, IconButton } from "abreactui"
import { BsBookmarkFill, BsGrid } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <>
      <Box style={{ margin: "1rem" }}>
        Disabled basic button button sample: &nbsp;
        <IconButton disabled>
          <BsBookmarkFill />
        </IconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        Disabled styled=&quot;normal&quot; button sample: &nbsp;
        <IconButton disabled styled="normal">
          <BsGrid />
        </IconButton>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ margin: "1rem" }}>
                Disabled basic button button sample: &nbsp;
                <IconButton disabled>
                  <BsBookmarkFill />
                </IconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                Disabled styled=&quot;normal&quot; button sample: &nbsp;
                <IconButton disabled styled="normal">
                  <BsGrid />
                </IconButton>
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
                {`import { IconButton } from "abreactui"
import { BsGoogle } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <IconButton href="https://google.com" tag="a" target="blank">
      <BsGoogle />
    </IconButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <IconButton href="https://google.com" tag="a" target="blank">
                <BsGoogle />
              </IconButton>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { IconButtonPage }
