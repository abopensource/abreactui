import PropTypes from "prop-types"
import React from "react"

import {
  Box,
  Button,
  InputContainer,
  InputController,
  InputFieldSet,
  InputHelper,
  InputLabel,
  InputText,
} from "../"

/**
 * Returns after created the user input field controller element(JSX element).
 *
 * @module Input
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the user input field controller element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the user input field controller element to be created.
 * @param {String} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {Boolean} [props.error] Whether the user input value is invalid.
 * @param {String} [props.helper] Help message for user input value.
 * @param {String} [props.id] Identifier(`id`) attribute for the user input field element.
 * @param {String} [props.label] Label string for user input field element.
 * @param {Number} [props.maxRows=20] Maximum number of lines if it is a multiline input field.
 * @param {Boolean} [props.multiline] Whether to use the `<textarea>` element as an auto-resizeable element.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the user input field element has lost focus.
 * @param {EventListener} [props.onChange] `EventListener` to execute when the value of the user input field element changes.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the user input field element has received focus.
 * @param {EventListener} [props.onKeyDown] `EventListener` to execute when keyboard input is entered into a user input field element.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {Boolean} [props.required] Whether the user input field element is the required input field.
 * @param {Number} [props.rows=2] Number of lines if it is a multiline input field.
 * @param {String} [props.styled="standard"] User input field style type.
 * "fill" | "outline" | "standard"(default) | "underline"
 * @param {String} [props.type="text"] Field type of user input field element.
 * "email" | "password" | "reset" | "search" | "submit" | "text"(default) | "textarea"
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/input#input_types}
 * @param {Object} [props.validity={}] Object containing information for validating user input field values.
 * @param {String} [props.value] Value of the user input field element.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created user input field controller element(JSX element).
 */
const Input = React.forwardRef((props, forwardedRef) => {
  const { children, className, error, styled = "outline", ...propsEC } = props
  const { helper, label, type = "text", ...propsField } = propsEC

  if (type === "reset" || type === "submit") {
    return (
      <InputController
        {...{ children, className, disabled: propsField.disabled, styled }}
      >
        <Button {...{ styled, type }}>{propsField.value || label}</Button>
      </InputController>
    )
  }

  const childrenController = []
  const childrenContainer = []
  const refController = React.useRef()
  const refHelper = React.useRef()

  propsField.key = "InputText"
  forwardedRef && (propsField.ref = forwardedRef)
  propsField.refHelper = refHelper
  propsField.refController = refController
  propsField.type = type
  childrenContainer.push(<InputText {...propsField} />)

  if (styled === "outline" || styled === "standard") {
    const propsFieldSet = { key: "FieldSet", label }
    childrenContainer.push(<InputFieldSet {...propsFieldSet} />)
  }

  const propsLabel = { label, id: propsField.id, key: "Label" }
  childrenController.push(<InputLabel {...propsLabel} />)

  const propsContainer = { children: childrenContainer, key: "Container" }
  childrenController.push(<InputContainer {...propsContainer} />)

  const propsHelper = { children: helper, key: "Helper", ref: refHelper }
  childrenController.push(<InputHelper {...propsHelper} />)

  if (children) {
    if (React.isValidElement(children)) {
      if (children.props?.position === "start") {
        childrenController.unshift(children)
      } else {
        childrenController.push(children)
      }
    } else {
      childrenController.push(<Box key="Children">{children}</Box>)
    }
  }

  const propsController = { className, error, styled }
  propsController.children = childrenController
  propsController.defaultValue = propsField.defaultValue
  propsController.disabled = propsField.disabled
  propsController.readOnly = propsField.readOnly
  propsController.ref = refController
  propsController.value = propsField.value

  return <InputController {...propsController} />
})
Input.displayName = "Input"
Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helper: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  styled: PropTypes.oneOf(["fill", "outline", "standard", "underline"]),
  type: PropTypes.oneOf([
    "email",
    "password",
    "reset",
    "search",
    "submit",
    "text",
    "textarea",
  ]),
  validity: PropTypes.object,
  value: PropTypes.string,
}

export { Input }
