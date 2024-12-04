import { Box, MIconButton } from "abreactui"
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
 * `MIconButton` component sample page.
 *
 * @module pages/buttons/MIconButtonPage
 * @type {import("react").ReactElement}
 */
const MIconButtonPage = () => {
  const refMIconButton = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage MIconButtonPage">
      <section className="Title">
        <h1>
          <code>MIconButton</code>(Memoized IconButton) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MIconButton } from "abreactui"
import { BsBellFill, BsBookmarkFill, BsGrid, BsTrash3 } from "react-icons/bs"

export const MIconButtonSample = () => {
  return (
    <>
      <MIconButton debug>
        <BsBellFill />
      </MIconButton>
      <MIconButton debug>
        <BsBookmarkFill />
      </MIconButton>
      <MIconButton debug>
        <BsGrid />
      </MIconButton>
      <MIconButton debug>
        <BsTrash3 />
      </MIconButton>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MIconButton debug>
                <BsBellFill />
              </MIconButton>
              <MIconButton debug>
                <BsBookmarkFill />
              </MIconButton>
              <MIconButton debug>
                <BsGrid />
              </MIconButton>
              <MIconButton debug>
                <BsTrash3 />
              </MIconButton>
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
                {`import { MIconButton } from "abreactui"
import { BsBellFill } from "react-icons/bs"

export const MIconButtonSample = () => {
  return (
    <>
      <style>{".myButton { border: 1px solid yellowgreen; }"}</style>
      <MIconButton className="myButton" debug>
        <BsBellFill />
      </MIconButton>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myButton { border: 1px solid yellowgreen; }"}</style>
              <MIconButton className="myButton" debug>
                <BsBellFill />
              </MIconButton>
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
                {`import { MIconButton } from "abreactui"
import { BsBellFill, BsBookmarkFill, BsGrid, BsTrash3 } from "react-icons/bs"

export const MIconButtonSample = () => {
  return (
    <>
      <MIconButton debug disabled>
        <BsBellFill />
      </MIconButton>
      <MIconButton debug disabled>
        <BsBookmarkFill />
      </MIconButton>
      <MIconButton debug disabled>
        <BsGrid />
      </MIconButton>
      <MIconButton debug disabled>
        <BsTrash3 />
      </MIconButton>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MIconButton debug disabled>
                <BsBellFill />
              </MIconButton>
              <MIconButton debug disabled>
                <BsBookmarkFill />
              </MIconButton>
              <MIconButton debug disabled>
                <BsGrid />
              </MIconButton>
              <MIconButton debug disabled>
                <BsTrash3 />
              </MIconButton>
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
                {`import { Box, MIconButton } from "abreactui"
import { BsBellFill, BsBookmarkFill, BsGrid, BsTrash3 } from "react-icons/bs"

export const MIconButtonSample = () => {
  return (
    <>
      <Box style={{ margin: "1rem" }}>
        Disabled styled=&quot;fill&quot; button sample: &nbsp;
        <MIconButton debug disabled styled="fill">
          <BsBellFill />
        </MIconButton>
        <MIconButton debug disabled styled="fill">
          <BsTrash3 />
        </MIconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        Disabled styled=&quot;outline&quot; button sample: &nbsp;
        <MIconButton debug disabled styled="outline">
          <BsBellFill />
        </MIconButton>
        <MIconButton debug disabled styled="outline">
          <BsTrash3 />
        </MIconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        Disabled basic button and styled=&quot;normal&quot; button sample: &nbsp;
        <MIconButton debug disabled>
          <BsBellFill />
        </MIconButton>
        <MIconButton debug disabled>
          <BsTrash3 />
        </MIconButton>
        <MIconButton debug disabled styled="normal">
          <BsBookmarkFill />
        </MIconButton>
        <MIconButton debug disabled styled="normal">
          <BsGrid />
        </MIconButton>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ margin: "1rem" }}>
                Disabled styled=&quot;fill&quot; button sample: &nbsp;
                <MIconButton debug disabled styled="fill">
                  <BsBellFill />
                </MIconButton>
                <MIconButton debug disabled styled="fill">
                  <BsTrash3 />
                </MIconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                Disabled styled=&quot;outline&quot; button sample: &nbsp;
                <MIconButton debug disabled styled="outline">
                  <BsBellFill />
                </MIconButton>
                <MIconButton debug disabled styled="outline">
                  <BsTrash3 />
                </MIconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                Disabled basic button and styled=&quot;normal&quot; button
                sample: &nbsp;
                <MIconButton debug disabled>
                  <BsBellFill />
                </MIconButton>
                <MIconButton debug disabled>
                  <BsTrash3 />
                </MIconButton>
                <MIconButton debug disabled styled="normal">
                  <BsBookmarkFill />
                </MIconButton>
                <MIconButton debug disabled styled="normal">
                  <BsGrid />
                </MIconButton>
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
                {`import { MIconButton } from "abreactui"
import { BsGoogle } from "react-icons/bs"

export const MIconButtonSample = () => {
  return (
    <MIconButton debug href="https://google.com" target="blank">
      <BsGoogle />
    </MIconButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MIconButton debug href="https://google.com" target="blank">
                <BsGoogle />
              </MIconButton>
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
                {`import { MIconButton } from "abreactui"
import React from "react"
import { BsTrash3 } from "react-icons/bs"

export const MIconButtonSample = () => {
  const refMIconButton = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <MIconButton
      debug
      onClick={() => {
        const button = refMIconButton.current
        button.style.color = !active ? "yellowgreen" : ""
        setActive(!active)
      }}
      ref={refMIconButton}
    >
      <BsTrash3 />
    </MIconButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MIconButton
                debug
                onClick={() => {
                  const button = refMIconButton.current
                  button.style.color = !active ? "yellowgreen" : ""
                  setActive(!active)
                }}
                ref={refMIconButton}
              >
                <BsTrash3 />
              </MIconButton>
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
                {`import { Box, MIconButton } from "abreactui"
import { BsBellFill, BsBookmarkFill, BsGrid, BsTrash3 } from "react-icons/bs"

export const MIconButtonSample = () => {
  return (
    <>
      <Box style={{ margin: "1rem" }}>
        Button styled=&quot;fill&quot; sample: &nbsp;
        <MIconButton styled="fill">
          <BsBellFill />
        </MIconButton>
        <MIconButton styled="fill">
          <BsTrash3 />
        </MIconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        Button styled=&quot;outline&quot; sample: &nbsp;
        <MIconButton styled="outline">
          <BsBellFill />
        </MIconButton>
        <MIconButton styled="outline">
          <BsTrash3 />
        </MIconButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        Button basic button and styled=&quot;normal&quot; sample: &nbsp;
        <MIconButton>
          <BsBellFill />
        </MIconButton>
        <MIconButton>
          <BsTrash3 />
        </MIconButton>
        <MIconButton styled="normal">
          <BsBookmarkFill />
        </MIconButton>
        <MIconButton styled="normal">
          <BsGrid />
        </MIconButton>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ margin: "1rem" }}>
                Button styled=&quot;fill&quot; sample: &nbsp;
                <MIconButton debug styled="fill">
                  <BsBellFill />
                </MIconButton>
                <MIconButton debug styled="fill">
                  <BsTrash3 />
                </MIconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                Button styled=&quot;outline&quot; sample: &nbsp;
                <MIconButton debug styled="outline">
                  <BsBellFill />
                </MIconButton>
                <MIconButton debug styled="outline">
                  <BsTrash3 />
                </MIconButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                Button basic button and styled=&quot;normal&quot; sample: &nbsp;
                <MIconButton debug>
                  <BsBellFill />
                </MIconButton>
                <MIconButton debug>
                  <BsTrash3 />
                </MIconButton>
                <MIconButton debug styled="normal">
                  <BsBookmarkFill />
                </MIconButton>
                <MIconButton debug styled="normal">
                  <BsGrid />
                </MIconButton>
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
                {`import { MIconButton } from "abreactui"
import { BsGoogle } from "react-icons/bs"

export const MIconButtonSample = () => {
  return (
    <MIconButton debug tag="a">
      <BsGoogle />
    </MIconButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MIconButton debug tag="a">
                <BsGoogle />
              </MIconButton>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MIconButtonPage }
