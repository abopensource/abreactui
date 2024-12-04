import PropTypes from "prop-types"
import React from "react"

import { createElement, log, style } from "../"

/**
 * Returns after created the helper element(JSX element) for user input field element.
 *
 * @module InputHelper
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} Props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} Props.children Child nodes to include in the helper element.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {String} [Props.tag="p"] HTML tag to use for the helper element to be created.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created helper element(JSX element) for user input field element.
 */
const InputHelper = React.forwardRef((Props, forwardedRef) => {
  const { children, debug = false, tag = "p", ...propsOther } = Props
  if (debug) {
    const _tag = `[${log._tag}][InputHelper]`
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const [message, setMessage] = React.useState(children)
  const refHelper = React.useRef()

  const props = { ...propsOther, className: style.InputHelper }
  if (forwardedRef) {
    props.ref = refHelper
    React.useImperativeHandle(forwardedRef, () => ({
      setHelper: (message) => setMessage(message),
    }))
  }

  if (message) {
    return createElement({ children: message, props, tag })
  } else {
    return <React.Fragment />
  }
})
const MInputHelper = React.memo(
  React.forwardRef((props, forwardedRef) => (
    <InputHelper {...props} ref={forwardedRef} />
  )),
)
InputHelper.displayName = "InputHelper"
InputHelper.propTypes = {
  children: PropTypes.node,
  debug: PropTypes.bool,
  tag: PropTypes.string,
}

export { InputHelper, MInputHelper }
