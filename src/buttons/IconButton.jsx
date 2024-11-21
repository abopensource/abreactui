import PropTypes from "prop-types"
import React from "react"

import { Button, style } from "../"

/**
 * Apply an event dependent ripple effect to the icon button element.
 *
 * @method effectButtonRipple
 * @param {import("react").SyntheticEvent} event Event that occurred on icon button elements.
 */
const effectButtonRipple = (event) => {
  if (!event?.target?.querySelector) return

  const eleRipple = event.target.querySelector(`.${style.Ripple}`)
  if (!eleRipple) return

  const size = Math.max(eleRipple.clientWidth, eleRipple.clientHeight)
  const type = event.type

  const eleFocus = eleRipple.querySelector(`.${style["Focus"]}`)
  eleFocus && type !== "focus" && eleRipple.removeChild(eleFocus)

  if (type === "click") {
    const rectButton = eleRipple.getBoundingClientRect()
    const eleEffect = document.createElement("span")
    eleEffect.className = style["Click"]
    eleEffect.style.left = event.clientX - rectButton.x - size / 2 + "px"
    eleEffect.style.top = event.clientY - rectButton.y - size / 2 + "px"
    eleEffect.style.width = eleEffect.style.height = size + "px"
    eleRipple.appendChild(eleEffect)
    setTimeout(() => eleRipple.removeChild(eleEffect), 500)
  } else if (type === "focus" && !eleFocus) {
    const eleEffect = document.createElement("span")
    eleEffect.className = style["Focus"]
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
 * @param {Boolean} [props.disabled] Whether the icon button element is disabled.
 * @param {String} [props.href] URL to link to when the button is clicked. If defined, `a`(`HTMLLinkElement`) will be used as the root node.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the icon button element has lost focus.
 * @param {EventListener} [props.onClick] `EventListener` to execute when the icon button element on click.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the icon button element has received focus.
 * @param {EventListener} [props.onMouseOut] `EventListener` to execute when the mouse(cursor) leaves at the icon button element.
 * @param {String} [props.styled="normal"] IconButton style type.
 * "fill" | "outline" | "normal"(default)
 * @param {String} [props.tag="button"] HTML tag to use for the icon button element to be created.
 * "a" | "button"(default)
 * @param {String} [props.type="button"] IconButton element type.
 * "button"(default) | "reset" | "submit"
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created icon button element(JSX element).
 */
const IconButton = React.forwardRef((props, forwardedRef) => {
  const { className, styled, ...propsES } = props
  const { onBlur, onClick, onFocus, onMouseOut, ...propsOther } = propsES

  const styles = [style.IconButton]
  className && styles.push(className)

  const propsButton = { ...propsOther, className: styles.join(" ") }
  forwardedRef && (propsButton.ref = forwardedRef)

  if (!styled || styled === "normal" || styled === "underline") {
    propsButton.styled = "text"
  } else {
    propsButton.styled = styled
  }

  propsButton.onBlur = (event) => {
    effectButtonRipple(event)
    onBlur && onBlur(event)
  }

  propsButton.onClick = (event) => {
    effectButtonRipple(event)
    onClick && onClick(event)
  }

  propsButton.onFocus = (event) => {
    effectButtonRipple(event)
    onFocus && onFocus(event)
  }

  propsButton.onMouseOut = (event) => {
    effectButtonRipple(event)
    onMouseOut && onMouseOut(event)
  }

  return <Button {...propsButton} />
})
IconButton.displayName = "IconButton"
IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseOut: PropTypes.func,
  styled: PropTypes.oneOf(["fill", "outline", "normal"]),
  tag: PropTypes.oneOf(["a", "button"]),
  type: PropTypes.oneOf(["button", "reset", "submit"]),
}

export { IconButton }
