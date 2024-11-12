import PropTypes from "prop-types"
import React from "react"

import { createElement, styleButton } from "../"

/**
 * Returns after created a container element(JSX element) for the ripple effect on the button element.
 *
 * @method createButtonRipple
 * @returns {import("react").ReactElement} Returns a container element(JSX element) created for the ripple effect on the button element.
 */
const createButtonRipple = () =>
  createElement({
    props: { className: styleButton.Ripple, key: "Ripple" },
    tag: "span",
  })

/**
 * Apply an event dependent ripple effect to the button element.
 *
 * @method effectButtonRipple
 * @param {import("react").SyntheticEvent} event Event that occurred on button elements.
 */
const effectButtonRipple = (event) => {
  if (!event?.target?.querySelector) return

  const eleRipple = event.target.querySelector(`.${styleButton.Ripple}`)
  if (!eleRipple) return

  const size = Math.max(eleRipple.clientWidth, eleRipple.clientHeight)
  const type = event.type

  const eleFocus = eleRipple.querySelector(`.${styleButton.Focus}`)
  eleFocus &&
    type !== "focus" &&
    type !== "mouseover" &&
    eleRipple.removeChild(eleFocus)

  if (type === "click") {
    const rectButton = eleRipple.parentNode.getBoundingClientRect()
    const eleEffect = document.createElement("span")
    eleEffect.className = styleButton[type[0].toUpperCase() + type.slice(1)]
    eleEffect.style.left = event.pageX - rectButton.x - size / 2 + "px"
    eleEffect.style.top = event.pageY - rectButton.y - size / 2 + "px"
    eleEffect.style.width = eleEffect.style.height = size + "px"
    eleRipple.appendChild(eleEffect)
    setTimeout(() => eleRipple.removeChild(eleEffect), 500)
  } else if (type === "focus" && !eleFocus) {
    const eleEffect = document.createElement("span")
    eleEffect.className = styleButton[type[0].toUpperCase() + type.slice(1)]
    eleEffect.style.left = 0 + "px"
    eleEffect.style.top = (eleRipple.clientHeight - size) / 2 + "px"
    eleEffect.style.width = eleEffect.style.height = size + "px"
    eleRipple.appendChild(eleEffect)
  }
}

/**
 * Returns after created a button element(JSX element).
 *
 * @module Button
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the button element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the button element to be created.
 * @param {Boolean} [props.disabled=false] Whether the button element is disabled.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the button element has lost focus.
 * @param {EventListener} [props.onClick] `EventListener` to execute when the button element on click.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the button element has received focus.
 * @param {EventListener} [props.onMouseOut] `EventListener` to execute when the mouse(cursor) leaves at the button element.
 * @param {EventListener} [props.onMouseOver] `EventListener` to execute when the mouse(cursor) comes over a button element.
 * @param {String} [props.styled="fill"] Button style type.
 * "fill"(default) | "outline" | "underline" | "text"
 * @param {String} [props.tag="button"] HTML tag to use for the button element to be created.
 * @param {String} [props.type="button"] Button element type.
 * "button" | "reset" | "submit"
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created button element(JSX element).
 */
const Button = React.forwardRef(function Button(props, ref) {
  const {
    children,
    className,
    disabled,
    onBlur,
    onClick,
    onFocus,
    onMouseOut,
    onMouseOver,
    styled,
    tag,
    type,
    ...otherProps
  } = props

  const eleRipple = createButtonRipple()

  const styles = []
  styleButton.Button && styles.push(styleButton.Button)
  styles.push(styled ? styled[0].toUpperCase() + styled.slice(1) : "Fill")
  disabled && styled.push("Disabled")
  className && styles.push(className)
  otherProps.className = styles.join(" ")

  disabled && (otherProps.disabled = true)

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
    effectButtonRipple(event)
    onMouseOver && onMouseOver(event)
  }

  ref && (otherProps.ref = ref)

  otherProps.type = type ? type : "button"

  return createElement({
    children: [children, eleRipple],
    props: otherProps,
    tag: tag ? tag : "button",
  })
})
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  styled: PropTypes.string,
  tag: PropTypes.string,
  type: PropTypes.string,
}

export { Button, createButtonRipple, effectButtonRipple }
