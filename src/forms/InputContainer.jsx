import PropTypes from "prop-types"

import { createElement, log, style } from "../"

/**
 * Returns after created the container element(JSX element) for user input field element.
 *
 * @module InputContainer
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} Props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} Props.children Child nodes to include in the container element.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @returns {import("react").ReactElement} Returns the created container element(JSX element) for user input field element.
 */
const InputContainer = (Props) => {
  const { children, debug = false, ...propsOther } = Props
  if (debug) {
    const _tag = `[${log._tag}][InputContainer]`
    log.debug(`${_tag}() Props: %o`, Props)
  }

  const props = { ...propsOther, className: style.InputContainer }

  return createElement({ children, props })
}
InputContainer.propTypes = { children: PropTypes.node, debug: PropTypes.bool }

export { InputContainer }
