import PropTypes from "prop-types"
import React from "react"

import { createElement, style } from "../"

/**
 * Returns after created the controller element(JSX element) for user input field element.
 *
 * @module InputController
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} props.children Child nodes to include in the controller element.
 * @param {String} [props.className] Stylesheet class name to apply to the user input field controller element to be created.
 * @param {String|Number} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {Boolean} [props.error] Whether the user input value is invalid.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {String} [props.styled="standard"] User input field style type.
 * "fill" | "outline" | "standard"(default) | "underline"
 * @param {String|Number} [props.value] Value of the user input field element.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created controller element(JSX element) for user input field element.
 */
const InputController = React.forwardRef((props, forwardedRef) => {
  const { children, ...propsEC } = props
  const { className, error = false, styled = "outline", ...propsES } = propsEC
  const { defaultValue, disabled, readOnly, value, ...propsIC } = propsES

  const styles = [style.InputController]
  styled && styles.push(style[styled[0].toUpperCase() + styled.slice(1)])
  if (String(defaultValue)?.length || String(value)?.length) {
    styles.push(style.Filled)
  }
  readOnly && styles.push(style.ReadOnly)
  disabled && styles.push(style.Disabled)
  error && styles.push(style.Error)
  className && styles.push(className)

  propsIC.className = styles.join(" ")
  forwardedRef && (propsIC.ref = forwardedRef)

  return createElement({ children, props: propsIC })
})
InputController.displayName = "InputController"
InputController.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  styled: PropTypes.oneOf(["fill", "outline", "standard", "underline"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { InputController }
