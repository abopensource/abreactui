import PropTypes from "prop-types"

import { createElement, log, style } from "../"

/**
 * Returns after created the helper element(JSX element) for user input field element.
 *
 * @module InputFieldSet
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {String} [Props.label=""] Label string for user input field element.
 * @returns {import("react").ReactElement} Returns the created fieldset element(JSX element) for user input field element.
 */
const InputFieldSet = (Props) => {
  const { debug = false, label = "" } = Props
  if (debug) {
    const _tag = `[${log._tag}][InputFieldSet]`
    log.debug(`${_tag}() Props: %o`, Props)
  }

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
InputFieldSet.propTypes = { debug: PropTypes.bool, label: PropTypes.string }

export { InputFieldSet }
