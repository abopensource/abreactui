import PropTypes from "prop-types"
import React from "react"

import { createElement, Input, log, style } from "../"

/**
 * Returns after created the form controller element(JSX element).
 *
 * @module Form
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [Props.children] Child nodes to include in the form controller element to be created.
 * @param {String} [Props.className] Stylesheet class name to apply to the form controller element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {Object} [Props.fields] Object containing Props for the user input fields to be included in the form controller element(JSX element).
 * @param {EventListener} [Props.onSubmit] `EventListener` to execute when the form controller is submit.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created form controller element(JSX element).
 */
const Form = React.forwardRef((Props, forwardedRef) => {
  const {
    children,
    className,
    debug = false,
    fields,
    onSubmit,
    ...propsOther
  } = Props
  const _tag = `[${log._tag}][Form]`
  if (debug) {
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const refForm = React.useRef()
  const refFields = {}
  const childrenForm = []

  if (fields) {
    Object.keys(fields).forEach((field, f) => {
      const refField = React.useRef()
      childrenForm.push(
        <Input {...fields[field]} debug={debug} key={f} ref={refField} />,
      )

      if (fields[field].type !== "reset" && fields[field].type !== "submit") {
        refFields[field] = refField
      }
    })

    childrenForm.push(children)
  } else {
    const clonedChildren = React.Children.map(children, (child, c) => {
      if (React.isValidElement(child)) {
        const refField = React.createRef()
        const key = child.props?.id || child.props?.name || c
        const clonedChild = React.cloneElement(child, {
          ref: (node) => {
            if (typeof child.ref === "function") child.ref(node)
            else if (child.ref) child.ref.current = node

            refField.current = node
          },
        })
        refFields[key] = refField

        return clonedChild
      }

      return child
    })

    childrenForm.push(clonedChildren)
  }

  const styles = [style.Form]
  className && styles.push(className)

  /**
   * Returns the values of the fields contained in a form element.
   *
   * @method getValues
   * @returns {Object} Values of the fields contained in a form element.
   */
  const getValues = () => {
    debug && log.debug(`${_tag}[getValues]`)

    const values = {}

    for (const key of Object.keys(refFields)) {
      const value = refFields[key].current?.value
      value && (values[key] = value)
    }
    debug && log.debug(`${_tag}[getValues] values: %o`, values)

    return values
  }

  const props = { ...propsOther, className: styles.join(" "), ref: refForm }
  if (forwardedRef) {
    React.useImperativeHandle(forwardedRef, () => ({
      reset: refForm.current.reset,
      submit: refForm.current.submit,
      fields: refFields,
      form: refForm.current,
      getValues,
    }))
  }

  props.onSubmit = (event) => {
    debug && log.debug(`${_tag} onSubmit event: %o`, event)

    event?.preventDefault()

    for (const key of Object.keys(refFields)) {
      const ref = refFields[key].current
      if (ref?.checkValidation && !ref.checkValidation()) {
        return ref?.field?.focus && ref.field.focus()
      }
    }

    onSubmit ? onSubmit(getValues()) : refForm.current.submit()
  }

  return createElement({ children: childrenForm, props, tag: "form" })
})
const MForm = React.memo(
  React.forwardRef((props, forwardedRef) => (
    <Form {...props} ref={forwardedRef} />
  )),
)
Form.displayName = "Form"
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
  fields: PropTypes.object,
  onSubmit: PropTypes.func,
}

export { Form, MForm }
