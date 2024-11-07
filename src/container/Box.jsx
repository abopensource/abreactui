import PropTypes from "prop-types"
import React from "react"

import { createElement, styleBox } from "../"

/**
 * Returns after creating a box element(JSX element)
 *
 * @module Box
 * @param {React.ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {React.ReactNode} [props.children] Child nodes to include in the box element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the box element to be created.
 * @param {String} [props.tag] HTML tag to use for the box element to be created.
 * @param {React.ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {React.ForwardRefExoticComponent} Returns the created box element(JSX element).
 */
const Box = React.forwardRef(function Box(
  { children, className, tag = "div" },
  ref,
) {
  const styles = []
  styleBox.Box && styles.puth(styleBox.Box)
  className && styles.push(className)

  return createElement({
    children,
    props: { className: styles.join(" "), ref },
    tag,
  })
})
Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Box }
