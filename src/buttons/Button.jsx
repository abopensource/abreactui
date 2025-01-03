import PropTypes from "prop-types"
import React from "react"

import { createElement, log, style } from "../"

/**
 * Returns after created a container element(JSX element) for the ripple effect on the button element.
 *
 * @function createButtonRipple
 * @returns {import("react").ReactElement} Returns a container element(JSX element) created for the ripple effect on the button element.
 */
const createButtonRipple = () =>
  createElement({
    props: { className: style.Ripple, key: "Ripple" },
    tag: "span",
  })

/**
 * Returns after created a container element(JSX element) for the icon node on the button element.
 *
 * @function createIcon
 * @param {import("react").ReactNode} nodeIcon `ReactNode` to use as the icon for the button element.
 * @param {String} [key="Icon"] Unique `key`(`ComponentProps`) to use for the container element to be created.
 * @returns {import("react").ReactElement} Returns a container element(JSX element) created for the icon node on the button element.
 */
const createIcon = (nodeIcon, key = "Icon") =>
  createElement({
    children: nodeIcon,
    props: { className: `${style.Icon} ${style[key]}`, key },
    tag: "span",
  })

/**
 * Apply an event dependent ripple effect to the button element.
 *
 * @function effectButtonRipple
 * @param {import("react").SyntheticEvent} event Event that occurred on button elements.
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
 * Returns after created a button element(JSX element).
 *
 * @module Button
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [Props.children] Child nodes to include in the button element to be created.
 * @param {String} [Props.className] Stylesheet class name to apply to the button element to be created.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {Boolean} [Props.disabled] Whether the button element is disabled.
 * @param {String} [Props.href] URL to link to when the button is clicked. If defined, `a`(`HTMLLinkElement`) will be used as the root node.
 * @param {import("react").ReactNode} [Props.iconEnd] Icon element placed after the `children`.
 * @param {import("react").ReactNode} [Props.iconStart] Icon element placed before the `children`.
 * @param {EventListener} [Props.onBlur] `EventListener` to execute when the button element has lost focus.
 * @param {EventListener} [Props.onClick] `EventListener` to execute when the button element on click.
 * @param {EventListener} [Props.onFocus] `EventListener` to execute when the button element has received focus.
 * @param {EventListener} [Props.onMouseOut] `EventListener` to execute when the mouse(cursor) leaves at the button element.
 * @param {String} [Props.styled="fill"] Button style type.
 * "fill"(default) | "outline" | "underline" | "text"
 * @param {String} [Props.tag="button"] HTML tag to use for the button element to be created.
 * "a" | "button"(default)
 * @param {String} [Props.type="button"] Button element type.
 * "button"(default) | "reset" | "submit"
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created button element(JSX element).
 */
const Button = React.forwardRef((Props, forwardedRef) => {
  const {
    children,
    className,
    debug = false,
    disabled,
    href,
    iconEnd,
    iconStart,
    onBlur,
    onClick,
    onFocus,
    onMouseOut,
    styled = "fill",
    tag = "button",
    type = "button",
    ...propsOther
  } = Props
  const _tag = `[${log._tag}][Button]`
  if (debug) {
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const childrenButton = [children]
  iconEnd && childrenButton.push(createIcon(iconEnd, "IconEnd"))
  iconStart && childrenButton.unshift(createIcon(iconStart, "IconStart"))
  childrenButton.push(createButtonRipple())

  const styles = [style.Button]
  styles.push(style[styled[0].toUpperCase() + styled.slice(1)])
  disabled && styles.push(style["Disabled"])
  className && styles.push(className)

  const props = { ...propsOther, className: styles.join(" ") }
  disabled && (props.disabled = true)
  href && (props.href = href)
  forwardedRef && (props.ref = forwardedRef)
  props.type = type

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

  return createElement({
    children: childrenButton,
    props,
    tag: href ? "a" : tag,
  })
})
Button.displayName = "Button"
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  debug: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  iconEnd: PropTypes.node,
  iconStart: PropTypes.node,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseOut: PropTypes.func,
  styled: PropTypes.oneOf(["fill", "outline", "underline", "text"]),
  tag: PropTypes.oneOf(["a", "button"]),
  type: PropTypes.oneOf(["button", "reset", "submit"]),
}

export { Button }
