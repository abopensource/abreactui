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
        <Input debug />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug styled="fill" />
        <Input debug styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug styled="standard" />
        <Input debug styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ padding: "1rem", textAlign: "center" }}>
                <Input debug />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="fill" />
                <Input debug styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="standard" />
                <Input debug styled="underline" />
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
        <Input className="myField" debug styled="fill" />
        <Input className="myField" debug styled="outline" />
      </Box>
      <Box style={{ padding: "1rem" }}>
        <Input className="myField" debug styled="standard" />
      </Box>
      <Box style={{ padding: "1rem" }}>
        <Input className="myField" debug styled="underline" />
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
                <Input className="myField" debug styled="fill" />
                <Input className="myField" debug styled="outline" />
              </Box>
              <Box style={{ padding: "1rem" }}>
                <Input className="myField" debug styled="standard" />
              </Box>
              <Box style={{ padding: "1rem" }}>
                <Input className="myField" debug styled="underline" />
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
        <Input debug defaultValue="Fill" styled="fill" />
        <Input debug defaultValue="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug defaultValue="Standard" styled="standard" />
        <Input debug defaultValue="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug defaultValue="Fill" styled="fill" />
                <Input debug defaultValue="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug defaultValue="Standard" styled="standard" />
                <Input debug defaultValue="Underline" styled="underline" />
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
        <Input debug defaultValue="Fill" label="Fill" styled="fill" />
        <Input debug defaultValue="Outline" label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input
          debug
          defaultValue="Standard"
          label="Standard"
          styled="standard"
        />
        <Input
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
                <Input debug defaultValue="Fill" label="Fill" styled="fill" />
                <Input
                  debug
                  defaultValue="Outline"
                  label="Outline"
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  debug
                  defaultValue="Standard"
                  label="Standard"
                  styled="standard"
                />
                <Input
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
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug disabled styled="fill" />
        <Input debug disabled styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug disabled styled="standard" />
        <Input debug disabled styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug disabled styled="fill" />
                <Input debug disabled styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug disabled styled="standard" />
                <Input debug disabled styled="underline" />
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
        <Input debug disabled label="Fill" styled="fill" />
        <Input debug disabled label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug disabled label="Standard" styled="standard" />
        <Input debug disabled label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug disabled label="Fill" styled="fill" />
                <Input debug disabled label="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug disabled label="Standard" styled="standard" />
                <Input debug disabled label="Underline" styled="underline" />
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
        <Input debug disabled label="Fill" styled="fill" value="Fill" />
        <Input
          debug
          disabled
          label="Outline"
          styled="outline"
          value="Outline"
        />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input
          debug
          disabled
          label="Standard"
          styled="standard"
          value="Standard"
        />
        <Input
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
                <Input debug disabled label="Fill" styled="fill" value="Fill" />
                <Input
                  debug
                  disabled
                  label="Outline"
                  styled="outline"
                  value="Outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  debug
                  disabled
                  label="Standard"
                  styled="standard"
                  value="Standard"
                />
                <Input
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
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug error styled="fill" />
        <Input debug error styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug error styled="standard" />
        <Input debug error styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug error styled="fill" />
                <Input debug error styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug error styled="standard" />
                <Input debug error styled="underline" />
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
        <Input debug error label="Fill" styled="fill" />
        <Input debug error label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug error label="Standard" styled="standard" />
        <Input debug error label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug error label="Fill" styled="fill" />
                <Input debug error label="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug error label="Standard" styled="standard" />
                <Input debug error label="Underline" styled="underline" />
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
        <Input debug error helper="Helper Message" label="Fill" styled="fill" />
        <Input
          debug
          error
          helper="Helper Message"
          label="Outline"
          styled="outline"
        />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input
          debug
          error
          helper="Helper Message"
          label="Standard"
          styled="standard"
        />
        <Input
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
                <Input
                  debug
                  error
                  helper="Helper Message"
                  label="Fill"
                  styled="fill"
                />
                <Input
                  debug
                  error
                  helper="Helper Message"
                  label="Outline"
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  debug
                  error
                  helper="Helper Message"
                  label="Standard"
                  styled="standard"
                />
                <Input
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
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug helper="Fill" styled="fill" />
        <Input debug helper="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug helper="Standard" styled="standard" />
        <Input debug helper="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug helper="Fill" styled="fill" />
                <Input debug helper="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug helper="Standard" styled="standard" />
                <Input debug helper="Underline" styled="underline" />
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
        <Input debug label="Fill" styled="fill" />
        <Input debug label="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug label="Standard" styled="standard" />
        <Input debug label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug label="Fill" styled="fill" />
                <Input debug label="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug label="Standard" styled="standard" />
                <Input debug label="Underline" styled="underline" />
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
        <Input debug label="Fill" placeholder="Fill" styled="fill" />
        <Input debug label="Outline" placeholder="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input
          debug
          label="Standard"
          placeholder="Standard"
          styled="standard"
        />
        <Input
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
                <Input debug label="Fill" placeholder="Fill" styled="fill" />
                <Input
                  debug
                  label="Outline"
                  placeholder="Outline"
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  debug
                  label="Standard"
                  placeholder="Standard"
                  styled="standard"
                />
                <Input
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
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug label="Password" styled="fill" type="password" />
        <Input debug label="Password" styled="outline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug label="Password" styled="standard" type="password" />
        <Input debug label="Password" styled="underline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug label="Search" styled="fill" type="search" />
        <Input debug label="Search" styled="outline" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug label="Search" styled="standard" type="search" />
        <Input debug label="Search" styled="underline" type="search" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug label="Password" styled="fill" type="password" />
                <Input
                  debug
                  label="Password"
                  styled="outline"
                  type="password"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  debug
                  label="Password"
                  styled="standard"
                  type="password"
                />
                <Input
                  debug
                  label="Password"
                  styled="underline"
                  type="password"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug label="Search" styled="fill" type="search" />
                <Input debug label="Search" styled="outline" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug label="Search" styled="standard" type="search" />
                <Input debug label="Search" styled="underline" type="search" />
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
        <Input debug multiline styled="fill" />
        <Input debug multiline styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug multiline styled="standard" />
        <Input debug multiline styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug multiline styled="fill" />
                <Input debug multiline styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug multiline styled="standard" />
                <Input debug multiline styled="underline" />
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
        <Input debug label="Fill" multiline rows={5} styled="fill" />
        <Input debug label="Outline" multiline rows={5} styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug label="Standard" multiline rows={5} styled="standard" />
        <Input debug label="Underline" multiline rows={5} styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug label="Fill" multiline rows={5} styled="fill" />
                <Input
                  debug
                  label="Outline"
                  multiline
                  rows={5}
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  debug
                  label="Standard"
                  multiline
                  rows={5}
                  styled="standard"
                />
                <Input
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
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug multiline rows={1} styled="fill" />
        <Input debug multiline rows={1} styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug multiline rows={1} styled="standard" />
        <Input debug multiline rows={1} styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug multiline rows={1} styled="fill" />
                <Input debug multiline rows={1} styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug multiline rows={1} styled="standard" />
                <Input debug multiline rows={1} styled="underline" />
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
        <Input debug placeholder="Fill" styled="fill" />
        <Input debug placeholder="Outline" styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug placeholder="Standard" styled="standard" />
        <Input debug placeholder="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug placeholder="Fill" styled="fill" />
                <Input debug placeholder="Outline" styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug placeholder="Standard" styled="standard" />
                <Input debug placeholder="Underline" styled="underline" />
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
        <Input debug readOnly styled="fill" />
        <Input debug readOnly styled="outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug readOnly styled="standard" />
        <Input debug readOnly styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug readOnly styled="fill" />
                <Input debug readOnly styled="outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug readOnly styled="standard" />
                <Input debug readOnly styled="underline" />
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
        <Input debug readOnly styled="fill" value="Fill" />
        <Input debug readOnly styled="outline" value="Outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug readOnly styled="standard" value="Standard" />
        <Input debug readOnly styled="underline" value="Underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug readOnly styled="fill" value="Fill" />
                <Input debug readOnly styled="outline" value="Outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug readOnly styled="standard" value="Standard" />
                <Input debug readOnly styled="underline" value="Underline" />
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
        <Input debug ref={refInput} styled="standard" />
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Button onClick={() => refInput.current.focus()}>
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
                <Input debug ref={refInput} styled="standard" />
              </Box>
              <Box style={{ textAlign: "center" }}>
                <Button onClick={() => refInput.current.focus()}>
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
        <Input
          debug
          ref={(ref) => (refInputs.current[0] = ref)}
          styled="fill"
        />
        <Input
          debug
          ref={(ref) => (refInputs.current[1] = ref)}
          styled="outline"
        />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input
          debug
          ref={(ref) => (refInputs.current[2] = ref)}
          styled="standard"
        />
        <Input
          debug
          ref={(ref) => (refInputs.current[3] = ref)}
          styled="underline"
        />
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Button
          onClick={() => {
            refInputs.current.forEach((refInput) => {
              refInput.field.style.backgroundColor =
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
                  debug
                  ref={(ref) => (refInputs.current[0] = ref)}
                  styled="fill"
                />
                <Input
                  debug
                  ref={(ref) => (refInputs.current[1] = ref)}
                  styled="outline"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  debug
                  ref={(ref) => (refInputs.current[2] = ref)}
                  styled="standard"
                />
                <Input
                  debug
                  ref={(ref) => (refInputs.current[3] = ref)}
                  styled="underline"
                />
              </Box>
              <Box style={{ textAlign: "center" }}>
                <Button
                  onClick={() => {
                    refInputs.current.forEach((refInput) => {
                      refInput.field.style.backgroundColor =
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
        <Input debug styled="fill" type="password" />
        <Input debug styled="outline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug styled="standard" type="password" />
        <Input debug styled="underline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug styled="fill" type="search" />
        <Input debug styled="outline" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug styled="standard" type="search" />
        <Input debug styled="underline" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug styled="fill" type="textarea" />
        <Input debug styled="outline" type="textarea" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug styled="standard" type="textarea" />
        <Input debug styled="underline" type="textarea" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="fill" type="password" />
                <Input debug styled="outline" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="standard" type="password" />
                <Input debug styled="underline" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="fill" type="search" />
                <Input debug styled="outline" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="standard" type="search" />
                <Input debug styled="underline" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="fill" type="textarea" />
                <Input debug styled="outline" type="textarea" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="standard" type="textarea" />
                <Input debug styled="underline" type="textarea" />
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
        <Input debug styled="fill" value="Fill" />
        <Input debug styled="outline" value="Outline" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input debug styled="standard" value="Standard" />
        <Input debug styled="underline" value="Underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="fill" value="Fill" />
                <Input debug styled="outline" value="Outline" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input debug styled="standard" value="Standard" />
                <Input debug styled="underline" value="Underline" />
              </Box>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { InputPage }
