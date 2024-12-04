import { Box, MButton } from "abreactui"
import React from "react"
import { BsSave, BsSaveFill } from "react-icons/bs"

import "../styles"

/**
 * `MButton` component sample page.
 *
 * @module pages/buttons/MButtonPage
 * @type {import("react").ReactElement}
 */
const MButtonPage = () => {
  const refMButton = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage MButtonPage">
      <section className="Title">
        <h1>
          <code>MButton</code>(Memoized Button) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MButton } from "abreactui"

export const MButtonSample = () => {
  return <MButton debug>MButton basic sample</MButton>]
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton debug>MButton basic sample</MButton>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>children</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, MButton } from "abreactui"

export const MButtonSample = () => {
  return (
    <MButton debug>
      <Box>MButton children props sample: </Box>
      <Box style={{ marginLeft: "1rem" }}>children</Box>
    </MButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton debug>
                <Box>MButton children props sample: </Box>
                <Box style={{ marginLeft: "1rem" }}>children</Box>
              </MButton>
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
                {`import { MButton } from "abreactui"

export const MButtonSample = () => {
  return (
    <>
      <style>{".myButton { padding: 1rem 3rem; }"}</style>
      <MButton className="myButton">MButton className props sample</MButton>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myButton { padding: 1rem 3rem; }"}</style>
              <MButton className="myButton" debug>
                MButton className props sample
              </MButton>
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
                {`import { MButton } from "abreactui"

export const MButtonSample = () => {
  return (
    <MButton debug disabled>
      MButton disabled props sample
    </MButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton debug disabled>
                MButton disabled props sample
              </MButton>
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
                {`import { Box, MButton } from "abreactui"

export const MButtonSample = () => {
  return (
    <>
      <MButton disabled>Disabled Basic</MButton>
      <MButton debug disabled styled="fill">
        Disabled Fill
      </MButton>
      <MButton disabled debug styled="outline">
        Disabled Outline
      </MButton>
      <Box style={{ margin: "1rem" }}>
        <MButton debug disabled styled="underline">
          Disabled Underline
        </MButton>
      </Box>
      <Box style={{ margin: "1rem" }}>
        <MButton debug disabled styled="text">
          Disabled Text
        </MButton>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton debug disabled>
                Disabled Basic
              </MButton>
              <MButton debug disabled styled="fill">
                Disabled Fill
              </MButton>
              <MButton debug disabled styled="outline">
                Disabled Outline
              </MButton>
              <Box style={{ margin: "1rem" }}>
                <MButton debug disabled styled="underline">
                  Disabled Underline
                </MButton>
              </Box>
              <Box style={{ margin: "1rem" }}>
                <MButton debug disabled styled="text">
                  Disabled Text
                </MButton>
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
                {`import { MButton } from "abreactui"

export const MButtonSample = () => {
  return (
    <MButton debug href="https://google.com" target="blank">
      MButton href props sample
    </MButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton debug href="https://google.com" target="blank">
                MButton href props sample
              </MButton>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>iconEnd</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MButton } from "abreactui"
import { BsSave } from "react-icons/bs"

export const MButtonSample = () => {
  return (
    <MButton debug iconEnd={<BsSave />}>
      MButton iconEnd props sample
    </MButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton debug iconEnd={<BsSave />}>
                MButton iconEnd props sample
              </MButton>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>iconStart</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MButton } from "abreactui"
import { BsSaveFill } from "react-icons/bs"

export const MButtonSample = () => {
  return (
    <MButton debug iconStart={<BsSaveFill />}>
      MButton iconStart props sample
    </MButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton debug iconStart={<BsSaveFill />}>
                MButton iconStart props sample
              </MButton>
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
                {`import { MButton } from "abreactui"
import React from "react"

export const MButtonSample = () => {
  const refMButton = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <MButton
      debug
      onClick={() => {
        const button = refMButton.current
        button.style.backgroundColor = !active ? "yellowgreen" : ""
        setActive(!active)
      }}
      ref={refMButton}
    >
      {active ? "Inactive" : "Active"} button
    </MButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton
                debug
                onClick={() => {
                  const button = refMButton.current
                  button.style.backgroundColor = !active ? "yellowgreen" : ""
                  setActive(!active)
                }}
                ref={refMButton}
              >
                {active ? "Inactive" : "Active"} button
              </MButton>
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
                {`import { Box, MButton } from "abreactui"

export const MButtonSample = () => {
  return (
    <>
      <MButton debug>Basic</MButton>
      <MButton debug styled="fill">
        Fill
      </MButton>
      <MButton debug styled="outline">
        Outline
      </MButton>
      <Box debug style={{ margin: "1rem" }}>
        <MButton debug styled="underline">
          Underline
        </MButton>
        &nbsp;
        <MButton debug styled="text">
          Text
        </MButton>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton debug>Basic</MButton>
              <MButton debug styled="fill">
                Fill
              </MButton>
              <MButton debug styled="outline">
                Outline
              </MButton>
              <Box debug style={{ margin: "1rem" }}>
                <MButton debug styled="underline">
                  Underline
                </MButton>
                &nbsp;
                <MButton debug styled="text">
                  Text
                </MButton>
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
                {`import { MButton } from "abreactui"

export const MButtonSample = () => {
  return (
    <MButton debug tag="a">
      MButton tag props sample
    </MButton>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MButton debug tag="a">
                MButton tag props sample
              </MButton>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MButtonPage }
