import { Box, Button, MInput } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MInput` component sample page.
 *
 * @module pages/forms/MInputPage
 * @type {import("react").ReactElement}
 */
const MInputPage = () => {
  const refMInput = React.useRef()
  const refMInputs = React.useRef([])
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage MInputPage">
      <section className="Title">
        <h1>
          <code>MInput</code>(Memoized Input) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ padding: "1rem", textAlign: "center" }}>
        <MInput debug />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="fill" />
        <MInput debug styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="standard" />
        <MInput debug styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ padding: "1rem", textAlign: "center" }}>
                <MInput debug />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="fill" />
                <MInput debug styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="standard" />
                <MInput debug styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <style>{".myField { background-color: rgba(0, 255, 255, 0.125); }"}</style>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput className="myField" debug styled="fill" />
        <MInput className="myField" debug styled="outline" />
      </Box>
      <Box style={{ padding: "1rem" }}>
        <MInput className="myField" debug styled="standard" />
      </Box>
      <Box style={{ padding: "1rem" }}>
        <MInput className="myField" debug styled="underline" />
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
                <MInput className="myField" debug styled="fill" />
                <MInput className="myField" debug styled="outline" />
              </Box>
              <Box style={{ padding: "1rem" }}>
                <MInput className="myField" debug styled="standard" />
              </Box>
              <Box style={{ padding: "1rem" }}>
                <MInput className="myField" debug styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug defaultValue="Fill" styled="fill" />
        <MInput debug defaultValue="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug defaultValue="Standard" styled="standard" />
        <MInput debug defaultValue="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug defaultValue="Fill" styled="fill" />
                <MInput debug defaultValue="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug defaultValue="Standard" styled="standard" />
                <MInput debug defaultValue="Underline" styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug defaultValue="Fill" label="Fill" styled="fill" />
        <MInput debug defaultValue="Outline" label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput
          debug
          defaultValue="Standard"
          label="Standard"
          styled="standard"
        />
        <MInput
          debug
          defaultValue="Underline"
          label="Underline"
          styled="underline"
        />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug defaultValue="Fill" label="Fill" styled="fill" />
                <MInput
                  debug
                  defaultValue="Outline"
                  label="Outline"
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput
                  debug
                  defaultValue="Standard"
                  label="Standard"
                  styled="standard"
                />
                <MInput
                  debug
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug disabled styled="fill" />
        <MInput debug disabled styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug disabled styled="standard" />
        <MInput debug disabled styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug disabled styled="fill" />
                <MInput debug disabled styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug disabled styled="standard" />
                <MInput debug disabled styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug disabled label="Fill" styled="fill" />
        <MInput debug disabled label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug disabled label="Standard" styled="standard" />
        <MInput debug disabled label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug disabled label="Fill" styled="fill" />
                <MInput debug disabled label="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug disabled label="Standard" styled="standard" />
                <MInput debug disabled label="Underline" styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug disabled label="Fill" styled="fill" value="Fill" />
        <MInput
          debug
          disabled
          label="Outline"
          styled="outline"
          value="Outline"
        />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput
          debug
          disabled
          label="Standard"
          styled="standard"
          value="Standard"
        />
        <MInput
          debug
          disabled
          label="Underline"
          styled="underline"
          value="Underline"
        />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput
                  debug
                  disabled
                  label="Fill"
                  styled="fill"
                  value="Fill"
                />
                <MInput
                  debug
                  disabled
                  label="Outline"
                  styled="outline"
                  value="Outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput
                  debug
                  disabled
                  label="Standard"
                  styled="standard"
                  value="Standard"
                />
                <MInput
                  debug
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug error styled="fill" />
        <MInput debug error styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug error styled="standard" />
        <MInput debug error styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug error styled="fill" />
                <MInput debug error styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug error styled="standard" />
                <MInput debug error styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug error label="Fill" styled="fill" />
        <MInput debug error label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug error label="Standard" styled="standard" />
        <MInput debug error label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug error label="Fill" styled="fill" />
                <MInput debug error label="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug error label="Standard" styled="standard" />
                <MInput debug error label="Underline" styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug error helper="Helper Message" label="Fill" styled="fill" />
        <MInput
          debug
          error
          helper="Helper Message"
          label="Outline"
          styled="outline"
        />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput
          debug
          error
          helper="Helper Message"
          label="Standard"
          styled="standard"
        />
        <MInput
          debug
          error
          helper="Helper Message"
          label="Underline"
          styled="underline"
        />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput
                  debug
                  error
                  helper="Helper Message"
                  label="Fill"
                  styled="fill"
                />
                <MInput
                  debug
                  error
                  helper="Helper Message"
                  label="Outline"
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput
                  debug
                  error
                  helper="Helper Message"
                  label="Standard"
                  styled="standard"
                />
                <MInput
                  debug
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug helper="Fill" styled="fill" />
        <MInput debug helper="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug helper="Standard" styled="standard" />
        <MInput debug helper="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug helper="Fill" styled="fill" />
                <MInput debug helper="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug helper="Standard" styled="standard" />
                <MInput debug helper="Underline" styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug label="Fill" styled="fill" />
        <MInput debug label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug label="Standard" styled="standard" />
        <MInput debug label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug label="Fill" styled="fill" />
                <MInput debug label="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug label="Standard" styled="standard" />
                <MInput debug label="Underline" styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug label="Fill" placeholder="Fill" styled="fill" />
        <MInput debug label="Outline" placeholder="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput
          debug
          label="Standard"
          placeholder="Standard"
          styled="standard"
        />
        <MInput
          debug
          label="Underline"
          placeholder="Underline"
          styled="underline"
        />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug label="Fill" placeholder="Fill" styled="fill" />
                <MInput
                  debug
                  label="Outline"
                  placeholder="Outline"
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput
                  debug
                  label="Standard"
                  placeholder="Standard"
                  styled="standard"
                />
                <MInput
                  debug
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug label="Password" styled="fill" type="password" />
        <MInput debug label="Password" styled="outline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug label="Password" styled="standard" type="password" />
        <MInput debug label="Password" styled="underline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug label="Search" styled="fill" type="search" />
        <MInput debug label="Search" styled="outline" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug label="Search" styled="standard" type="search" />
        <MInput debug label="Search" styled="underline" type="search" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug label="Password" styled="fill" type="password" />
                <MInput
                  debug
                  label="Password"
                  styled="outline"
                  type="password"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput
                  debug
                  label="Password"
                  styled="standard"
                  type="password"
                />
                <MInput
                  debug
                  label="Password"
                  styled="underline"
                  type="password"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug label="Search" styled="fill" type="search" />
                <MInput debug label="Search" styled="outline" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug label="Search" styled="standard" type="search" />
                <MInput debug label="Search" styled="underline" type="search" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug multiline styled="fill" />
        <MInput debug multiline styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug multiline styled="standard" />
        <MInput debug multiline styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug multiline styled="fill" />
                <MInput debug multiline styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug multiline styled="standard" />
                <MInput debug multiline styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug label="Fill" multiline rows={5} styled="fill" />
        <MInput debug label="Outline" multiline rows={5} styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug label="Standard" multiline rows={5} styled="standard" />
        <MInput debug label="Underline" multiline rows={5} styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug label="Fill" multiline rows={5} styled="fill" />
                <MInput
                  debug
                  label="Outline"
                  multiline
                  rows={5}
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput
                  debug
                  label="Standard"
                  multiline
                  rows={5}
                  styled="standard"
                />
                <MInput
                  debug
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug multiline rows={1} styled="fill" />
        <MInput debug multiline rows={1} styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug multiline rows={1} styled="standard" />
        <MInput debug multiline rows={1} styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug multiline rows={1} styled="fill" />
                <MInput debug multiline rows={1} styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug multiline rows={1} styled="standard" />
                <MInput debug multiline rows={1} styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug placeholder="Fill" styled="fill" />
        <MInput debug placeholder="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug placeholder="Standard" styled="standard" />
        <MInput debug placeholder="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug placeholder="Fill" styled="fill" />
                <MInput debug placeholder="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug placeholder="Standard" styled="standard" />
                <MInput debug placeholder="Underline" styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug readOnly styled="fill" />
        <MInput debug readOnly styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug readOnly styled="standard" />
        <MInput debug readOnly styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug readOnly styled="fill" />
                <MInput debug readOnly styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug readOnly styled="standard" />
                <MInput debug readOnly styled="underline" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug readOnly styled="fill" value="Fill" />
        <MInput debug readOnly styled="outline" value="Outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug readOnly styled="standard" value="Standard" />
        <MInput debug readOnly styled="underline" value="Underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug readOnly styled="fill" value="Fill" />
                <MInput debug readOnly styled="outline" value="Outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug readOnly styled="standard" value="Standard" />
                <MInput debug readOnly styled="underline" value="Underline" />
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
                {`import { Box, Button, MInput } from "abreactui"
