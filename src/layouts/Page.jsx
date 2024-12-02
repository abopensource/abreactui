import PropTypes from "prop-types"
import React from "react"

import { createElement, style } from "../"

/**
 * Returns after created a page element(JSX element).
 *
 * @module Box
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the page element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the page element to be created.
 * @param {String} [props.tag="div"] HTML tag to use for the page element to be created.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created page element(JSX element).
 */
const Page = React.forwardRef((props, forwardedRef) => {
  const { children, className, tag, ...propsOther } = props

  const styles = [style.Page]
  className && styles.push(className)

  const propsBox = { ...propsOther, className: styles.join(" ") }
  forwardedRef && (propsBox.ref = forwardedRef)

  return createElement({ children, props: propsBox, tag })
})
Page.displayName = "Page"
Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Page }
