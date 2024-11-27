import PropTypes from "prop-types"
import React from "react"
import { IoMdClose, IoMdEye, IoMdEyeOff } from "react-icons/io"

import { Box, createElement, IconButton, style } from "../"

/**
 * Returns after created the container element(JSX element) for user input field element.
 *
 * @module Container
 * @type {import("react").FunctionComponentElement}
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
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} props.children Child nodes to include in the controller element.
 * @param {String} [props.className] Stylesheet class name to apply to the user input field controller element to be created.
 * @param {String} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {Boolean} [props.error] Whether the user input value is invalid.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {String} [props.styled="outline"] User input field style type.
 * "fill" | "outline"(default) | "underline"
 * @param {String} [props.value] Value of the user input field element.
 * @returns {import("react").ReactElement} Returns the created controller element(JSX element) for user input field element.
 */
const Controller = (props) => {
  const { defaultValue, disabled, readOnly, value, ...propsEF } = props
  const { children, className, error, styled = "outline" } = propsEF

  const styles = [style.InputController]
  styles.push(style[styled[0].toUpperCase() + styled.slice(1)])

  if (defaultValue?.length || value?.length) {
    styles.push(style.Filled)
  }

  readOnly && styles.push(style.ReadOnly)
  disabled && styles.push(style.Disabled)
  error && styles.push(style.Error)
  className && styles.push(className)

  return createElement({ children, props: { className: styles.join(" ") } })
}

/**
 * Returns after created the fieldset element(JSX element) for user input field element.
 *
 * @module FieldSet
 * @type {import("react").FunctionComponentElement}
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
 * Returns after created the helper element(JSX element) for user input field element.
 *
 * @module Container
 * @type {import("react").FunctionComponentElement}
 * @param {import("react").ComponentProps} props `React.ComponentProps` passed to React component.
 * @param {import("react").ReactNode} props.children Child nodes to include in the helper element.
 * @returns {import("react").ReactElement} Returns the created helper element(JSX element) for user input field element.
 */
const Helper = (props) => {
  const { children } = props

  return createElement({
    children,
    props: { className: style.Helper },
    tag: "p",
  })
}

/**
 * Returns after created the user input field element(JSX element).
 *
 * @module Field
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete}
 * @param {String} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {String} [props.id] Identifier(`id`) attribute for the user input field element.
 * @param {Number} [props.maxRows=20] Maximum number of lines if it is a multiline input field.
 * @param {Boolean} [props.multiline] Whether to use the `<textarea>` element as an auto-resizeable element.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the user input field element has lost focus.
 * @param {EventListener} [props.onChange] `EventListener` to execute when the value of the user input field element changes.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the user input field element has received focus.
 * @param {EventListener} [props.onKeyDown] `EventListener` to execute when keyboard input is entered into a user input field element.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {Boolean} [props.required] Whether the user input field element is the required input field.
 * @param {Number} [props.rows=1] Number of lines if it is a multiline input field.
 * @param {String} [props.type="text"] Field type of user input field element.
 * "password" | "search" | "text"(default)
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/input#input_types}
 * @param {String} [props.value] Value of the user input field element.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created user input field element(JSX element).
 */
const Field = React.forwardRef((props, forwardedRef) => {
  const { onBlur, onChange, onFocus, ...propsEH } = props
  const { maxRows = 20, multiline, ...proptEM } = propsEH
  const { defaultValue, type = "text", ...propsField } = proptEM

  const [rows, setRows] = React.useState(props.rows || 1)
  const [showPassword, setShowPassword] = React.useState(false)
  const [value, setValue] = React.useState(props.value || defaultValue || "")

  propsField.className = multiline ? style.TextArea : style.Input
  propsField.value = value
  forwardedRef && (propsField.ref = forwardedRef)

  if (type === "password") {
    propsField.type = showPassword ? "text" : type
  } else if (type === "email" || type === "search") {
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
    const newValue = eleField.value
    const eleCtrl = eleField.parentNode?.parentNode

    setValue(newValue)

    if (newValue.length > 0) {
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

  if (multiline) {
    propsField.rows = rows

    propsField.onKeyDown = (event) => {
      setTimeout(() => {
        const field = event.target
        const value = field.value
        const style = window.getComputedStyle(field)
        const lineH = parseFloat(style.lineHeight)
        const eTemp = Object.assign(document.createElement("div"), {
          style: `
            width: ${style.width};
            position: absolute;
            z-index: -1;
            visibility: hidden;
            font: ${style.font};
            white-space: pre-wrap;
            word-wrap: break-word;
          `,
          textContent: value,
        })
        field.parentNode.appendChild(eTemp)
        const height = eTemp.offsetHeight
        field.parentNode.removeChild(eTemp)

        let lines = Math.ceil(height / lineH)
        new RegExp(/[\r\n]$/).test(value) && lines++
        !isNaN(props.rows) && lines < props.rows && (lines = props.rows)
        lines < 1 && (lines = 1)
        lines > maxRows && (lines = maxRows)
        setRows(lines)
      }, 5)

      props.onKeyDown && props.onKeyDown(event)
    }
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
      setValue("")
      eleField.focus()
    }
  }

  let eleField = createElement({ props: propsField, tag: "input" })

  if (type === "password") {
    eleField = (
      <>
        {eleField}
        <IconButton
          className={style.PasswordEye}
          onClick={handleClickPassword}
          tabIndex={-1}
        >
          {showPassword && <IoMdEyeOff />}
          {!showPassword && <IoMdEye />}
        </IconButton>
      </>
    )
  } else if (type === "search") {
    eleField = (
      <>
        {eleField}
        <IconButton
          className={style.Search}
          disabled={value.length < 1}
          onClick={handleClickSearch}
          tabIndex={-1}
        >
          {value.length > 0 && <IoMdClose />}
          {value.length < 1 && <Box className={style.Empty} />}
        </IconButton>
      </>
    )
  }

  if (multiline) {
    eleField = createElement({ props: propsField, tag: "textarea" })
  }

  return eleField
})
Field.displayName = "Field"
Field.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  type: PropTypes.oneOf(["password", "search", "text"]),
  value: PropTypes.string,
}

