import { Box, Button, Input } from "abreactui"
import React from "react"

import "../styles"

/**
 * `Input` component sample page.
 *
 * @module pages/forms/InputPage
 * @type {import("react").ReactElement}
 */
const InputPage = () => {
  const refInput = React.useRef()
  const refInputs = React.useRef([])
  const [active, setActive] = React.useState(false)

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
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ padding: "1rem", textAlign: "center" }}>
        <Input />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="fill" />
        <Input styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="standard" />
        <Input styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ padding: "1rem", textAlign: "center" }}>
                <Input />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="fill" />
                <Input styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="standard" />
                <Input styled="underline" />
              </Box>
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
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <style>{".myField { background-color: rgba(0, 255, 255, 0.125); }"}</style>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input className="myField" styled="fill" />
        <Input className="myField" styled="outline" />
      </Box>
      <Box style={{ padding: "1rem" }}>
        <Input className="myField" styled="standard" />
      </Box>
      <Box style={{ padding: "1rem" }}>
        <Input className="myField" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>
                {".myField { background-color: rgba(0, 255, 255, 0.125); }"}
              </style>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input className="myField" styled="fill" />
                <Input className="myField" styled="outline" />
              </Box>
              <Box style={{ padding: "1rem" }}>
                <Input className="myField" styled="standard" />
              </Box>
              <Box style={{ padding: "1rem" }}>
                <Input className="myField" styled="underline" />
              </Box>
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
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input defaultValue="Fill" styled="fill" />
        <Input defaultValue="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input defaultValue="Standard" styled="standard" />
        <Input defaultValue="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input defaultValue="Fill" styled="fill" />
                <Input defaultValue="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input defaultValue="Standard" styled="standard" />
                <Input defaultValue="Underline" styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>defaultValue label</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input defaultValue="Fill" label="Fill" styled="fill" />
        <Input defaultValue="Outline" label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input defaultValue="Standard" label="Standard" styled="standard" />
        <Input defaultValue="Underline" label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input defaultValue="Fill" label="Fill" styled="fill" />
                <Input
                  defaultValue="Outline"
                  label="Outline"
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  defaultValue="Standard"
                  label="Standard"
                  styled="standard"
                />
                <Input
                  defaultValue="Underline"
                  label="Underline"
                  styled="underline"
                />
              </Box>
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
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled styled="fill" />
        <Input disabled styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled styled="standard" />
        <Input disabled styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input disabled styled="fill" />
                <Input disabled styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input disabled styled="standard" />
                <Input disabled styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>disabled label</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled label="Fill" styled="fill" />
        <Input disabled label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled label="Standard" styled="standard" />
        <Input disabled label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input disabled label="Fill" styled="fill" />
                <Input disabled label="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input disabled label="Standard" styled="standard" />
                <Input disabled label="Underline" styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>disabled label value</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled label="Fill" styled="fill" value="Fill" />
        <Input disabled label="Outline" styled="outline" value="Outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled label="Standard" styled="standard" value="Standard" />
        <Input disabled label="Underline" styled="underline" value="Underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input disabled label="Fill" styled="fill" value="Fill" />
                <Input
                  disabled
                  label="Outline"
                  styled="outline"
                  value="Outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  disabled
                  label="Standard"
                  styled="standard"
                  value="Standard"
                />
                <Input
                  disabled
                  label="Underline"
                  styled="underline"
                  value="Underline"
                />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>error</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error styled="fill" />
        <Input error styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error styled="standard" />
        <Input error styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input error styled="fill" />
                <Input error styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input error styled="standard" />
                <Input error styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>error label</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error label="Fill" styled="fill" />
        <Input error label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error label="Standard" styled="standard" />
        <Input error label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input error label="Fill" styled="fill" />
                <Input error label="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input error label="Standard" styled="standard" />
                <Input error label="Underline" styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>error helper label</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error helper="Helper Message" label="Fill" styled="fill" />
        <Input error helper="Helper Message" label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error helper="Helper Message" label="Standard" styled="standard" />
        <Input error helper="Helper Message" label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  error
                  helper="Helper Message"
                  label="Fill"
                  styled="fill"
                />
                <Input
                  error
                  helper="Helper Message"
                  label="Outline"
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  error
                  helper="Helper Message"
                  label="Standard"
                  styled="standard"
                />
                <Input
                  error
                  helper="Helper Message"
                  label="Underline"
                  styled="underline"
                />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>helper</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input helper="Fill" styled="fill" />
        <Input helper="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input helper="Standard" styled="standard" />
        <Input helper="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input helper="Fill" styled="fill" />
                <Input helper="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input helper="Standard" styled="standard" />
                <Input helper="Underline" styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>label</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Fill" styled="fill" />
        <Input label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Standard" styled="standard" />
        <Input label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Fill" styled="fill" />
                <Input label="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Standard" styled="standard" />
                <Input label="Underline" styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>label placeholder</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Fill" placeholder="Fill" styled="fill" />
        <Input label="Outline" placeholder="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Standard" placeholder="Standard" styled="standard" />
        <Input label="Underline" placeholder="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Fill" placeholder="Fill" styled="fill" />
                <Input label="Outline" placeholder="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  label="Standard"
                  placeholder="Standard"
                  styled="standard"
                />
                <Input
                  label="Underline"
                  placeholder="Underline"
                  styled="underline"
                />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>label type</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Password" styled="fill" type="password" />
        <Input label="Password" styled="outline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Password" styled="standard" type="password" />
        <Input label="Password" styled="underline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Search" styled="fill" type="search" />
        <Input label="Search" styled="outline" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Search" styled="standard" type="search" />
        <Input label="Search" styled="underline" type="search" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Password" styled="fill" type="password" />
                <Input label="Password" styled="outline" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Password" styled="standard" type="password" />
                <Input label="Password" styled="underline" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Search" styled="fill" type="search" />
                <Input label="Search" styled="outline" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Search" styled="standard" type="search" />
                <Input label="Search" styled="underline" type="search" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>multiline</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input multiline styled="fill" />
        <Input multiline styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input multiline styled="standard" />
        <Input multiline styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input multiline styled="fill" />
                <Input multiline styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input multiline styled="standard" />
                <Input multiline styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>multiline label rows</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Fill" multiline rows={5} styled="fill" />
        <Input label="Outline" multiline rows={5} styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Standard" multiline rows={5} styled="standard" />
        <Input label="Underline" multiline rows={5} styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Fill" multiline rows={5} styled="fill" />
                <Input label="Outline" multiline rows={5} styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Standard" multiline rows={5} styled="standard" />
                <Input
                  label="Underline"
                  multiline
                  rows={5}
                  styled="underline"
                />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>multiline rows</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input multiline rows={1} styled="fill" />
        <Input multiline rows={1} styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input multiline rows={1} styled="standard" />
        <Input multiline rows={1} styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input multiline rows={1} styled="fill" />
                <Input multiline rows={1} styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input multiline rows={1} styled="standard" />
                <Input multiline rows={1} styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>placeholder</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input placeholder="Fill" styled="fill" />
        <Input placeholder="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input placeholder="Standard" styled="standard" />
        <Input placeholder="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input placeholder="Fill" styled="fill" />
                <Input placeholder="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input placeholder="Standard" styled="standard" />
                <Input placeholder="Underline" styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>readOnly</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input readOnly styled="fill" />
        <Input readOnly styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input readOnly styled="standard" />
        <Input readOnly styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input readOnly styled="fill" />
                <Input readOnly styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input readOnly styled="standard" />
                <Input readOnly styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>readOnly value</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input readOnly styled="fill" value="Fill" />
        <Input readOnly styled="outline" value="Outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input readOnly styled="standard" value="Standard" />
        <Input readOnly styled="underline" value="Underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input readOnly styled="fill" value="Fill" />
                <Input readOnly styled="outline" value="Outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input readOnly styled="standard" value="Standard" />
                <Input readOnly styled="underline" value="Underline" />
              </Box>
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
                {`import { Box, Button, Input } from "abreactui"
import React from "react"

export const InputSample = () => {
  const refInput = React.useRef()

  return (
    <>
      <Box style={{ padding: "1rem", textAlign: "center" }}>
        <Input ref={refInput} styled="standard" />
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Button onClick={() => refInput.current.element.focus()}>
          Focus input fields
        </Button>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ padding: "1rem", textAlign: "center" }}>
                <Input ref={refInput} styled="standard" />
              </Box>
              <Box style={{ textAlign: "center" }}>
                <Button onClick={() => refInput.current.element.focus()}>
                  Focus input fields
                </Button>
              </Box>
            </div>
          </div>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Button, Input } from "abreactui"
import React from "react"

export const InputSample = () => {
  const refInputs = React.useRef([])
  const [active, setActive] = React.useState(false)

  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input ref={(ref) => (refInputs.current[0] = ref)} styled="fill" />
        <Input ref={(ref) => (refInputs.current[1] = ref)} styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input ref={(ref) => (refInputs.current[2] = ref)} styled="standard" />
        <Input ref={(ref) => (refInputs.current[3] = ref)} styled="underline" />
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Button
          onClick={() => {
            refInputs.current.forEach((refInput) => {
              refInput.element.style.backgroundColor =
                !active ? "rgba(150, 200, 50, 0.125)" : ""
            })
            setActive(!active)
          }}
        >
          {active ? "Inactive" : "Active"} input fields
        </Button>
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  ref={(ref) => (refInputs.current[0] = ref)}
                  styled="fill"
                />
                <Input
                  ref={(ref) => (refInputs.current[1] = ref)}
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  ref={(ref) => (refInputs.current[2] = ref)}
                  styled="standard"
                />
                <Input
                  ref={(ref) => (refInputs.current[3] = ref)}
                  styled="underline"
                />
              </Box>
              <Box style={{ textAlign: "center" }}>
                <Button
                  onClick={() => {
                    refInputs.current.forEach((refInput) => {
                      refInput.element.style.backgroundColor =
                        !active ? "rgba(150, 200, 50, 0.125)" : ""
                    })
                    setActive(!active)
                  }}
                >
                  {active ? "Inactive" : "Active"} input fields
                </Button>
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>type</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="fill" type="password" />
        <Input styled="outline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="standard" type="password" />
        <Input styled="underline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="fill" type="search" />
        <Input styled="outline" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="standard" type="search" />
        <Input styled="underline" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="fill" type="textarea" />
        <Input styled="outline" type="textarea" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="standard" type="textarea" />
        <Input styled="underline" type="textarea" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="fill" type="password" />
                <Input styled="outline" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="standard" type="password" />
                <Input styled="underline" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="fill" type="search" />
                <Input styled="outline" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="standard" type="search" />
                <Input styled="underline" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="fill" type="textarea" />
                <Input styled="outline" type="textarea" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="standard" type="textarea" />
                <Input styled="underline" type="textarea" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>value</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="fill" value="Fill" />
        <Input styled="outline" value="Outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="standard" value="Standard" />
        <Input styled="underline" value="Underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="fill" value="Fill" />
                <Input styled="outline" value="Outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="standard" value="Standard" />
                <Input styled="underline" value="Underline" />
              </Box>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { InputPage }
