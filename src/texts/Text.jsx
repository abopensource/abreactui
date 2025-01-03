import PropTypes from "prop-types"
import React from "react"

import { createElement, log, style } from "../"

/**
 * Returns after created a heading element(JSX element).
 *
 * @module H
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [Props.children] Child nodes to include in the heading element to be created.
 * @param {String} [Props.className] Stylesheet class name to apply to the heading element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {Boolean} [Props.level=1] Heading level.
 * 1(default) | 2 | 3 | 4 | 5 | 6
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created heading element(JSX element).
 */
const H = React.forwardRef((Props, forwardedRef) => {
  const { children, className, debug = false, level = 1, ...propsOther } = Props
  if (debug) {
    const _tag = `[${log._tag}][H]`
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const tag = `h${level}`
  const styles = [style[`H${level}`]]
  className && styles.push(className)

  const props = { className: styles.join(" "), ...propsOther }
  forwardedRef && (props.ref = forwardedRef)

  return createElement({ children, props, tag })
})
H.displayName = "H"
H.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
}

/**
 * Returns after created a paragraph element(JSX element).
 *
 * @module P
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [Props.children] Child nodes to include in the paragraph element to be created.
 * @param {String} [Props.className] Stylesheet class name to apply to the paragraph element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created paragraph element(JSX element).
 */
const P = React.forwardRef((Props, forwardedRef) => {
  const { children, className, debug = false, ...propsOther } = Props
  if (debug) {
    const _tag = `[${log._tag}][P]`
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const styles = [style.P]
  className && styles.push(className)

  const props = { className: styles.join(" "), ...propsOther }
  forwardedRef && (props.ref = forwardedRef)

  return createElement({ children, props, tag: "p" })
})
P.displayName = "P"
P.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
}

/**
 * Returns after created a text element(JSX element).
 *
 * @module S
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [Props.children] Child nodes to include in the text element to be created.
 * @param {String} [Props.className] Stylesheet class name to apply to the text element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {String} [Props.tag="span"] HTML tag to use for the text element to be created.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created text element(JSX element).
 */
const S = React.forwardRef((Props, forwardedRef) => {
  const {
    children,
    className,
    debug = false,
    tag = "span",
    ...propsOther
  } = Props
  if (debug) {
    const _tag = `[${log._tag}][S]`
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const styles = [style.S]
  className && styles.push(className)

  const props = { className: styles.join(" "), ...propsOther }
  forwardedRef && (props.ref = forwardedRef)

  return createElement({ children, props, tag })
})
S.displayName = "S"
S.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
  tag: PropTypes.string,
}

export { H, P, S }
