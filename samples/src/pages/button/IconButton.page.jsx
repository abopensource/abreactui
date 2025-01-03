import { Box, IconButton } from "abreactui"
import React from "react"
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
  const refIconButton = React.useRef()
  const [active, setActive] = React.useState(false)

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
      <IconButton debug>
        <BsBellFill />
      </IconButton>
      <IconButton debug>
        <BsBookmarkFill />
      </IconButton>
      <IconButton debug>
        <BsGrid />
      </IconButton>
      <IconButton debug>
        <BsTrash3 />
      </IconButton>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <IconButton debug>
                <BsBellFill />
              </IconButton>
              <IconButton debug>
                <BsBookmarkFill />
              </IconButton>
              <IconButton debug>
                <BsGrid />
              </IconButton>
              <IconButton debug>
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
      <IconButton className="myButton" debug>
        <BsBellFill />
      </IconButton>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myButton { border: 1px solid yellowgreen; }"}</style>
              <IconButton className="myButton" debug>
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
      <IconButton debug disabled>
        <BsBellFill />
      </IconButton>
      <IconButton debug disabled>
        <BsBookmarkFill />
      </IconButton>
      <IconButton debug disabled>
        <BsGrid />
      </IconButton>
      <IconButton debug disabled>
        <BsTrash3 />
      </IconButton>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <IconButton debug disabled>
                <BsBellFill />
              </IconButton>
              <IconButton debug disabled>
                <BsBookmarkFill />
              </IconButton>
              <IconButton debug disabled>
                <BsGrid />
              </IconButton>
              <IconButton debug disabled>
                <BsTrash3 />
              </IconButton>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>disabled styled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, IconButton } from "abreactui"
import { BsBellFill, BsBookmarkFill, BsGrid, BsTrash3 } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <>
      <Box style={{ margin: "1rem" }}>
        Disabled styled=&quot;fill&quot; button sample: &nbsp;
        <IconButton debug disabled styled="fill">
          <BsBellFill />
        </IconButton>
        <IconButton debug disabled styled="fill">
          <BsTrash3 />
        </IconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        Disabled styled=&quot;outline&quot; button sample: &nbsp;
        <IconButton debug disabled styled="outline">
          <BsBellFill />
        </IconButton>
        <IconButton debug disabled styled="outline">
          <BsTrash3 />
        </IconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        Disabled basic button and styled=&quot;normal&quot; button sample: &nbsp;
        <IconButton debug disabled>
          <BsBellFill />
        </IconButton>
        <IconButton debug disabled>
          <BsTrash3 />
        </IconButton>
        <IconButton debug disabled styled="normal">
          <BsBookmarkFill />
        </IconButton>
        <IconButton debug disabled styled="normal">
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
                Disabled styled=&quot;fill&quot; button sample: &nbsp;
                <IconButton debug disabled styled="fill">
                  <BsBellFill />
                </IconButton>
                <IconButton debug disabled styled="fill">
                  <BsTrash3 />
                </IconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                Disabled styled=&quot;outline&quot; button sample: &nbsp;
                <IconButton debug disabled styled="outline">
                  <BsBellFill />
                </IconButton>
                <IconButton debug disabled styled="outline">
                  <BsTrash3 />
                </IconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                Disabled basic button and styled=&quot;normal&quot; button
                sample: &nbsp;
                <IconButton debug disabled>
                  <BsBellFill />
                </IconButton>
                <IconButton debug disabled>
                  <BsTrash3 />
                </IconButton>
                <IconButton debug disabled styled="normal">
                  <BsBookmarkFill />
                </IconButton>
                <IconButton debug disabled styled="normal">
                  <BsGrid />
                </IconButton>
              </Box>
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
    <IconButton debug href="https://google.com" target="blank">
      <BsGoogle />
    </IconButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <IconButton debug href="https://google.com" target="blank">
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
import React from "react"
import { BsTrash3 } from "react-icons/bs"

export const IconButtonSample = () => {
  const refIconButton = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <IconButton
      debug
      onClick={() => {
        const button = refIconButton.current
        button.style.color = !active ? "yellowgreen" : ""
        setActive(!active)
      }}
      ref={refIconButton}
    >
      <BsTrash3 />
    </IconButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <IconButton
                debug
                onClick={() => {
                  const button = refIconButton.current
                  button.style.color = !active ? "yellowgreen" : ""
                  setActive(!active)
                }}
                ref={refIconButton}
              >
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
import { BsBellFill, BsBookmarkFill, BsGrid, BsTrash3 } from "react-icons/bs"

export const IconButtonSample = () => {
  return (
    <>
      <Box style={{ margin: "1rem" }}>
        Button styled=&quot;fill&quot; sample: &nbsp;
        <IconButton styled="fill">
          <BsBellFill />
        </IconButton>
        <IconButton styled="fill">
          <BsTrash3 />
        </IconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        Button styled=&quot;outline&quot; sample: &nbsp;
        <IconButton styled="outline">
          <BsBellFill />
        </IconButton>
        <IconButton styled="outline">
          <BsTrash3 />
        </IconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        Button basic button and styled=&quot;normal&quot; sample: &nbsp;
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
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ margin: "1rem" }}>
                Button styled=&quot;fill&quot; sample: &nbsp;
                <IconButton debug styled="fill">
                  <BsBellFill />
                </IconButton>
                <IconButton debug styled="fill">
                  <BsTrash3 />
                </IconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                Button styled=&quot;outline&quot; sample: &nbsp;
                <IconButton debug styled="outline">
                  <BsBellFill />
                </IconButton>
                <IconButton debug styled="outline">
                  <BsTrash3 />
                </IconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                Button basic button and styled=&quot;normal&quot; sample: &nbsp;
                <IconButton debug>
                  <BsBellFill />
                </IconButton>
                <IconButton debug>
                  <BsTrash3 />
                </IconButton>
                <IconButton debug styled="normal">
                  <BsBookmarkFill />
                </IconButton>
                <IconButton debug styled="normal">
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
    <IconButton debug tag="a">
      <BsGoogle />
    </IconButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <IconButton debug tag="a">
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
