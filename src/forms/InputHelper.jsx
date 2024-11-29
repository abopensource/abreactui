import PropTypes from "prop-types"
import React from "react"

import { createElement, style } from "../"

/**
 * Returns after created the helper element(JSX element) for user input field element.
 *
 * @module InputHelper
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} props.children Child nodes to include in the helper element.
 * @param {String} [props.tag="p"] HTML tag to use for the helper element to be created.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created helper element(JSX element) for user input field element.
 */
const InputHelper = React.forwardRef((props, forwardedRef) => {
  const { children, tag = "p", ...propsOther } = props

  const [message, setMessage] = React.useState(children)
  const refHelper = React.useRef()

  const propsHelper = { ...propsOther, className: style.InputHelper }
  if (forwardedRef) {
    propsHelper.ref = refHelper
    React.useImperativeHandle(forwardedRef, () => ({
      setHelper: (message) => setMessage(message),
    }))
  }

  if (message) {
    return createElement({ children: message, props: propsHelper, tag })
  } else {
    return <React.Fragment />
  }
})
InputHelper.displayName = "InputHelper"
InputHelper.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
}

export { InputHelper }
