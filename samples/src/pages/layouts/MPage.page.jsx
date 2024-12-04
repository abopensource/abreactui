import { Button, MPage } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MPage` component sample page.
 *
 * @module pages/layouts/MPagePage
 * @type {import("react").ReactElement}
 */
const MPagePage = () => {
  const refMPage = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <div className="Pages SamplePage MPagePage">
      <section className="Title">
        <h1>
          <code>MPage</code>(Memoized Page) samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MPage } from "abreactui"

export const MPageSample = () => {
  return <MPage debug>MPage basic sample</MPage>
}`}
              </code>
            </pre>
            <div className="Result">
              <MPage debug>MPage basic sample</MPage>
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
                {`import { MPage } from "abreactui"

export const MPageSample = () => {
  return (
    <MPage align="center" debug>
      MPage align=&quot;center&quot; props sample
    </MPage>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MPage align="center" debug>
                MPage align=&quot;center&quot; props sample
              </MPage>
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
                {`import { MPage } from "abreactui"

export const MPageSample = () => {
  return (
    <>
      <style>{".myPage { background-color: rgb(240, 240, 240) }"}</style>
      <MPage className="myPage" debug>
        MPage className props sample
      </MPage>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>
                {".myPage { background-color: rgb(240, 240, 240) }"}
              </style>
              <MPage className="myPage" debug>
                MPage className props sample
              </MPage>
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
                {`import { Button, MPage } from "abreactui"

export const MPageSample = () => {
  const refMPage = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <MPage align="center" debug ref={refMPage}>
      <Button
        onClick={() => {
          const page = refMPage.current
          if (!active) {
            page.style.backgroundColor = "rgba(245, 245, 245)"
          } else {
            page.style.backgroundColor = ""
          }
          setActive(!active)
        }}
      >
        {active ? "Inactive" : "Active"} page
      </Button>
    </MPage>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MPage align="center" debug ref={refMPage}>
                <Button
                  onClick={() => {
                    const page = refMPage.current
                    if (!active) {
                      page.style.backgroundColor = "rgba(245, 245, 245)"
                    } else {
                      page.style.backgroundColor = ""
                    }
                    setActive(!active)
                  }}
                >
                  {active ? "Inactive" : "Active"} page
                </Button>
              </MPage>
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
                {`import { MPage } from "abreactui"

export const MPageSample = () => {
  return (
    <MPage debug tag="p">
      MPage tag props sample
    </MPage>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MPage debug tag="p">
                MPage tag props sample
              </MPage>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MPagePage }
