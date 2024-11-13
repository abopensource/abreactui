import PropTypes from "prop-types"
import React from "react"

import { Button, styleButton } from "../"

/**
 * Apply an event dependent ripple effect to the icon button element.
 *
 * @method effectButtonRipple
 * @param {import("react").SyntheticEvent} event Event that occurred on icon button elements.
 */
const effectButtonRipple = (event) => {
  if (!event?.target?.querySelector) return

  const eleRipple = event.target.querySelector(`.${styleButton.Ripple}`)
  if (!eleRipple) return

  const size = Math.max(eleRipple.clientWidth, eleRipple.clientHeight)
  const type = event.type

  const eleFocus = eleRipple.querySelector(`.${styleButton["Focus"]}`)
  eleFocus && type !== "focus" && eleRipple.removeChild(eleFocus)

  if (type === "click") {
    const rectButton = eleRipple.getBoundingClientRect()
    const eleEffect = document.createElement("span")
    eleEffect.className = styleButton["Click"]
    eleEffect.style.left = event.clientX - rectButton.x - size / 2 + "px"
    eleEffect.style.top = event.clientY - rectButton.y - size / 2 + "px"
    eleEffect.style.width = eleEffect.style.height = size + "px"
    eleRipple.appendChild(eleEffect)
    setTimeout(() => eleRipple.removeChild(eleEffect), 500)
  } else if (type === "focus" && !eleFocus) {
    const eleEffect = document.createElement("span")
    eleEffect.className = styleButton["Focus"]
    eleEffect.style.left = 0 + "px"
    eleEffect.style.top = (eleRipple.clientHeight - size) / 2 + "px"
    eleEffect.style.width = eleEffect.style.height = size + "px"
    eleRipple.appendChild(eleEffect)
  }
}

/**
 * Returns after created a icon button element(JSX element).
 *
 * @module IconButton
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the icon button element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the icon button element to be created.
 * @param {Boolean} [props.disabled=false] Whether the icon button element is disabled.
 * @param {String} [props.href] URL to link to when the button is clicked. If defined, `a`(`HTMLLinkElement`) will be used as the root node.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the icon button element has lost focus.
 * @param {EventListener} [props.onClick] `EventListener` to execute when the icon button element on click.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the icon button element has received focus.
 * @param {EventListener} [props.onMouseOut] `EventListener` to execute when the mouse(cursor) leaves at the icon button element.
 * @param {EventListener} [props.onMouseOver] `EventListener` to execute when the mouse(cursor) comes over a icon button element.
 * @param {String} [props.styled="fill"] IconButton style type.
 * "fill" | "outline" | "normal"(default)
 * @param {String} [props.tag="button"] HTML tag to use for the icon button element to be created.
 * @param {String} [props.type="button"] IconButton element type.
 * "button" | "reset" | "submit"
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created icon button element(JSX element).
 */
const IconButton = React.forwardRef(function IconButton(props, ref) {
  const {
    className,
    onBlur,
    onClick,
    onFocus,
    onMouseOut,
    onMouseOver,
    styled,
    ...otherProps
  } = props

  const styles = [styleButton.IconButton]
  className && styles.push(className)
  otherProps.className = styles.join(" ")

  otherProps.onBlur = (event) => {
    effectButtonRipple(event)
    onBlur && onBlur(event)
  }

  otherProps.onClick = (event) => {
    effectButtonRipple(event)
    onClick && onClick(event)
  }

  otherProps.onFocus = (event) => {
    effectButtonRipple(event)
    onFocus && onFocus(event)
  }

  otherProps.onMouseOut = (event) => {
    effectButtonRipple(event)
    onMouseOut && onMouseOut(event)
  }

  otherProps.onMouseOver = (event) => {
    onMouseOver && onMouseOver(event)
  }

  if (!styled || styled === "normal" || styled === "underline") {
    otherProps.styled = "text"
  } else {
    otherProps.styled = styled
  }

  ref && (otherProps.ref = ref)

  return <Button {...otherProps} />
})
IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  styled: PropTypes.string,
  tag: PropTypes.string,
  type: PropTypes.string,
}

export { IconButton }
