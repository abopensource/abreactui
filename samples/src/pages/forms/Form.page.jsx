import { Box, Button, Form, Input } from "abreactui"
import React from "react"

import "../styles"

/**
 * `Form` component sample page.
 *
 * @module pages/forms/FormPage
 * @type {import("react").ReactElement}
 */
const FormPage = () => {
  const refForm = React.useRef()
  const [active, setActive] = React.useState(false)

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
    <Form debug>
      <Input />
    </Form>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Form debug>
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
    <Form debug onSubmit={(values) => console.log(values)}>
      <Input id="femail" label="Email" type="email" />
      <Input
        autoComplete="off"
        id="fpassword"
        label="Password"
        type="password"
      />
      <Input type="submit" value="SignIn" />
    </Form>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Form debug onSubmit={(values) => console.log(values)}>
                <Input id="femail" label="Email" type="email" />
                <Input
                  autoComplete="off"
                  id="fpassword"
                  label="Password"
                  type="password"
                />
                <Input type="submit" value="SignIn" />
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
      <Form debug className="myForm">
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
              <Form debug className="myForm">
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

  return (
    <Form
      debug
      fields={fieldsSignIn}
      onSubmit={(values) => console.log(values)}
    />
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Form
                debug
                fields={fieldsSignIn}
                onSubmit={(values) => console.log(values)}
              />
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
                {`import { Box, Button, Form, Input } from "abreactui"
import React from "react"

export const FormSample = () => {
  const refForm = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Box align="center">
      <Form debug onSubmit={() => {}} ref={refForm} style={{ padding: "2em" }}>
        <Input debug id="remail" label="Email" type="email" />
        <Input
          autoComplete="off"
          id="rpassword"
          label="Password"
          type="password"
        />
        <Input type="submit" value="SignIn" />
      </Form>
      <Button
        onClick={() => {
          const form = refForm.current.form
          if (!active) {
            form.style.backgroundColor = "rgba(25, 120, 210, 0.1)"
          } else {
            form.style.backgroundColor = ""
          }
          setActive(!active)
        }}
      >
        {active ? "Inactive" : "Active"} Form
      </Button>
    </Box>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box align="center">
                <Form
                  debug
                  onSubmit={() => {}}
                  ref={refForm}
                  style={{ padding: "2em" }}
                >
                  <Input debug id="remail" label="Email" type="email" />
                  <Input
                    autoComplete="off"
                    id="rpassword"
                    label="Password"
                    type="password"
                  />
                  <Input type="submit" value="SignIn" />
                </Form>
                <Button
                  onClick={() => {
                    const form = refForm.current.form
                    if (!active) {
                      form.style.backgroundColor = "rgba(25, 120, 210, 0.1)"
                    } else {
                      form.style.backgroundColor = ""
                    }
                    setActive(!active)
                  }}
                >
                  {active ? "Inactive" : "Active"} Form
                </Button>
              </Box>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { FormPage }
