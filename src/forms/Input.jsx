import PropTypes from "prop-types"
import React from "react"
import { IoMdClose, IoMdEye, IoMdEyeOff } from "react-icons/io"

import { Box, createElement, IconButton, style } from "../"

/**
 * Returns after created the container element(JSX element) for user input field element.
 *
 * @module Container
 * @param {import("react").ComponentProps} props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} props.children Child nodes to include in the container element.
 * @returns {import("react").ReactElement} Returns the created container element(JSX element) for user input field element.
 */
const Container = (props) => {
  const { children } = props

  return createElement({ children, props: { className: style.Container } })
}

/**
 * Returns after created the controller element(JSX element) for user input field element.
 *
 * @module Controller
 * @param {import("react").ComponentProps} props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} props.children Child nodes to include in the controller element.
 * @param {String} [props.className] Stylesheet class name to apply to the user input field controller element to be created.
 * @param {String} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {String} [props.styled="outline"] User input field style type.
 * "fill" | "outline"(default) | "underline"
 * @param {String} [props.value] Value of the user input field element.
 * @returns {import("react").ReactElement} Returns the created controller element(JSX element) for user input field element.
 */
const Controller = (props) => {
  const { defaultValue, disabled, readOnly, value, ...propsEF } = props
  const { children, className, styled = "outline" } = propsEF

  const styles = [style.InputController]
  styles.push(style[styled[0].toUpperCase() + styled.slice(1)])

  if (defaultValue?.length || value?.length) {
    styles.push(style.Filled)
  }

  readOnly && styles.push(style.ReadOnly)
  disabled && styles.push(style.Disabled)
  className && styles.push(className)

  return createElement({ children, props: { className: styles.join(" ") } })
}

/**
 * Returns after created the fieldset element(JSX element) for user input field element.
 *
 * @module FieldSet
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.label=""] Label string for user input field element.
 * @returns {import("react").ReactElement} Returns the created fieldset element(JSX element) for user input field element.
 */
const FieldSet = (props) => {
  const { label = "" } = props

  return createElement({
    children: createElement({
      children: createElement({
        children: label,
        props: { className: style.Span },
        tag: "span",
      }),
      props: { className: style.Legend },
      tag: "legend",
    }),
    props: { className: style.FieldSet },
    tag: "fieldset",
  })
}

/**
 * Returns after created the user input field element(JSX element).
 *
 * @module Field
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.autoComplete] Attribute*(`autocomplete`) for user input text field element.
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete}
 * @param {String} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {String} [props.id] Identifier(`id`) attribute for the user input field element.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the user input field element has lost focus.
 * @param {EventListener} [props.onChange] `EventListener` to execute when the value of the user input field element changes.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the user input field element has received focus.
 * @param {String} [props.placeholder] Short hint that describes the expected value of the user input field element.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {Boolean} [props.required] Whether the user input field element is the required input field.
 * @param {String} [props.type="text"] Field type of user input field element.
 * "password" | "search" | "text"(default)
 * @param {String} [props.value] Value of the user input field element.
 * @returns {import("react").ReactElement} Returns the created user input field element(JSX element).
 */
