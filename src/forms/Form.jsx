import PropTypes from "prop-types"
import React from "react"

import { createElement, Input, style } from "../"

/**
 * Returns after created the form controller element(JSX element).
 *
 * @module Form
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the form controller element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the form controller element to be created.
 * @param {Object} [props.fields] Object containing props for the user input fields to be included in the form controller element(JSX element).
 * @param {EventListener} [props.onSubmit] `EventListener` to execute when the form controller is submit.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created form controller element(JSX element).
 */
const Form = React.forwardRef((props, forwardedRef) => {
  const { children, className, fields, ...propsOther } = props

  const refForm = React.useRef()
  const childrenForm = []
  const refFields = {}

  if (fields) {
    Object.keys(fields).forEach((field, f) => {
      const refField = React.useRef()
      childrenForm.push(<Input key={f} {...fields[field]} ref={refField} />)

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
    const values = {}

    for (const key of Object.keys(refFields)) {
      const value = refFields[key].current?.value
      value && (values[key] = value)
    }

    return values
  }

  const propsForm = { ...propsOther, className: styles.join(" "), ref: refForm }
  if (forwardedRef) {
    React.useImperativeHandle(forwardedRef, () => ({
      reset: refForm.current.reset,
      submit: refForm.current.submit,
      fields: refFields,
      form: refForm.current,
      getValues,
    }))
  }

  propsForm.onSubmit = (event) => {
    event?.preventDefault()

    for (const key of Object.keys(refFields)) {
      const ref = refFields[key].current
      if (ref?.checkValidation && !ref.checkValidation()) {
        return ref?.field?.focus && ref.field.focus()
      }
    }

    props.onSubmit ? props.onSubmit(getValues()) : refForm.current.submit()
  }

  return createElement({
    children: childrenForm,
    props: propsForm,
    tag: "form",
  })
})
Form.displayName = "Form"
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fields: PropTypes.object,
  onSubmit: PropTypes.func,
}

export { Form }
