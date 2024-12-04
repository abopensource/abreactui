import PropTypes from "prop-types"
import React from "react"

import { Button, log, style } from "../"

/**
 * Apply an event dependent ripple effect to the icon button element.
 *
 * @function effectButtonRipple
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
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [Props.children] Child nodes to include in the icon button element to be created.
 * @param {String} [Props.className] Stylesheet class name to apply to the icon button element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {Boolean} [Props.disabled] Whether the icon button element is disabled.
 * @param {String} [Props.href] URL to link to when the button is clicked. If defined, `a`(`HTMLLinkElement`) will be used as the root node.
 * @param {EventListener} [Props.onBlur] `EventListener` to execute when the icon button element has lost focus.
 * @param {EventListener} [Props.onClick] `EventListener` to execute when the icon button element on click.
 * @param {EventListener} [Props.onFocus] `EventListener` to execute when the icon button element has received focus.
 * @param {EventListener} [Props.onMouseOut] `EventListener` to execute when the mouse(cursor) leaves at the icon button element.
 * @param {String} [Props.styled="normal"] IconButton style type.
 * "fill" | "outline" | "normal"(default)
 * @param {String} [Props.tag="button"] HTML tag to use for the icon button element to be created.
 * "a" | "button"(default)
 * @param {String} [Props.type="button"] IconButton element type.
 * "button"(default) | "reset" | "submit"
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created icon button element(JSX element).
 */
const IconButton = React.forwardRef((Props, forwardedRef) => {
  const {
    className,
    debug = false,
    onBlur,
    onClick,
    onFocus,
    onMouseOut,
    styled,
    ...propsOther
  } = Props
  const _tag = `[${log._tag}][IconButton]`
  if (debug) {
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const styles = [style.IconButton]
  className && styles.push(className)

  const props = { ...propsOther, className: styles.join(" ") }
  forwardedRef && (props.ref = forwardedRef)

  if (!styled || styled === "normal" || styled === "underline") {
    props.styled = "text"
  } else {
    props.styled = styled
  }

  props.onBlur = (event) => {
    debug && log.debug(`${_tag} onBlur event: %o`, event)

    effectButtonRipple(event)
    onBlur && onBlur(event)
  }

  props.onClick = (event) => {
    debug && log.debug(`${_tag} onClick event: %o`, event)

    effectButtonRipple(event)
    onClick && onClick(event)
  }

  props.onFocus = (event) => {
    debug && log.debug(`${_tag} onFocus event: %o`, event)

    effectButtonRipple(event)
    onFocus && onFocus(event)
  }

  props.onMouseOut = (event) => {
    debug && log.debug(`${_tag} onMouseOut event: %o`, event)

    effectButtonRipple(event)
    onMouseOut && onMouseOut(event)
  }

  return <Button {...props} />
})
const MIconButton = React.memo(
  React.forwardRef((props, forwardedRef) => (
    <IconButton {...props} ref={forwardedRef} />
  )),
)
IconButton.displayName = "IconButton"
IconButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
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

export { IconButton, MIconButton }
