import React from "react"

/**
 * Returns after creating a `React.ReactElement`(JSX element).
 *
 * @module createElement
 * @type {Function}
 * @param {React.ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {React.ReactNode} [props.children] `React.ReactNode` to include at the `React.ReactElement` that will be created.
 * @param {React.ComponentProps} [props.props] `React.ComponentProps` to apply to the `React.ReactElement` that will be created.
 * @param {String} [props.tag="div"] HTML element name to apply to the `React.ReactElement` that will be created.
 * @returns {React.ReactElement} Returns the created `React.ReactElement`(JSX element).
 */
const createElement = ({ children, props, tag }) => {
  const Tag = tag ? tag : "div"

  return React.createElement && <Tag {...props}>{children}</Tag>
}

export { createElement }
