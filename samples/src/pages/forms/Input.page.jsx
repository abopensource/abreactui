import { Box, Input } from "abreactui"

import "../styles"

/**
 * `Input` component sample page.
 *
 * @module pages/forms/InputPage
 * @type {import("react").ReactElement}
 */
const InputPage = () => {
  return (
    <div className="Pages SamplePage InputPage">
      <section className="Title">
        <h1>
          <code>Input</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Input } from "abreactui"

export const InputSample = () => {
  return <Input />
}`}
              </code>
            </pre>
            <div className="Result">
              <Input />
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
                {`import { Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <style>{".myField { background-color: rgba(0, 255, 255, 0.25); }"}</style>
      <Input className="myField" />
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>
                {".myField { background-color: rgba(0, 255, 255, 0.25); }"}
              </style>
              <Input className="myField" />
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>defaultValue</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Input } from "abreactui"

export const InputSample = () => {
  return <Input defaultValue="DefaultValue" />
}`}
              </code>
            </pre>
            <div className="Result">
              <Input defaultValue="DefaultValue" />
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>defaultValue label</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Input } from "abreactui"

export const InputSample = () => {
  return <Input label="Outline" defaultValue="DefaultValue" />
}`}</code>
            </pre>
            <div className="Result">
              <Input label="Label" defaultValue="DefaultValue" />
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>label</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Input } from "abreactui"

export const InputSample = () => {
  return <Input label="Label" />
}`}</code>
            </pre>
            <div className="Result">
              <Input label="Label" />
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>label styled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Box, Input } from "abreactui"
import { values } from '../../../node_modules/typescript/lib/tsserver';

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Basic" />
        <Input styled="fill" label="Fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="outline" label="Outline" />
        <Input styled="underline" label="Underline" />
      </Box>
    </>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Basic" />
                <Input styled="fill" label="Fill" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="outline" label="Outline" />
                <Input styled="underline" label="Underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>styled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input />
        <Input styled="fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="outline" />
        <Input styled="underline" />
      </Box>
    </>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input />
                <Input styled="fill" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="outline" />
                <Input styled="underline" />
              </Box>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { InputPage }