import React from "react"

export const MInputSample = () => {
  const refMInput = React.useRef()

  return (
    <>
      <Box style={{ padding: "1rem", textAlign: "center" }}>
        <MInput debug ref={refMInput} styled="standard" />
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Button onClick={() => refMInput.current.focus()}>
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
                <MInput debug ref={refMInput} styled="standard" />
              </Box>
              <Box style={{ textAlign: "center" }}>
                <Button onClick={() => refMInput.current.focus()}>
                  Focus input fields
                </Button>
              </Box>
            </div>
          </div>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Button, MInput } from "abreactui"
import React from "react"

export const MInputSample = () => {
  const refMInputs = React.useRef([])
  const [active, setActive] = React.useState(false)

  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput
          debug
          ref={(ref) => (refMInputs.current[0] = ref)}
          styled="fill"
        />
        <MInput
          debug
          ref={(ref) => (refMInputs.current[1] = ref)}
          styled="outline"
        />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput
          debug
          ref={(ref) => (refMInputs.current[2] = ref)}
          styled="standard"
        />
        <MInput
          debug
          ref={(ref) => (refMInputs.current[3] = ref)}
          styled="underline"
        />
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Button
          onClick={() => {
            refMInputs.current.forEach((refMInput) => {
              refMInput.field.style.backgroundColor =
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
                <MInput
                  debug
                  ref={(ref) => (refMInputs.current[0] = ref)}
                  styled="fill"
                />
                <MInput
                  debug
                  ref={(ref) => (refMInputs.current[1] = ref)}
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput
                  debug
                  ref={(ref) => (refMInputs.current[2] = ref)}
                  styled="standard"
                />
                <MInput
                  debug
                  ref={(ref) => (refMInputs.current[3] = ref)}
                  styled="underline"
                />
              </Box>
              <Box style={{ textAlign: "center" }}>
                <Button
                  onClick={() => {
                    refMInputs.current.forEach((refMInput) => {
                      refMInput.field.style.backgroundColor =
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="fill" type="password" />
        <MInput debug styled="outline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="standard" type="password" />
        <MInput debug styled="underline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="fill" type="search" />
        <MInput debug styled="outline" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="standard" type="search" />
        <MInput debug styled="underline" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="fill" type="textarea" />
        <MInput debug styled="outline" type="textarea" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="standard" type="textarea" />
        <MInput debug styled="underline" type="textarea" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="fill" type="password" />
                <MInput debug styled="outline" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="standard" type="password" />
                <MInput debug styled="underline" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="fill" type="search" />
                <MInput debug styled="outline" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="standard" type="search" />
                <MInput debug styled="underline" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="fill" type="textarea" />
                <MInput debug styled="outline" type="textarea" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="standard" type="textarea" />
                <MInput debug styled="underline" type="textarea" />
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
                {`import { Box, MInput } from "abreactui"

export const MInputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="fill" value="Fill" />
        <MInput debug styled="outline" value="Outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <MInput debug styled="standard" value="Standard" />
        <MInput debug styled="underline" value="Underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="fill" value="Fill" />
                <MInput debug styled="outline" value="Outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <MInput debug styled="standard" value="Standard" />
                <MInput debug styled="underline" value="Underline" />
              </Box>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MInputPage }
