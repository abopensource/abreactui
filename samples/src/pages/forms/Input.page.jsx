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
  return <Input defaultValue="DefaultValue" label="Outline" />
}`}</code>
            </pre>
            <div className="Result">
              <Input defaultValue="DefaultValue" label="Label" />
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
                {`import { Input } from "abreactui"

export const InputSample = () => {
  return <Input disabled />
}`}
              </code>
            </pre>
            <div className="Result">
              <Input disabled />
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>disabled label style</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled label="Basic" />
        <Input disabled label="Fill" styled="fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled label="Outline" styled="outline" />
        <Input disabled label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input disabled label="Basic" />
                <Input disabled label="Fill" styled="fill" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input disabled label="Outline" styled="outline" />
                <Input disabled label="Underline" styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>disabled label style value</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled label="Basic" value="Basic" />
        <Input disabled label="Fill" styled="fill" value="Fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled label="Outline" styled="outline" value="Outline" />
        <Input
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
                <Input disabled label="Basic" value="Basic" />
                <Input disabled label="Fill" styled="fill" value="Fill" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  disabled
                  label="Outline"
                  styled="outline"
                  value="Outline"
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
            <code>disabled style</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled />
        <Input disabled styled="fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input disabled styled="outline" />
        <Input disabled styled="underline" />
      </Box>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input disabled />
                <Input disabled styled="fill" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input disabled styled="outline" />
                <Input disabled styled="underline" />
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
              <code>{`import { Input } from "abreactui"

export const InputSample = () => {
  return <Input error />
}`}</code>
            </pre>
            <div className="Result">
              <Input error={true} />
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>error helper label styled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error helper="Helper Message" label="Basic" />
        <Input error helper="Helper Message" label="Fill" styled="fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error helper="Helper Message" label="Outline" styled="outline" />
        <Input
          error
          helper="Helper Message"
          label="Underline"
          styled="underline"
        />
      </Box>
    </>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input error helper="Helper Message" label="Basic" />
                <Input
                  error
                  helper="Helper Message"
                  label="Fill"
                  styled="fill"
                />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input
                  error
                  helper="Helper Message"
                  label="Outline"
                  styled="outline"
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
            <code>error label styled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error label="Basic" />
        <Input error label="Fill" styled="fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error label="Outline" styled="outline" />
        <Input error label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input error label="Basic" />
                <Input error label="Fill" styled="fill" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input error label="Outline" styled="outline" />
                <Input error label="Underline" styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>error styled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error />
        <Input error styled="fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input error styled="outline" />
        <Input error styled="underline" />
      </Box>
    </>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input error />
                <Input error styled="fill" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input error styled="outline" />
                <Input error styled="underline" />
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
              <code>{`import { Input } from "abreactui"

export const InputSample = () => {
  return <Input helper="Helper" />
}`}</code>
            </pre>
            <div className="Result">
              <Input helper="Helper" />
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>helper styled</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input helper="Basic" />
        <Input helper="Fill" styled="fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input helper="Outline" styled="outline" />
        <Input helper="Underline" styled="underline" />
      </Box>
    </>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input helper="Basic" />
                <Input helper="Fill" styled="fill" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input helper="Outline" styled="outline" />
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
        <Input label="Fill" styled="fill" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Outline" styled="outline" />
        <Input label="Underline" styled="underline" />
      </Box>
    </>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Basic" />
                <Input label="Fill" styled="fill" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Outline" styled="outline" />
                <Input label="Underline" styled="underline" />
              </Box>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>label styled type</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Password" type="password" />
        <Input label="Password" styled="fill" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Password" styled="outline" type="password" />
        <Input label="Password" styled="underline" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Search" type="search" />
        <Input label="Search" styled="fill" type="search" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input label="Search" styled="outline" type="search" />
        <Input label="Search" styled="underline" type="search" />
      </Box>
    </>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Password" type="password" />
                <Input label="Password" styled="fill" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Password" styled="outline" type="password" />
                <Input label="Password" styled="underline" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Search" type="search" />
                <Input label="Search" styled="fill" type="search" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input label="Search" styled="outline" type="search" />
                <Input label="Search" styled="underline" type="search" />
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
              <code>{`import { Input } from "abreactui"

export const InputSample = () => {
  return <Input readOnly />
}`}</code>
            </pre>
            <div className="Result">
              <Input readOnly />
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>readOnly value</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Input } from "abreactui"

export const InputSample = () => {
  return <Input readOnly value="Value" />
}`}</code>
            </pre>
            <div className="Result">
              <Input readOnly value="Value" />
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
        <article className="Sample">
          <h2>
            <code>styled type</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>{`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input type="password" />
        <Input styled="fill" type="password" />
      </Box>
      <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Input styled="outline" type="password" />
        <Input styled="underline" type="password" />
      </Box>
    </>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input type="password" />
                <Input styled="fill" type="password" />
              </Box>
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input styled="outline" type="password" />
                <Input styled="underline" type="password" />
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
              <code>{`import { Box, Input } from "abreactui"

export const InputSample = () => {
  return (
    <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Input type="password" />
      <Input type="search" />
    </Box>
  )
}`}</code>
            </pre>
            <div className="Result">
              <Box style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
                <Input type="password" />
                <Input type="search" />
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
              <code>{`import { Input } from "abreactui"
import { type } from '../../../../node_modules/acorn/dist/acorn.d';

export const InputSample = () => {
  return <Input value="Value" />
}`}</code>
            </pre>
            <div className="Result">
              <Input value="Value" />
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { InputPage }
