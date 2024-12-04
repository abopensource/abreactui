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
  log,
} from "../"

/**
 * Returns after created the user input field controller element(JSX element).
 *
 * @module Input
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [Props.children] Child nodes to include in the user input field controller element to be created.
 * @param {String} [Props.className] Stylesheet class name to apply to the user input field controller element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {String|Number} [Props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [Props.disabled] Whether the user input field element is disabled.
 * @param {Boolean} [Props.error] Whether the user input value is invalid.
 * @param {String} [Props.helper] Help message for user input value.
 * @param {String} [Props.id] Identifier(`id`) attribute for the user input field element.
 * @param {String} [Props.label] Label string for user input field element.
 * @param {Number} [Props.maxRows=20] Maximum number of lines if it is a multiline input field.
 * @param {Boolean} [Props.multiline] Whether to use the `<textarea>` element as an auto-resizeable element.
 * @param {EventListener} [Props.onBlur] `EventListener` to execute when the user input field element has lost focus.
 * @param {EventListener} [Props.onChange] `EventListener` to execute when the value of the user input field element changes.
 * @param {EventListener} [Props.onFocus] `EventListener` to execute when the user input field element has received focus.
 * @param {EventListener} [Props.onKeyDown] `EventListener` to execute when keyboard input is entered into a user input field element.
 * @param {Boolean} [Props.readOnly] Whether to use the user input field element as read-only.
 * @param {Boolean} [Props.required] Whether the user input field element is the required input field.
 * @param {Number} [Props.rows=2] Number of lines if it is a multiline input field.
 * @param {String} [Props.styled="standard"] User input field style type.
 * "fill" | "outline"(default) | "standard" | "underline"
 * @param {String} [Props.type="text"] Field type of user input field element.
 * "email" | "password" | "reset" | "search" | "submit" | "text"(default) | "textarea"
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/input#input_types}
 * @param {Object} [Props.validity={}] Object containing information for validating user input field values.
 * @param {String|Number} [Props.value] Value of the user input field element.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created user input field controller element(JSX element).
 */
const Input = React.forwardRef((Props, forwardedRef) => {
  const {
    children,
    className,
    debug = false,
    error,
    helper,
    label,
    styled = "outline",
    type = "text",
    ...propsField
  } = Props
  if (debug) {
    const _tag = `[${log._tag}][Input]`
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  if (type === "reset" || type === "submit") {
    return (
      <InputController
        {...{
          children,
          className,
          debug,
          disabled: propsField.disabled,
          styled,
        }}
      >
        <Button
          {...{ debug, styled: styled === "standard" ? "fill" : styled, type }}
        >
          {propsField.value || label}
        </Button>
      </InputController>
    )
  }

  const childrenController = []
  const childrenContainer = []
  const refController = React.useRef()
  const refHelper = React.useRef()

  propsField.debug = debug
  propsField.key = "InputText"
  forwardedRef && (propsField.ref = forwardedRef)
  propsField.refController = refController
  propsField.refHelper = refHelper
  propsField.type = type
  childrenContainer.push(<InputText {...propsField} />)

  if (styled === "outline" || styled === "standard") {
    const propsFieldSet = { debug, key: "FieldSet", label }
    childrenContainer.push(<InputFieldSet {...propsFieldSet} />)
  }

  const propsLabel = { debug, id: propsField.id, key: "Label", label }
  childrenController.push(<InputLabel {...propsLabel} />)

  const propsContainer = {
    children: childrenContainer,
    debug,
    key: "Container",
  }
  childrenController.push(<InputContainer {...propsContainer} />)

  const propsHelper = { children: helper, debug, key: "Helper", ref: refHelper }
  childrenController.push(<InputHelper {...propsHelper} />)

  if (children) {
    if (React.isValidElement(children)) {
      if (children.props?.position === "start") {
        childrenController.unshift(children)
      } else {
        childrenController.push(children)
      }
    } else {
      childrenController.push(
        <Box debug={debug} key="Children">
          {children}
        </Box>,
      )
    }
  }

  const propsController = { className, error, styled }
  propsController.children = childrenController
  propsController.debug = debug
  propsController.defaultValue = propsField.defaultValue
  propsController.disabled = propsField.disabled
  propsController.readOnly = propsField.readOnly
  propsController.ref = refController
  propsController.value = propsField.value

  return <InputController {...propsController} />
})
const MInput = React.memo(
  React.forwardRef((props, forwardedRef) => (
    <Input {...props} ref={forwardedRef} />
  )),
)
Input.displayName = "Input"
Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { Input, MInput }
