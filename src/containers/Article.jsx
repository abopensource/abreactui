import PropTypes from "prop-types"
import React from "react"

import { createElement, style } from "../"

/**
 * Returns after created a article element(JSX element).
 *
 * @module Article
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the article element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the article element to be created.
 * @param {String} [props.tag="article"] HTML tag to use for the article element to be created.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created article element(JSX element).
 */
const Article = React.forwardRef((props, forwardedRef) => {
  const { children, className, tag, ...propsOther } = props

  const styles = [style.Article]
  className && styles.push(className)

  const propsArticle = { ...propsOther, className: styles.join(" ") }
  forwardedRef && (propsArticle.ref = forwardedRef)

  return createElement({
    children,
    props: propsArticle,
    tag: tag ? tag : "article",
  })
})
Article.displayName = "Article"
Article.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
}

export { Article }
