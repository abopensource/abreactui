import PropTypes from "prop-types"
import React from "react"

import { createElement, styleContainer } from "../"

/**
 * Returns after created a container element(JSX element).
 *
 * @module Container
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the container element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the container element to be created.
 * @param {String} [props.tag="div"] HTML tag to use for the container element to be created.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created container element(JSX element).
 */
const Container = React.forwardRef(function Container(props, ref) {
  const { children, className, tag, ...propsOther } = props

  const styles = [styleContainer.Container]
  className && styles.push(className)

  const propsContainer = { ...propsOther, className: styles.join(" ") }
  ref && (propsContainer.ref = ref)

  return createElement({ children, props: propsContainer, tag })
})
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Container }
