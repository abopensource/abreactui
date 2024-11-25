import { Box, Button } from "abreactui"
import { useRef } from "react"
import { BsSave, BsSaveFill } from "react-icons/bs"

import "../styles"

/**
 * `Button` component sample page.
 *
 * @module pages/buttons/ButtonPage
 * @type {import("react").ReactElement}
 */
const ButtonPage = () => {
  const refButton = useRef(null)

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
  return <Button>Button basic sample</Button>
}`}
              </code>
            </pre>
            <div className="Result">
              <Button>Button basic sample</Button>
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
    <Button>
      <Box>Button children props sample</Box>
      <Box style={{ marginLeft: "1rem" }}>Children</Box>
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button>
                <Box>Button children props sample</Box>
                <Box style={{ marginLeft: "1rem" }}>Children</Box>
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
      <style>{".myButton { padding: 1rem 2rem; }"}</style>
      <Button className="myButton">Button className props sample</Button>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>{".myButton { padding: 1rem 2rem; }"}</style>
              <Button className="myButton">
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
  return <Button disabled>Button disabled props sample</Button>
}`}
              </code>
            </pre>
            <div className="Result">
              <Button disabled>Button disabled props sample</Button>
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
    <Button href="https://google.com" target="blank">
      Button href props sample
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button href="https://google.com" target="blank">
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
  return <Button iconEnd={<BsSave />}>Button iconEnd props sample</Button>
}`}
              </code>
            </pre>
            <div className="Result">
              <Button iconEnd={<BsSave />}>Button iconEnd props sample</Button>
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
    <Button iconStart={<BsSaveFill />}>Button iconStart props sample</Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button iconStart={<BsSaveFill />}>
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
import { useRef } from "react"

export const ButtonSample = () => {
  const refButton = useRef(null)

  return (
    <Button
      onMouseOut={() => {
        refButton.current.style.backgroundColor = ""
      }}
      onMouseOver={() => {
        refButton.current.style.backgroundColor = "yellowgreen"
      }}
      ref={refButton}
    >
      Button ref props sample
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button
                onMouseOut={() => {
                  refButton.current.style.backgroundColor = ""
                }}
                onMouseOver={() => {
                  refButton.current.style.backgroundColor = "yellowgreen"
                }}
                ref={refButton}
              >
                Button ref props sample
              </Button>
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
                {`import { Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <Button style={{ backgroundColor: "yellowgreen" }}>
      Button style props sample
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button style={{ backgroundColor: "yellowgreen" }}>
                Button style props sample
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
                {`import { Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <>
      <Button>Basic</Button>
      <Button styled="fill">fill</Button>
      <Button styled="outline">outline</Button>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button>basic</Button>
              <Button styled="fill">fill</Button>
              <Button styled="outline">outline</Button>
            </div>
          </div>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <>
      <Box style={{ margin: "1rem" }}>
        styled=&quot;underline&quot; button sample: &nbsp;
        <Button styled="underline">Underline</Button>
      </Box>
      <Box style={{ margin: "1rem" }}>
        styled=&quot;text&quot; button sample: &nbsp;
        <Button styled="text">Text</Button>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ margin: "1rem" }}>
                styled=&quot;underline&quot; button sample: &nbsp;
                <Button styled="underline">Underline</Button>
              </Box>
              <Box style={{ margin: "1rem" }}>
                styled=&quot;text&quot; button sample: &nbsp;
                <Button styled="text">Text</Button>
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
                {`import { Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <>
      <Button disabled>disabled basic</Button>
      <Button disabled styled="fill">
        disabled fill
      </Button>
      <Button disabled styled="outline">
        disabled outline
      </Button>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button disabled>disabled basic</Button>
              <Button disabled styled="fill">
                disabled fill
              </Button>
              <Button disabled styled="outline">
                disabled outline
              </Button>
            </div>
          </div>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Button } from "abreactui"

export const ButtonSample = () => {
  return (
    <>
      <Box style={{ margin: "1rem" }}>
        disabled styled=&quot;underlint&quot; button sample: &nbsp;
        <Button disabled styled="underline">
          disabled underline
        </Button>
      </Box>
      <Box style={{ margin: "1rem" }}>
        disabled styled=&quot;text&quot; button sample: &nbsp;
        <Button disabled styled="text">
          disabled text
        </Button>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ margin: "1rem" }}>
                disabled styled=&quot;underlint&quot; button sample: &nbsp;
                <Button disabled styled="underline">
                  disabled underline
                </Button>
              </Box>
              <Box style={{ margin: "1rem" }}>
                disabled styled=&quot;text&quot; button sample: &nbsp;
                <Button disabled styled="text">
                  disabled text
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
    <Button href="https://google.com" tag="a" target="blank">
      Button tag props sample
    </Button>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Button href="https://google.com" tag="a" target="blank">
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