const Field = (props) => {
  const { onBlur, onChange, onFocus, ...propsOther } = props
  const { defaultValue, type = "text", ...propsField } = propsOther

  const [value, setValue] = React.useState(props.value || defaultValue || "")
  const [showPassword, setShowPassword] = React.useState(false)

  propsField.className = style.Input
  propsField.value = value

  if (type === "password") {
    propsField.type = showPassword ? "text" : type
  } else if (type === "search") {
    propsField.type = "text"
  }

  propsField.onBlur = (event) => {
    const eleField = event.target
    const eleCtrl = eleField.parentNode?.parentNode
    eleCtrl?.classList?.remove(style.Focus)

    onBlur && onBlur(event)
  }

  propsField.onChange = (event) => {
    const eleField = event.target
    const eleCtrl = eleField.parentNode?.parentNode

    setValue(eleField.value)

    if (eleField.value?.length > 0) {
      eleCtrl?.classList?.add(style.Filled)
    } else {
      eleCtrl?.classList?.remove(style.Filled)
    }

    onChange && onChange(event)
  }

  propsField.onFocus = (event) => {
    const eleField = event.target
    const eleCtrl = eleField.parentNode?.parentNode
    eleCtrl?.classList?.add(style.Focus)

    onFocus && onFocus(event)
  }

  /**
   * Focus in the passed input field and moves the cursor to the last one.
   *
   * @method focusAtEnd
   * @param {HTMLInputElement} field Input field element to move focus.
   */
  const focusAtEnd = (field) => {
    if (!field) return

    field.focus()
    setTimeout(() => {
      field.selectionStart = field.selectionEnd = field.value.length
    }, 10)
  }

  /**
   * EventListener to be executed when the eye button in the password field is clicked.
   *
   * @method handleClickPassword
   * @param {import("react").SyntheticEvent} event Event that occurred on button elements.
   */
  const handleClickPassword = (event) => {
    setShowPassword(!showPassword)

    const eleButton = event.target
    const eleField = eleButton.parentNode?.firstElementChild
    focusAtEnd(eleField)
  }

  /**
   * EventListener to be executed when the clear button click in the search field is clicked.
   *
   * @method handleClickSearch
   * @param {import("react").SyntheticEvent} event Event that occurred on button elements.
   */
  const handleClickSearch = (event) => {
    const eleButton = event.target
    const eleField = eleButton.parentNode?.firstElementChild

    if (eleField) {
      eleField.value = ""
      eleField.focus()
    }
  }

  return (
    <>
      {createElement({ props: propsField, tag: "input" })}
      {type === "password" && (
        <IconButton
          className={style.PasswordEye}
          onClick={handleClickPassword}
          tabIndex={-1}
        >
          {showPassword && <IoMdEyeOff />}
          {!showPassword && <IoMdEye />}
        </IconButton>
      )}
      {type === "search" && (
        <IconButton
          className={style.Search}
          onClick={handleClickSearch}
          tabIndex={-1}
        >
          <IoMdClose />
        </IconButton>
      )}
    </>
  )
}
Field.propTypes = {
  autoComplete: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.oneOf(["password", "search", "text"]),
  value: PropTypes.string,
}

/**
 * Returns after created the label element(JSX element) for user input field element.
 *
 * @module Label
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.label=""] Label string for user input field element.
 * @param {String} [props.id=""] Identifier(`id`) attribute for the user input field element.
 * @returns {import("react").ReactElement} Returns the created label element(JSX element) for user input field element.
 */
const Label = (props) => {
  const { label = "", id = "" } = props

  return createElement({
    children: label,
    props: { className: style.Label, htmlFor: id },
    tag: "label",
  })
}

/**
 * Returns after created the user input field controller element(JSX element).
 *
 * @module Input
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {String} [props.autoComplete] Attribute*(`autocomplete`) for user input text field element.
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete}
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the user input field controller element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the user input field controller element to be created.
 * @param {String} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {String} [props.id] Identifier(`id`) attribute for the user input field element.
 * @param {String} [props.label] Label string for user input field element.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the user input field element has lost focus.
 * @param {EventListener} [props.onChange] `EventListener` to execute when the value of the user input field element changes.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the user input field element has received focus.
 * @param {String} [props.placeholder] Short hint that describes the expected value of the user input field element.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {Boolean} [props.required] Whether the user input field element is the required input field.
 * @param {String} [props.styled="outline"] User input field style type.
 * "fill" | "outline"(default) | "underline"
 * @param {String} [props.type="text"] Field type of user input field element.
 * "password" | "search" | "text"(default)
 * @param {String} [props.value] Value of the user input field element.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created user input field controller element(JSX element).
 */
const Input = React.forwardRef((props, forwardedRef) => {
  const { children, label, styled = "outline", ...propsInput } = props

  const childrenCtrl = []
  const childrenCont = []

  label && childrenCtrl.push(<Label id={props.id} key="L" label={label} />)

  forwardedRef && (propsInput.ref = forwardedRef)
  childrenCont.push(<Field key="I" {...propsInput} />)

  styled === "outline" && childrenCont.push(<FieldSet key="FS" label={label} />)

  childrenCtrl.push(<Container key="C">{childrenCont}</Container>)

  if (React.isValidElement(children)) {
    if (children.props?.position === "end") {
      childrenCtrl.push(children)
    } else {
      childrenCtrl.unshift(children)
    }
  } else if (children) {
    childrenCtrl.push(<Box key={"c"}>{children}</Box>)
  }

  return <Controller {...props}>{childrenCtrl}</Controller>
})
Input.displayName = "Input"
Input.propTypes = {
  autoComplete: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  styled: PropTypes.oneOf(["fill", "outline", "underline"]),
  type: PropTypes.oneOf(["password", "search", "text"]),
  value: PropTypes.string,
}

export { Input }