/**
 * Returns after created the label element(JSX element) for user input field element.
 *
 * @module Label
 * @type {import("react").FunctionComponentElement}
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
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete}
 * @param {import("react").ReactNode} [props.children] Child nodes to include in the user input field controller element to be created.
 * @param {String} [props.className] Stylesheet class name to apply to the user input field controller element to be created.
 * @param {String} [props.defaultValue] Default value of the user input field element.
 * @param {Boolean} [props.disabled] Whether the user input field element is disabled.
 * @param {Boolean} [props.error] Whether the user input value is invalid.
 * @param {String} [props.helper] Help for user input values.
 * @param {String} [props.id] Identifier(`id`) attribute for the user input field element.
 * @param {String} [props.label] Label string for user input field element.
 * @param {Number} [props.maxRows=20] Maximum number of lines if it is a multiline input field.
 * @param {Boolean} [props.multiline] Whether to use the `<textarea>` element as an auto-resizeable element.
 * @param {EventListener} [props.onBlur] `EventListener` to execute when the user input field element has lost focus.
 * @param {EventListener} [props.onChange] `EventListener` to execute when the value of the user input field element changes.
 * @param {EventListener} [props.onFocus] `EventListener` to execute when the user input field element has received focus.
 * @param {EventListener} [props.onKeyDown] `EventListener` to execute when keyboard input is entered into a user input field element.
 * @param {Boolean} [props.readOnly] Whether to use the user input field element as read-only.
 * @param {Boolean} [props.required] Whether the user input field element is the required input field.
 * @param {Number} [props.rows=1] Number of lines if it is a multiline input field.
 * @param {String} [props.styled="outline"] User input field style type.
 * "fill" | "outline"(default) | "underline"
 * @param {String} [props.type="text"] Field type of user input field element.
 * "password" | "search" | "text"(default)
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/input#input_types}
 * @param {String} [props.value] Value of the user input field element.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created user input field controller element(JSX element).
 */
const Input = React.forwardRef((props, forwardedRef) => {
  const { error, helper, ...propsEV } = props
  const { children, className, styled = "outline", ...propsEC } = propsEV
  const { label, ...propsInput } = propsEC

  const childrenCtrl = []
  const childrenCont = []

  label && childrenCtrl.push(<Label id={props.id} key="L" label={label} />)

  forwardedRef && (propsInput.ref = forwardedRef)
  childrenCont.push(<Field key="I" {...propsInput} />)

  styled === "outline" && childrenCont.push(<FieldSet key="FS" label={label} />)

  childrenCtrl.push(<Container key="C">{childrenCont}</Container>)
  helper && childrenCtrl.push(<Helper key="H">{helper}</Helper>)

  if (React.isValidElement(children)) {
    if (children.props?.position === "end") {
      childrenCtrl.push(children)
    } else {
      childrenCtrl.unshift(children)
    }
  } else if (children) {
    childrenCtrl.push(<Box key={"c"}>{children}</Box>)
  }

  const propsCtrl = {
    className,
    defaultValue: propsInput.defaultValue,
    disabled: propsInput.disabled,
    error,
    readOnly: propsInput.readOnly,
    styled,
    value: propsInput.value,
  }

  return <Controller {...propsCtrl}>{childrenCtrl}</Controller>
})
Input.displayName = "Input"
Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helper: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  styled: PropTypes.oneOf(["fill", "outline", "underline"]),
  type: PropTypes.oneOf(["password", "search", "text"]),
  value: PropTypes.string,
}

export { Input }
