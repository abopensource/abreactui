import PropTypes from "prop-types"
import React from "react"

import { createElement, styleInput } from "../"

/**
 * Returns after created the user input field control element(JSX element).
 *
 * @module Input
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.autoComplete] `autocomplete` attribute for user input text field element.
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete}
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the user input field control element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the user input field control element to be created.
 * @param {String} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {String} [props.id] Identifier(`id`) attribute for the user input field element.
 * @param {String} [props.label] Label string for user input field.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the user input field element has lost focus.
 * @param {EventListener} [props.onChange] `EventListener` to execute when the value of the user input field element changes.
 * @param {EventListener} [props.onClick] `EventListener` to execute when the user input field element on click.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the user input field element has received focus.
 * @param {EventListener} [props.onMouseOut] `EventListener` to execute when the mouse(cursor) leaves at the user input field element.
 * @param {EventListener} [props.onMouseOver] `EventListener` to execute when the mouse(cursor) comes over the user input field element.
 * @param {String} [props.placeholder] Short hint that describes the expected value of the user input field element.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {Boolean} [props.required] Whether the user input field element is the required input field.
 * @param {String} [props.styled="outline"] User input field style type.
 * "fill" | "outline"(default) | "underline"
 * @param {String} [props.type="text"] Field type of user input field element.
 * "password" | "text"(default)
 * @param {String} [props.value] Value of the user input field element.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created user input field control element(JSX element).
 */
const Input = React.forwardRef(function Input(props, ref) {
  const {
    children,
    className,
    disabled,
    id,
    label,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onMouseOut,
    onMouseOver,
    readOnly,
    styled,
    ...propsInput
  } = props

  const childrenCtrl = []

  // label element
  if (label) {
    const propsLabel = { className: styleInput.Label, key: "Label" }
    id && (propsLabel.htmlFor = id)

    const eleLabel = createElement({
      children: label,
      props: propsLabel,
      tag: "label",
    })

    childrenCtrl.push(eleLabel)
  }

  // input element
  propsInput.className = styleInput.Input
  disabled && (propsInput.disabled = disabled)
  id && (propsInput.id = id)
  propsInput.key = "Input"
  readOnly && (propsInput.readOnly = readOnly)
  ref && (propsInput.ref = ref)
  !propsInput.type && (propsInput.type = "text")

  propsInput.onBlur = (event) => {
    const eleContainer = event?.target?.parentNode?.parentNode
    eleContainer?.classList?.remove(styleInput.Focus)
    onBlur && onBlur(event)
  }

  propsInput.onChange = (event) => {
    onChange && onChange(event)
  }

  propsInput.onClick = (event) => {
    onClick && onClick(event)
  }

  propsInput.onFocus = (event) => {
    const eleContainer = event?.target?.parentNode?.parentNode
    eleContainer?.classList?.add(styleInput.Focus)
    onFocus && onFocus(event)
  }

  propsInput.onMouseOver = (event) => {
    onMouseOver && onMouseOver(event)
  }

  propsInput.onMouseOut = (event) => {
    onMouseOut && onMouseOut(event)
  }

  const eleInput = createElement({ props: propsInput, tag: "input" })

  // container element
  const childrenCont = [eleInput]
  if (children) {
    if (children.props?.position === "end") {
      childrenCont.push(children)
    } else {
      childrenCont.unshift(children)
    }
  }

  const eleContainer = createElement({
    children: childrenCont,
    props: { className: styleInput.Container, key: "Container" },
  })

  childrenCtrl.push(eleContainer)

  // controller element
  const styles = [styleInput.InputController]
  const style = styled ? styled[0].toUpperCase() + styled.slice(1) : "Outline"
  styles.push(styleInput[style])
  disabled && styles.push(styleInput.Disabled)
  className && styles.push(className)

  const eleController = createElement({
    children: childrenCtrl,
    props: { className: styles.join(" ") },
  })

  return eleController
})
Input.propTypes = {
  autoComplete: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  styled: PropTypes.oneOf(["fill", "outline", "underline"]),
  type: PropTypes.oneOf(["password", "text"]),
  value: PropTypes.string,
}

export { Input }
