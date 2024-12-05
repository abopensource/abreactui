import PropTypes from "prop-types"
import React from "react"

import { createElement, log, style } from "../"

/**
 * Returns after created the label element(JSX element) for user input field element.
 *
 * @module InputLabel
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {String} [Props.label=""] Label string for user input field element.
 * @param {String} [Props.id=""] Identifier(`id`) attribute for the user input field element.
 * @returns {import("react").ReactElement} Returns the created label element(JSX element) for user input field element.
 */
const InputLabel = (Props) => {
  const { debug = false, label = "", id = "", ...propsOther } = Props
  if (debug) {
    const _tag = `[${log._tag}][InputLabel]`
    log.debug(`${_tag}() Props: %o`, Props)
  }

  const props = {
    ...propsOther,
    className: style.InputLabel,
    htmlFor: id,
  }

  if (label) {
    return createElement({ children: label, props, tag: "label" })
  } else {
    return <React.Fragment />
  }
}
InputLabel.propTypes = {
  debug: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
}

export { InputLabel }
