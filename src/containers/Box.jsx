import PropTypes from "prop-types"
import React from "react"

import { createElement, style } from "../"

/**
 * Returns after created a box element(JSX element).
 *
 * @module Box
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.align] Align content horizontally.
 * "center" | "left"(default) | "right"
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the box element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the box element to be created.
 * @param {String} [props.tag="div"] HTML tag to use for the box element to be created.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created box element(JSX element).
 */
const Box = React.forwardRef((props, forwardedRef) => {
  const { align, children, className, tag, ...propsOther } = props

  const styles = [style.Box]
  align && styles.push(style[align[0].toUpperCase() + align.slice(1)])
  className && styles.push(className)

  const propsBox = { ...propsOther, className: styles.join(" ") }
  forwardedRef && (propsBox.ref = forwardedRef)

  return createElement({ children, props: propsBox, tag })
})
Box.displayName = "Box"
Box.propTypes = {
  align: PropTypes.oneOf(["center", "left", "right"]),
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Box }
