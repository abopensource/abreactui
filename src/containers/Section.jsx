import PropTypes from "prop-types"
import React from "react"

import { createElement, styleSection } from "../"

/**
 * Returns after created a section element(JSX element).
 *
 * @module Section
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the section element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the section element to be created.
 * @param {String} [props.tag="section"] HTML tag to use for the section element to be created.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created section element(JSX element).
 */
const Section = React.forwardRef(function Section(props, ref) {
  const { children, className, tag, ...otherProps } = props

  const styles = []
  styleSection.Section && styles.push(styleSection.Section)
  className && styles.push(className)
  otherProps.className = styles.join(" ")

  ref && (otherProps.ref = ref)

  return createElement({
    children,
    props: otherProps,
    tag: tag ? tag : "section",
  })
})
Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Section }
