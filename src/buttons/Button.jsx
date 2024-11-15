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
 * Returns after created a container element(JSX element) for the icon node on the button element.
 *
 * @method createIcon
 * @param {import("react").ReactNode} nodeIcon `ReactNode` to use as the icon for the button element.
 * @param {String} key Unique `key`(`ComponentProps`) to use for the container element to be created.
 * @returns {import("react").ReactElement} Returns a container element(JSX element) created for the icon node on the button element.
 */
const createIcon = (nodeIcon, key = "Icon") =>
  createElement({
    children: nodeIcon,
    props: { className: `${styleButton.Icon} ${styleButton[key]}`, key },
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
 * Returns after created a button element(JSX element).
 *
 * @module Button
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the button element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the button element to be created.
 * @param {Boolean} [props.disabled] Whether the button element is disabled.
 * @param {String} [props.href] URL to link to when the button is clicked. If defined, `a`(`HTMLLinkElement`) will be used as the root node.
 * @param {import("react").ReactNode} [props.iconEnd] Icon element placed after the `children`.
 * @param {import("react").ReactNode} [props.iconStart] Icon element placed before the `children`.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the button element has lost focus.
 * @param {EventListener} [props.onClick] `EventListener` to execute when the button element on click.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the button element has received focus.
 * @param {EventListener} [props.onMouseOut] `EventListener` to execute when the mouse(cursor) leaves at the button element.
 * @param {String} [props.styled="fill"] Button style type.
 * "fill"(default) | "outline" | "underline" | "text"
 * @param {String} [props.tag="button"] HTML tag to use for the button element to be created.
 * @param {String} [props.type="button"] Button element type.
 * "button" | "reset" | "submit"
 * @param {import("react").ForwardedRef} [ref] Object or function for use by referencing a component that will be created from a parent component.
 * @returns {import("react").ReactElement} Returns the created button element(JSX element).
 */
const Button = React.forwardRef(function Button(props, ref) {
  const { children, iconEnd, iconStart, ...propsO1 } = props
  const { className, disabled, href, styled, tag, type, ...propsO2 } = propsO1
  const { onBlur, onClick, onFocus, onMouseOut, ...propsO3 } = propsO2

  const nodeChildren = [children]
  iconEnd && nodeChildren.push(createIcon(iconEnd, "IconEnd"))
  iconStart && nodeChildren.unshift(createIcon(iconStart, "IconStart"))
  nodeChildren.push(createButtonRipple())

  const styles = [styleButton.Button]
  const style = styled ? styled[0].toUpperCase() + styled.slice(1) : "Fill"
  styles.push(styleButton[style])
  disabled && styles.push(styleButton["Disabled"])
  className && styles.push(className)

  const propsButton = { ...propsO3, className: styles.join(" ") }
  disabled && (propsButton.disabled = true)
  href && (propsButton.href = href)
  ref && (propsButton.ref = ref)
  propsButton.type = type ? type : "button"

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

  return createElement({
    children: nodeChildren,
    props: propsButton,
    tag:
      tag ? tag
      : href ? "a"
      : "button",
  })
})
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  iconEnd: PropTypes.node,
  iconStart: PropTypes.node,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onMouseOut: PropTypes.func,
  styled: PropTypes.oneOf(["fill", "outline", "underline", "text"]),
  tag: PropTypes.string,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
}

export { Button }
