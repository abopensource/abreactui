import PropTypes from "prop-types"
import React from "react"

import { createElement, log, style } from "../"

/**
 * Returns after created a section element(JSX element).
 *
 * @module Section
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {String} [Props.align] Align content horizontally.
 * "center" | "left"(default) | "right"
 * @param {import("react").ReactNode} [Props.children] Child nodes to include in the section element to be created.
 * @param {String} [Props.className] Stylesheet class name to apply to the section element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {String} [Props.tag="section"] HTML tag to use for the section element to be created.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created section element(JSX element).
 */
const Section = React.forwardRef((Props, forwardedRef) => {
  const {
    align,
    children,
    className,
    debug = false,
    tag = "section",
    ...propsOther
  } = Props
  if (debug) {
    const _tag = `[${log._tag}][Section]`
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const styles = [style.Section]
  align && styles.push(style[align[0].toUpperCase() + align.slice(1)])
  className && styles.push(className)

  const props = { ...propsOther, className: styles.join(" ") }
  forwardedRef && (props.ref = forwardedRef)

  return createElement({ children, props, tag })
})
const MSection = React.memo(
  React.forwardRef((props, forwardedRef) => (
    <Section {...props} ref={forwardedRef} />
  )),
)
Section.displayName = "Section"
Section.propTypes = {
  align: PropTypes.oneOf(["center", "left", "right"]),
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
  tag: PropTypes.string,
}

export { Section, MSection }
