import { Button } from "abreactui"
import { useRef } from "react"
import { BsSave } from "react-icons/bs"

import "../styles"

/**
 * `Button` component sample page.
 *
 * @module pages/buttons/ButtonPage
 * @type {import("react").ReactElement}
 */
const ButtonPage = () => {
  const myButton = useRef(null)

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
          <pre>
            <code>{`<Button>Basic</Button>`}</code>
          </pre>
          <div className="Result">
            <Button>Basic</Button>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>className</code> props
          </h2>
          <pre>
            <code>{`<Button className="myButton">className</Button>`}</code>
          </pre>
          <div className="Result">
            <Button className="myButton">className</Button>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>disabled</code> props
          </h2>
          <pre>
            <code>{`<Button disabled>Disabled</Button>`}</code>
          </pre>
          <div className="Result">
            <Button disabled>Disabled</Button>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>iconEnd</code> props
          </h2>
          <pre>
            <code>{`<Button iconEnd={<BsSave />}>Save</Button>`}</code>
          </pre>
          <div className="Result">
            <Button iconEnd={<BsSave />}>Save</Button>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>iconStart</code> props
          </h2>
          <pre>
            <code>{`<Button iconStart={<BsSave />}>Save</Button>`}</code>
          </pre>
          <div className="Result">
            <Button iconStart={<BsSave />}>Save</Button>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>style</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<Button style={{ backgroundColor: "yellowgreen" }}>
  Custom Style
</Button>`
              }
            </code>
          </pre>
          <div className="Result">
            <Button style={{ backgroundColor: "yellowgreen" }}>
              Custom Style
            </Button>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>styled</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<Button>Basic</Button>
<Button styled="fill">Fill</Button>
<Button styled="outline">Outline</Button>`
              }
            </code>
          </pre>
          <div className="Result">
            <Button>Basic</Button>
            <Button styled="fill">Fill</Button>
            <Button styled="outline">Outline</Button>
          </div>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`Underline button component sample: &nbsp;
<Button styled="underline">Underline</Button>
<br />
<br />
Text button component sample: &nbsp;
<Button styled="text">Text</Button>`
              }
            </code>
          </pre>
          <div className="Result">
            Underline button component sample: &nbsp;
            <Button styled="underline">Underline</Button>
            <br />
            <br />
            Text button component sample: &nbsp;
            <Button styled="text">Text</Button>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>styled disabled</code> props
          </h2>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<Button disabled>Basic Disabled</Button>
<Button disabled styled="fill">
  Fill Disabled
</Button>
<Button disabled styled="outline">
  Outline Disabled
</Button>`
              }
            </code>
          </pre>
          <div className="Result">
            <Button disabled>Basic Disabled</Button>
            <Button disabled styled="fill">
              Fill Disabled
            </Button>
            <Button disabled styled="outline">
              Outline Disabled
            </Button>
          </div>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`Underline button component sample: &nbsp;
<Button disabled styled="underline">
  Underline Disabled
</Button>
<br />
<br />
Text button component sample: &nbsp;
<Button disabled styled="text">
  Text Disabled
</Button>`
              }
            </code>
          </pre>
          <div className="Result">
            Underline button component sample: &nbsp;
            <Button disabled styled="underline">
              Underline Disabled
            </Button>
            <br />
            <br />
            Text button component sample: &nbsp;
            <Button disabled styled="text">
              Text Disabled
            </Button>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>tag</code> props
          </h2>
          <pre>
            <code>{`<Button tag="a" href="https://google.com" target="blank">Link using A</Button>`}</code>
          </pre>
          <div className="Result">
            <Button tag="a" href="https://google.com" target="blank">
              Link using A
            </Button>
          </div>
          {/* prettier-ignore */}
          <pre>
            <code>
              {
`<Button href="https://google.com" styled="outline" target="blank">
  Link using A
</Button>`
              }
            </code>
          </pre>
          <div className="Result">
            <Button href="https://google.com" styled="outline" target="blank">
              Link using A
            </Button>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>ref</code> props
          </h2>
          <pre>
            <code>{`<Button ref={myButton}>Ref</Button>`}</code>
          </pre>
          <div className="Result">
            <Button ref={myButton}>Ref</Button>
          </div>
        </article>
      </section>
    </div>
  )
}

export { ButtonPage }
