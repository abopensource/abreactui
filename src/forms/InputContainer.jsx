import PropTypes from "prop-types"

import { createElement, style } from "../"

/**
 * Returns after created the container element(JSX element) for user input field element.
 *
 * @module InputContainer
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} props.children Child nodes to include in the container element.
 * @returns {import("react").ReactElement} Returns the created container element(JSX element) for user input field element.
 */
const InputContainer = (props) => {
  const { children, ...propsOther } = props

  const propsContainer = { ...propsOther, className: style.InputContainer }

  return createElement({ children, props: propsContainer })
}
InputContainer.propTypes = { children: PropTypes.node }

export { InputContainer }
