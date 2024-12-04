import PropTypes from "prop-types"
import React from "react"

import { createElement, log, style } from "../"

/**
 * Returns after created a box element(JSX element).
 *
 * @module Box
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {String} [Props.align] Align content horizontally.
 * "center" | "left"(default) | "right"
 * @param {import("react").ReactNode} [Props.children] Child nodes to include in the box element to be created.
 * @param {String} [Props.className] Stylesheet class name to apply to the box element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {String} [Props.tag="div"] HTML tag to use for the box element to be created.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created box element(JSX element).
 */
const Box = React.forwardRef((Props, forwardedRef) => {
  const {
    align,
    children,
    className,
    debug = false,
    tag = "div",
    ...propsOther
  } = Props
  if (debug) {
    const _tag = `[${log._tag}][Box]`
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const styles = [style.Box]
  align && styles.push(style[align[0].toUpperCase() + align.slice(1)])
  className && styles.push(className)

  const props = { ...propsOther, className: styles.join(" ") }
  forwardedRef && (props.ref = forwardedRef)

  return createElement({ children, props, tag })
})
const MBox = React.memo(
  React.forwardRef((props, forwardedRef) => (
    <Box {...props} ref={forwardedRef} />
  )),
)
Box.displayName = "Box"
Box.propTypes = {
  align: PropTypes.oneOf(["center", "left", "right"]),
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
  tag: PropTypes.string,
}

export { Box, MBox }
