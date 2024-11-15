import PropTypes from "prop-types"
import React from "react"

import { createElement, styleText } from "../"

/**
 * Returns after created a text element(JSX element).
 *
 * @module Text
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the text element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the text element to be created.
 * @param {String} [props.tag="span"] HTML tag to use for the text element to be created.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created text element(JSX element).
 */
const Text = React.forwardRef(function Text(props, ref) {
  const { children, className, tag, ...propsOther } = props

  const styles = [styleText.Text]
  className && styles.push(className)

  const propsText = { ...propsOther, className: styles.join(" ") }
  ref && (propsText.ref = ref)

  return createElement({ children, props: propsText, tag: tag ? tag : "span" })
})
Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Text }
