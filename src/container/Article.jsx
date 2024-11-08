import PropTypes from "prop-types"
import React from "react"

import { createElement, styleArticle } from "../"

/**
 * Returns after creating a article element(JSX element)
 *
 * @module Article
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the article element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the article element to be created.
 * @param {String} [props.tag="div"] HTML tag to use for the article element to be created.
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created article element(JSX element).
 */
const Article = React.forwardRef(function Article(props, ref) {
  const { children, className, tag, ...otherProps } = props

  const styles = []
  styleArticle.Article && styles.push(styleArticle.Article)
  className && styles.push(className)
  otherProps.className = styles.join(" ")

  ref && (otherProps.ref = ref)

  return createElement({
    children,
    props: otherProps,
    tag: tag ? tag : "article",
  })
})
Article.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Article }
