import { Button, Page } from "abreactui"
import React from "react"

import "../styles"

/**
 * `Page` component sample page.
 *
 * @module pages/layouts/PagePage
 * @type {import("react").ReactElement}
 */
const PagePage = () => {
  const refPage = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage PagePage">
      <section className="Title">
        <h1>
          <code>Page</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Page } from "abreactui"

export const PageSample = () => {
  return <Page>Page basic sample</Page>
}`}
              </code>
            </pre>
            <div className="Result">
              <Page>Page basic sample</Page>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>align</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Page } from "abreactui"

export const PageSample = () => {
  return <Page align="center">Page align=&quot;center&quot; props sample</Page>
}`}
              </code>
            </pre>
            <div className="Result">
              <Page align="center">
                Page align=&quot;center&quot; props sample
              </Page>
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
                {`import { Page } from "abreactui"

export const PageSample = () => {
  return (
    <>
      <style>{".myPage { background-color: rgb(240, 240, 240) }"}</style>
      <Page className="myPage">Page className props sample</Page>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>
                {".myPage { background-color: rgb(240, 240, 240) }"}
              </style>
              <Page className="myPage">Page className props sample</Page>
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
                {`import { Button, Page } from "abreactui"

export const PageSample = () => {
  const refPage = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Page align="center" ref={refPage}>
      <Button
        onClick={() => {
          const page = refPage.current
          if (!active) {
            page.style.backgroundColor = "rgba(245, 245, 245)"
          } else {
            page.style.backgroundColor = ""
          }
          setActive(!active)
        }}
      >
        {active ? "Inactive" : "Active"} Page
      </Button>
    </Page>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Page align="center" ref={refPage}>
                <Button
                  onClick={() => {
                    const page = refPage.current
                    if (!active) {
                      page.style.backgroundColor = "rgba(245, 245, 245)"
                    } else {
                      page.style.backgroundColor = ""
                    }
                    setActive(!active)
                  }}
                >
                  {active ? "Inactive" : "Active"} Page
                </Button>
              </Page>
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
                {`import { Page } from "abreactui"

export const PageSample = () => {
  return <Page tag="p">Page tag props sample</Page>
}`}
              </code>
            </pre>
            <div className="Result">
              <Page tag="p">Page tag props sample</Page>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { PagePage }
