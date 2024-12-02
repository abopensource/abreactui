import PropTypes from "prop-types"
import React from "react"

import { createElement, style } from "../"

/**
 * Returns after created a section element(JSX element).
 *
 * @module Section
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.align] Align content horizontally.
 * "center" | "left"(default) | "right"
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the section element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the section element to be created.
 * @param {String} [props.tag="section"] HTML tag to use for the section element to be created.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created section element(JSX element).
 */
const Section = React.forwardRef((props, forwardedRef) => {
  const { align, children, className, tag, ...propsOther } = props

  const styles = [style.Section]
  align && styles.push(style[align[0].toUpperCase() + align.slice(1)])
  className && styles.push(className)

  const propsSection = { ...propsOther, className: styles.join(" ") }
  forwardedRef && (propsSection.ref = forwardedRef)

  return createElement({
    children,
    props: propsSection,
    tag: tag ? tag : "section",
  })
})
Section.displayName = "Section"
Section.propTypes = {
  align: PropTypes.oneOf(["center", "left", "right"]),
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Section }
