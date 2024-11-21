import PropTypes from "prop-types"
import React from "react"

import { createElement, styleInput } from "../"

/**
 * Returns after created a container element(JSX element) for the user input field element.
 *
 * @method createContainer
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the user input field container element to be created.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns a container element(JSX element) created for the user input field element.
 */
const createContainer = (props, ref) => {
  const children = [createInput(props, ref)]

  if (!props.styled || props.styled === "outline") {
    children.push(createFieldSet(props))
  }

  if (props.children) {
    if (props.children.props?.position === "end") {
      children.push(children)
    } else {
      children.unshift(children)
    }
  }

  return createElement({
    children: children,
    props: { className: styleInput.Container, key: "Container" },
  })
}

/**
 * Returns after created a fieldset element(JSX element) for the user input field element.
 *
 * @method createFieldSet
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.label] Label string for user input field element.
 * @returns {import("react").ReactElement} Returns a fieldset element(JSX element) created for the user input field element.
 */
const createFieldSet = (props) =>
  createElement({
    children: createElement({
      children: createElement({
        children: props.label || "",
        props: { className: styleInput.Span },
        tag: "span",
      }),
      props: { className: styleInput.Legend },
      tag: "legend",
    }),
    props: { className: styleInput.FieldSet, key: "FieldSet" },
    tag: "fieldset",
  })

/**
 * Returns after created a input element(JSX element) for the user input field element.
 *
 * @method createInput
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {String} [props.id] Identifier(`id`) attribute for the user input field element.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the user input field element has lost focus.
 * @param {EventListener} [props.onChange] `EventListener` to execute when the value of the user input field element changes.
 * @param {EventListener} [props.onClick] `EventListener` to execute when the user input field element on click.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the user input field element has received focus.
 * @param {EventListener} [props.onMouseOut] `EventListener` to execute when the mouse(cursor) leaves at the user input field element.
 * @param {EventListener} [props.onMouseOver] `EventListener` to execute when the mouse(cursor) comes over the user input field element.
 * @param {String} [props.placeholder] Short hint that describes the expected value of the user input field element.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {Boolean} [props.required] Whether the user input field element is the required input field.
 * @param {Boolean} [props.required] Whether the user input field element is the required input field.
 * @param {String} [props.value] Value of the user input field element.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns a input element(JSX element) created for the user input field element.
 */
const createInput = (props, ref) => {
  const { disabled, id, readOnly, required, type, ...propsO1 } = props
  const { defaultValue, placeholder, value, ...propsO2 } = propsO1
  const { onBlur, onFocus, onMouseOut, onMouseOver, ...propsO3 } = propsO2

  const propsInput = { ...propsO3, className: styleInput.Input, key: "Input" }
  disabled && (propsInput.disabled = disabled)
  id && (propsInput.id = id)
  readOnly && (propsInput.readOnly = readOnly)
  required && (propsInput.required = required)
  propsInput.type = type || "text"

  defaultValue && (propsInput.defaultValue = defaultValue)
  placeholder && (propsInput.placeholder = placeholder)
  value && (propsInput.value = value)

  ref && (propsInput.ref = ref)

  propsInput.onBlur = (event) => {
    const eleContainer = event?.target?.parentNode?.parentNode
    eleContainer?.classList?.remove(styleInput.Focus)
    onBlur && onBlur(event)
  }

  propsInput.onFocus = (event) => {
    const eleContainer = event?.target?.parentNode?.parentNode
    eleContainer?.classList?.add(styleInput.Focus)
    onFocus && onFocus(event)
  }

  return createElement({ props: propsInput, tag: "input" })
}

/**
 * Returns after created a label element(JSX element) for the user input field element.
 *
 * @method createLabel
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.id] Identifier(`id`) attribute for the user input field element.
 * @param {String} [props.label] Label string for user input field element.
 * @returns {import("react").ReactElement} Returns a label element(JSX element) created for the user input field element.
 */
const createLabel = (props) =>
  createElement({
    children: props.label || "",
    props: {
      className: styleInput.Label,
      htmlFor: props.id || "",
      key: "Label",
    },
    tag: "label",
  })

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
 * @param {String} [props.label] Label string for user input field element.
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
  const { className, disabled, label, readOnly, styled } = props

  const styles = [styleInput.InputController]
  const style = styled ? styled[0].toUpperCase() + styled.slice(1) : "Outline"
  styles.push(styleInput[style])
  readOnly && styles.push(styleInput.ReadOnly)
  disabled && styles.push(styleInput.Disabled)
  className && styles.push(className)

  const children = [createContainer(props, ref)]
  label && children.unshife(createLabel(props))

  return createElement({
    children: children,
    props: { className: styles.join(" ") },
  })
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
