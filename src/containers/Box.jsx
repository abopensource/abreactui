import PropTypes from "prop-types"
import React from "react"

import { createElement, styles } from "../"

/**
 * Returns after created a box element(JSX element).
 *
 * @module Box
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the box element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the box element to be created.
 * @param {String} [props.tag="div"] HTML tag to use for the box element to be created.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created box element(JSX element).
 */
const Box = React.forwardRef((props, forwardedRef) => {
  const { children, className, tag, ...propsOther } = props

  const style = [styles.Box]
  className && style.push(className)

  const propsBox = { ...propsOther, className: style.join(" ") }
  forwardedRef && (propsBox.ref = forwardedRef)

  return createElement({ children, props: propsBox, tag })
})
Box.displayName = "Box"
Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Box }
