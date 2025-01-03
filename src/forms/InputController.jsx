import PropTypes from "prop-types"
import React from "react"

import { createElement, log, style } from "../"

/**
 * Returns after created the controller element(JSX element) for user input field element.
 *
 * @module InputController
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} Props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} Props.children Child nodes to include in the controller element.
 * @param {String} [Props.className] Stylesheet class name to apply to the user input field controller element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {String|Number} [Props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [Props.disabled] Whether the user input field element is disabled.
 * @param {Boolean} [Props.error] Whether the user input value is invalid.
 * @param {Boolean} [Props.readOnly] Whether to use the user input field element as read-only.
 * @param {String} [Props.styled="standard"] User input field style type.
 * "fill" | "outline"(default) | "standard" | "underline"
 * @param {String|Number} [Props.value] Value of the user input field element.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created controller element(JSX element) for user input field element.
 */
const InputController = React.forwardRef((Props, forwardedRef) => {
  const {
    children,
    className,
    debug = false,
    defaultValue,
    disabled,
    error = false,
    readOnly,
    styled = "outline",
    value,
    ...propsOther
  } = Props
  if (debug) {
    const _tag = `[${log._tag}][InputController]`
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const styles = [style.InputController]
  styled && styles.push(style[styled[0].toUpperCase() + styled.slice(1)])
  if (defaultValue?.length || value?.length) {
    styles.push(style.Filled)
  }
  readOnly && styles.push(style.ReadOnly)
  disabled && styles.push(style.Disabled)
  error && styles.push(style.Error)
  className && styles.push(className)

  const props = { className: styles.join(" "), ...propsOther }
  forwardedRef && (props.ref = forwardedRef)

  return createElement({ children, props })
})
InputController.displayName = "InputController"
InputController.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  readOnly: PropTypes.bool,
  styled: PropTypes.oneOf(["fill", "outline", "standard", "underline"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { InputController }
