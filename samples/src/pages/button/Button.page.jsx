import { Box, Button } from "abreactui"
import React from "react"
import { BsSave, BsSaveFill } from "react-icons/bs"

import "../styles"

/**
 * `Button` component sample page.
 *
 * @module pages/buttons/ButtonPage
 * @type {import("react").ReactElement}
 */
const ButtonPage = () => {
  const refButton = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage ButtonPage">
      <section className="Title">
        <h1>
          <code>Button</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Button } from "abreactui"

export const ButtonSample = () => {
  return <Button debug>Button basic sample</Button>]
}`}
              </code>
            </pre>
            <div className="Result">
              <Button debug>Button basic sample</Button>
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
                {`import { Box, Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <Button debug>
      <Box>Button children props sample: </Box>
      <Box style={{ marginLeft: "1rem" }}>children</Box>
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button debug>
                <Box>Button children props sample: </Box>
                <Box style={{ marginLeft: "1rem" }}>children</Box>
              </Button>
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
                {`import { Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <>
      <style>{".myButton { padding: 1rem 3rem; }"}</style>
      <Button className="myButton">Button className props sample</Button>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myButton { padding: 1rem 3rem; }"}</style>
              <Button className="myButton" debug>
                Button className props sample
              </Button>
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
                {`import { Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <Button debug disabled>
      Button disabled props sample
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button debug disabled>
                Button disabled props sample
              </Button>
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
                {`import { Box, Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <>
      <Button disabled>Disabled Basic</Button>
      <Button debug disabled styled="fill">
        Disabled Fill
      </Button>
      <Button disabled debug styled="outline">
        Disabled Outline
      </Button>
      <Box style={{ margin: "1rem" }}>
        <Button debug disabled styled="underline">
          Disabled Underline
        </Button>
      </Box>
      <Box style={{ margin: "1rem" }}>
        <Button debug disabled styled="text">
          Disabled Text
        </Button>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button debug disabled>
                Disabled Basic
              </Button>
              <Button debug disabled styled="fill">
                Disabled Fill
              </Button>
              <Button debug disabled styled="outline">
                Disabled Outline
              </Button>
              <Box style={{ margin: "1rem" }}>
                <Button debug disabled styled="underline">
                  Disabled Underline
                </Button>
              </Box>
              <Box style={{ margin: "1rem" }}>
                <Button debug disabled styled="text">
                  Disabled Text
                </Button>
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
                {`import { Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <Button debug href="https://google.com" target="blank">
      Button href props sample
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button debug href="https://google.com" target="blank">
                Button href props sample
              </Button>
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
                {`import { Button } from "abreactui"
import { BsSave } from "react-icons/bs"

export const ButtonSample = () => {
  return (
    <Button debug iconEnd={<BsSave />}>
      Button iconEnd props sample
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button debug iconEnd={<BsSave />}>
                Button iconEnd props sample
              </Button>
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
                {`import { Button } from "abreactui"
import { BsSaveFill } from "react-icons/bs"

export const ButtonSample = () => {
  return (
    <Button debug iconStart={<BsSaveFill />}>
      Button iconStart props sample
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button debug iconStart={<BsSaveFill />}>
                Button iconStart props sample
              </Button>
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
                {`import { Button } from "abreactui"
import React from "react"

export const ButtonSample = () => {
  const refButton = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Button
      debug
      onClick={() => {
        const button = refButton.current
        button.style.backgroundColor = !active ? "yellowgreen" : ""
        setActive(!active)
      }}
      ref={refButton}
    >
      {active ? "Inactive" : "Active"} button
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button
                debug
                onClick={() => {
                  const button = refButton.current
                  button.style.backgroundColor = !active ? "yellowgreen" : ""
                  setActive(!active)
                }}
                ref={refButton}
              >
                {active ? "Inactive" : "Active"} button
              </Button>
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
                {`import { Box, Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <>
      <Button debug>Basic</Button>
      <Button debug styled="fill">
        Fill
      </Button>
      <Button debug styled="outline">
        Outline
      </Button>
      <Box debug style={{ margin: "1rem" }}>
        <Button debug styled="underline">
          Underline
        </Button>
        &nbsp;
        <Button debug styled="text">
          Text
        </Button>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button debug>Basic</Button>
              <Button debug styled="fill">
                Fill
              </Button>
              <Button debug styled="outline">
                Outline
              </Button>
              <Box debug style={{ margin: "1rem" }}>
                <Button debug styled="underline">
                  Underline
                </Button>
                &nbsp;
                <Button debug styled="text">
                  Text
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
                {`import { Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <Button debug tag="a">
      Button tag props sample
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button debug tag="a">
                Button tag props sample
              </Button>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { ButtonPage }
