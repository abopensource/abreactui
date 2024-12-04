import { Box, Button, MForm, Input } from "abreactui"
import React from "react"

import "../styles"

/**
 * `MForm` component sample page.
 *
 * @module pages/forms/MFormPage
 * @type {import("react").ReactElement}
 */
const MFormPage = () => {
  const refMForm = React.useRef()
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
    <div className="Pages SamplePage MFormPage">
      <section className="Title">
        <h1>
          <code>MForm</code> samples
        </h1>
      </section>
      <section className="Samples">
        <article className="Sample">
          <h2>Basic</h2>
          <div className="Example">
            <pre>
              <code>
                {`import { MForm, Input } from "abreactui"

export const FormSample = () => {
  return (
    <MForm debug>
      <Input />
    </MForm>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MForm debug>
                <Input />
              </MForm>
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
                {`import { MForm, Input } from "abreactui"

export const FormSample = () => {
  return (
    <MForm debug onSubmit={(values) => console.log(values)}>
      <Input id="femail" label="Email" type="email" />
      <Input
        autoComplete="off"
        id="fpassword"
        label="Password"
        type="password"
      />
      <Input type="submit" value="SignIn" />
    </MForm>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MForm debug onSubmit={(values) => console.log(values)}>
                <Input id="femail" label="Email" type="email" />
                <Input
                  autoComplete="off"
                  id="fpassword"
                  label="Password"
                  type="password"
                />
                <Input type="submit" value="SignIn" />
              </MForm>
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
                {`import { MForm, Input } from "abreactui"

export const FormSample = () => {
  return (
    <>
      <style>
        {".myForm { padding: 2em; background: rgba(0, 0, 0, 0.025); }"}
      </style>
      <MForm debug className="myForm">
        <Input label="First Name" />
      </MForm>
    </>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <style>
                {".myForm { padding: 2em; background: rgba(0, 0, 0, 0.025); }"}
              </style>
              <MForm debug className="myForm">
                <Input label="First Name" />
              </MForm>
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
                {`import { MForm } from "abreactui"

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
    <MForm
      debug
      fields={fieldsSignIn}
      onSubmit={(values) => console.log(values)}
    />
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <MForm
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
                {`import { Box, Button, MForm, Input } from "abreactui"
import React from "react"

export const FormSample = () => {
  const refMForm = React.useRef()
  const [active, setActive] = React.useState(false)

  return (
    <Box align="center">
      <MForm debug onSubmit={() => {}} ref={refMForm} style={{ padding: "2em" }}>
        <Input debug id="remail" label="Email" type="email" />
        <Input
          autoComplete="off"
          id="rpassword"
          label="Password"
          type="password"
        />
        <Input type="submit" value="SignIn" />
      </MForm>
      <Button
        onClick={() => {
          const form = refMForm.current.form
          if (!active) {
            form.style.backgroundColor = "rgba(25, 120, 210, 0.1)"
          } else {
            form.style.backgroundColor = ""
          }
          setActive(!active)
        }}
      >
        {active ? "Inactive" : "Active"} MForm
      </Button>
    </Box>
  )
}`}
              </code>
            </pre>
            <div className="Result">
              <Box align="center">
                <MForm
                  debug
                  onSubmit={() => {}}
                  ref={refMForm}
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
                </MForm>
                <Button
                  onClick={() => {
                    const form = refMForm.current.form
                    if (!active) {
                      form.style.backgroundColor = "rgba(25, 120, 210, 0.1)"
                    } else {
                      form.style.backgroundColor = ""
                    }
                    setActive(!active)
                  }}
                >
                  {active ? "Inactive" : "Active"} MForm
                </Button>
              </Box>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}

export { MFormPage }
