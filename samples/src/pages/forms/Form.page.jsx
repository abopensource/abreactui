import { Form, Input } from "abreactui"

import "../styles"

/**
 * `Form` component sample page.
 *
 * @module pages/forms/FormPage
 * @type {import("react").ReactElement}
 */
const FormPage = () => {
  const fieldsSignIn = {
    email: {
      id: "email",
      label: "Email",
      placeholder: "Enter your email address",
      type: "email",
      validity: {
        required: true,
      },
    },
    password: {
      autoComplete: "off",
      id: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      validity: {
        required: true,
      },
    },
    submit: {
      id: "submit",
      type: "submit",
      value: "Login",
    },
  }

  return (
    <div className="Pages SamplePage FormPage">
      <section className="Title">
        <h1>
          <code>Form</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Form, Input } from "abreactui"

export const FormSample = () => {
  return (
    <Form>
      <Input />
    </Form>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Form>
                <Input />
              </Form>
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
                {`import { Form, Input } from "abreactui"

export const FormSample = () => {
  return (
    <Form>
      <Input label="First Name" />
      <Input type="submit" value="Submit" />
    </Form>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Form>
                <Input label="First Name" />
                <Input type="submit" value="Submit" />
              </Form>
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
                {`import { Form, Input } from "abreactui"

export const FormSample = () => {
  return (
    <>
      <style>
        {".myForm { padding: 2em; background: rgba(0, 0, 0, 0.025); }"}
      </style>
      <Form className="myForm">
        <Input label="First Name" />
      </Form>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>
                {".myForm { padding: 2em; background: rgba(0, 0, 0, 0.025); }"}
              </style>
              <Form className="myForm">
                <Input label="First Name" />
              </Form>
            </div>
          </div>
        </article>
        <article className="Sample">
          <h2>
            <code>fields</code> props
          </h2>
          <div className="Example">
            <pre>
              <code>
                {`import { Form } from "abreactui"

export const FormSample = () => {
  const fieldsSignIn = {
    email: {
      id: "email",
      label: "Email",
      placeholder: "Enter your email address",
      type: "email",
      validity: {
        required: true,
      },
    },
    password: {
      autoComplete: "off",
      id: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      validity: {
        required: true,
      },
    },
    submit: {
      id: "submit",
      type: "submit",
      value: "Login",
    },
  }

  return <Form fields={fieldsSignIn} />
}`}
              </code>
            </pre>
            <div className="Result">
              <Form fields={fieldsSignIn} />
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { FormPage }
