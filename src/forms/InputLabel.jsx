import PropTypes from "prop-types"
import React from "react"

import { createElement, style } from "../"

/**
 * Returns after created the label element(JSX element) for user input field element.
 *
 * @module InputLabel
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.label=""] Label string for user input field element.
 * @param {String} [props.id=""] Identifier(`id`) attribute for the user input field element.
 * @returns {import("react").ReactElement} Returns the created label element(JSX element) for user input field element.
 */
const InputLabel = (props) => {
  const { label = "", id = "", ...propsOther } = props

  const propsLabel = { ...propsOther, className: style.InputLabel, htmlFor: id }

  if (label) {
    return createElement({ children: label, props: propsLabel, tag: "label" })
  } else {
    return <React.Fragment />
  }
}
InputLabel.propTypes = { label: PropTypes.string, id: PropTypes.string }

export { InputLabel }
