import PropTypes from "prop-types"

import { createElement, style } from "../"

/**
 * Returns after created the helper element(JSX element) for user input field element.
 *
 * @module InputFieldSet
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.label=""] Label string for user input field element.
 * @returns {import("react").ReactElement} Returns the created fieldset element(JSX element) for user input field element.
 */
const InputFieldSet = (props) => {
  const { label = "" } = props

  return createElement({
    children: createElement({
      children: createElement({
        children: label,
        props: { className: style.Span },
        tag: "span",
      }),
      props: { className: style.Legend },
      tag: "legend",
    }),
    props: { className: style.FieldSet },
    tag: "fieldset",
  })
}
InputFieldSet.propTypes = { label: PropTypes.string }

export { InputFieldSet }
