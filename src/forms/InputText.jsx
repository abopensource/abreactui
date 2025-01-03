import PropTypes from "prop-types"
import React from "react"
import { IoMdClose, IoMdEye, IoMdEyeOff } from "react-icons/io"

import { Box, createElement, IconButton, log, style } from "../"

/**
 * Returns the result that validates user input data.
 *
 * @function checkValidity
 * @param {String} value User input data to be validation.
 * @param {Object} validity Object containing information for validating user input field values.
 * @returns {Object} Validation result object.
 * @param {Boolean} [debug=false] Whether to enable debug logs.
 */
const checkValidity = (value, validity, debug = false) => {
  const _tag = `[${log._tag}][InputText] checkValidity`
  debug &&
    log.debug(
      `${_tag}(value: %o, validity: %o, debug: %o)`,
      value,
      validity,
      debug,
    )

  let result = { code: "OK", error: false, message: "" }

  if (!validity) return result

  if (validity.required && !value) {
    result.code = "REQUIRED"
    result.error = true
    result.message = validity.helpers?.required || "This field is required."
    return result
  }

  if (validity.pattern && !validity.pattern.test(value)) {
    if (validity.type === "email") {
      result.code = "INVALID_EMAIL"
      result.error = true
      result.message = validity.helpers?.invalid || "Email address is invalid."
      return result
    } else if (validity.type === "password") {
      const pattern = validity.pattern.source

      let exp = "(?=.*[A-Za-z])"
      if (pattern.includes(exp) && !new RegExp(exp).test(value)) {
        result.code = "MUST_ALPHABET"
        result.error = true
        result.message =
          validity.helpers?.mustAlphabet ||
          "Please include at least one alphabetical character."
        return result
      }

      exp = "(?=.*\\d)"
      if (pattern.includes(exp) && !new RegExp(exp).test(value)) {
        result.code = "MUST_NUMBERIC"
        result.error = true
        result.message =
          validity.helpers?.mustNumberic ||
          "Please include at least one numberic."
        return result
      }

      exp = "(?=.*[!@#$%^&*.])"
      if (pattern.includes(exp) && !new RegExp(exp).test(value)) {
        result.code = "MUST_SPECIAL"
        result.error = true
        result.message =
          validity.helpers?.mustSpecial ||
          "Please include at least one special character."
        return result
      }

      const lengths = pattern.split("{")[1]?.split("}")[0] || ","
      const [min, max] = lengths.split(",")
      if (!isNaN(min) && value.length < min) {
        result.code = "MIN_LENGTH"
        result.error = true
        result.message =
          (validity.helpers?.minLength && validity.helpers.minLength(min)) ||
          `Should be at least ${min} characters long.`
        result.min = min
        return result
      } else if (!isNaN(max) && value.length > max) {
        result.code = "MAX_LENGTH"
        result.error = true
        result.message =
          (validity.helpers?.maxLength && validity.helpers.maxLength(max)) ||
          `Should be no more ${max} characters long.`
        result.max = max
        return result
      }

      result.code = "INVALID_PASSWORD"
      result.error = true
      result.message = validity.helpers?.invalid || "Password is invalid."
      return result
    }
  }

  return result
}

/**
 * Extends `validity` with the type of the user input field element and some of the passed `props`.
 *
 * @function extendValidity
 * @param {String} type Field type of user input text field element.
 * @param {import("react").ComponentProps} props `React.ComponentProps` passed to React component.
 * @param {Object} validity Object containing information for validating user input text field values.
 * @param {Boolean} [debug=false] Whether to enable debug logs.
 */
const extendValidity = (type, props, validity, debug = false) => {
  const _tag = `[${log._tag}][InputText] extendValidity`
  debug &&
    log.debug(
      `${_tag}(type: %o, props: %o, validity: %o, debug: %o)`,
      type,
      props,
      validity,
      debug,
    )

  if (props.defaultValue) {
    !validity.defaultValue && (validity.defaultValue = props.defaultValue)
    delete props.defaultValue
  }

  if (props.error) {
    !validity.error && (validity.error = props.error)
    delete props.error
  }

  if (props.helper) {
    !validity.helper && (validity.helper = props.helper)
    delete props.helper
  }

  if (props.helpers) {
    !validity.helpers && (validity.helpers = props.helpers)
    delete props.helpers
  }
  !validity.helpers && (validity.helpers = {})

  if (props.max) {
    !validity.max && (validity.max = props.max)
    delete props.max
  }

  if (props.maxLength) {
    !validity.maxLength && (validity.maxLength = props.maxLength)
    delete props.maxLength
  }

  if (props.min) {
    !validity.min && (validity.min = props.min)
    delete props.min
  }

  if (props.minLength) {
    !validity.minLength && (validity.minLength = props.minLength)
    delete props.minLength
  }

  if (props.pattern) {
    !validity.pattern && (validity.pattern = props.pattern)
    delete props.pattern
  }

  if (!validity.pattern) {
    if (type === "email") {
      validity.pattern = /^[0-9a-zA-Z._%+-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{1,}$/
    } else if (type === "password") {
      validity.pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*.]).{8,16}$/
    }
  }

  if (props.required) {
    !validity.required && (validity.required = props.required)
    delete props.required
  }

  !validity.type && (validity.type = type)

  debug && log.debug("props: %o", props)
  debug && log.debug("validity: %o", validity)
}

/**
 * Returns after created the user input text field element(JSX element).
 *
 * @module Field
 * @type {import("react").ForwardRefExoticComponent}
 * @param {import("react").ComponentProps} [Props] `React.ComponentProps` passed to React component.
 * @param {Boolean} [Props.debug=false] Whether to enable debug logs.
 * @param {String|Number} [Props.defaultValue] Default value of the user input text field element.
 * @param {Boolean} [Props.disabled] Whether the user input text field element is disabled.
 * @param {Boolean} [Props.error] Whether the user input value is invalid.
 * @param {String} [Props.helper] Help message for user input values.
 * @param {Number} [Props.maxRows=20] Maximum number of lines if it is a multiline input text field.
 * @param {Boolean} [Props.multiline] Whether to use the `<textarea>` element as an auto-resizeable element.
 * @param {EventListener} [Props.onBlur] `EventListener` to execute when the user input text field element has lost focus.
 * @param {EventListener} [Props.onChange] `EventListener` to execute when the value of the user input text field element changes.
 * @param {EventListener} [Props.onFocus] `EventListener` to execute when the user input text field element has received focus.
 * @param {EventListener} [Props.onKeyDown] `EventListener` to execute when keyboard input is entered into a user input text field element.
 * @param {import("react").MutableRefObject} [Props.refController] Object referencing controller element for user input field element.
 * @param {import("react").MutableRefObject} [Props.refHelper] Object referencing helper element for user input field element.
 * @param {Number} [Props.rows=2] Number of lines if it is a multiline input text field.
 * @param {String} [Props.type="text"] Field type of user input text field element.
 * "email" | "password" | "search" | "text"(default) | "textarea"
 * @see {@link https://developer.mozilla.org/docs/Web/HTML/Element/input#input_types}
 * @param {Object} [Props.validity={}] Object containing information for validating user input text field values.
 * @param {String|Number} [Props.value] Value of the user input text field element.
 * @param {import("react").ForwardedRef} [forwardedRef] Object or function for use by referencing the component that will be created from the parent component.
 * @returns {import("react").ReactElement} Returns the created user input text field element(JSX element).
 */
const InputText = React.forwardRef((Props, forwardedRef) => {
  const {
    debug = false,
    onBlur,
    onChange,
    onFocus,
    onKeyDown,
    refController,
    refHelper,
    maxRows = 20,
    multiline,
    type = "text",
    validity = {},
    ...props
  } = Props
  const _tag = `[${log._tag}][InputText]`
  if (debug) {
    log.debug(`${_tag}() Props: %o`, Props)
    forwardedRef && log.debug(`${_tag}() forwardedRef: %o`, forwardedRef)
  }

  const [rows, setRows] = React.useState(Props.rows || 2)
  const [showPassword, setShowPassword] = React.useState(false)
  const [value, setValue] = React.useState(
    props.value || props.defaultValue || "",
  )
  const refInput = React.useRef()

  props.className = multiline ? style.TextArea : style.Input
  if (forwardedRef) {
    React.useImperativeHandle(forwardedRef, () => ({
      blur: () => refInput.current.blur(),
      checkValidation,
      field: refInput.current,
      focus: () => refInput.current.focus(),
      value: refInput.current.value,
      setRows,
      setShowPassword,
      setValue,
    }))
  }
  props.ref = refInput
  props.value = value

  if (type === "password") {
    props.type = showPassword ? "text" : type
  } else if (type === "email" || type === "search") {
    props.type = "text"
  }

  extendValidity(type, props, validity, debug)

  /**
   * Apply the result after validating the value of the user input field.
   *
   * @function checkValidation
   * @param {HTMLInputElement} field User input field element.
   */
  const checkValidation = (field) => {
    debug && log.debug(`${_tag} checkValidation field: %o`, field)

    const value = field?.value || refInput.current?.value
    const result = checkValidity(value, validity, debug)

    if (result.error) {
      refController?.current?.classList?.add(style.Error)
    } else {
      refController?.current?.classList?.remove(style.Error)
    }

    if (!result.error) {
      refHelper?.current?.setHelper(validity.helper || "")
    } else {
      let message = result.message || result.code || ""
      if (validity.messages && validity.messages[result.code]) {
        message = validity.messages[result.code]
      }
      refHelper?.current?.setHelper(message || "")
    }

    return !result.error
  }

  /**
   * Focus to the end of the user input field element.
   *
   * @method focusAtEnd
   */
  const focusAtEnd = () => {
    debug && log.debug(`${_tag} focusAtEnd field: %o`, refInput?.current)

    const field = refInput.current
    field.focus()
    setTimeout(() => {
      const length = field.value.length
      field.selectionStart = length
      field.selectionEnd = length
    }, 10)
  }

  props.onBlur = (event) => {
    debug && log.debug(`${_tag} onBlur event: %o`, event)

    const eleInput = event.target
    const eleController = refController?.current
    eleController && eleController.classList?.remove(style.Focus)

    validity.inactiveCheck !== false && checkValidation(eleInput)

    onBlur && onBlur(event)
  }

  props.onChange = (event) => {
    debug && log.debug(`${_tag} onChange event: %o`, event)

    const eleInput = event.target
    const newValue = eleInput.value
    const eleController = refController?.current

    value != newValue && setValue(newValue)

    if (eleController) {
      if (newValue.length > 0) {
        eleController.classList?.add(style.Filled)
      } else {
        eleController.classList?.remove(style.Filled)
      }
    }

    validity.realtimeCheck !== false && checkValidation(eleInput)

    onChange && onChange(event)
  }

  props.onFocus = (event) => {
    debug && log.debug(`${_tag} onFocus event: %o`, event)

    const eleController = refController?.current
    eleController && eleController.classList?.add(style.Focus)

    onFocus && onFocus(event)
  }

  props.onKeyDown = (event) => {
    debug && log.debug(`${_tag} onKeyDown event: %o`, event)

    onKeyDown && onKeyDown(event)
  }

  let eleInput = createElement({ props, tag: "input" })

  if (type === "password") {
    eleInput = (
      <React.Fragment>
        {eleInput}
        <IconButton
          className={style.PasswordEye}
          debug={debug}
          onClick={(event) => {
            setShowPassword(!showPassword)
            focusAtEnd(event.target)
          }}
          tabIndex={-1}
        >
          {showPassword && <IoMdEyeOff />}
          {!showPassword && <IoMdEye />}
        </IconButton>
      </React.Fragment>
    )
  } else if (type === "search") {
    eleInput = (
      <React.Fragment>
        {eleInput}
        <IconButton
          className={style.Search}
          debug={debug}
          disabled={value.length < 1}
          onClick={(event) => {
            value != "" && setValue("")
            focusAtEnd(event.target)
          }}
          tabIndex={-1}
        >
          {value.length > 0 && <IoMdClose />}
          {value.length < 1 && <Box className={style.Empty} />}
        </IconButton>
      </React.Fragment>
    )
  } else if (multiline) {
    props.rows = rows
    props.onKeyDown = (event) => {
      debug && log.debug(`${_tag} onKeyDown event: %o`, event)

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
        !Props.rows && lines < 2 && (lines = 2)
        !isNaN(Props.rows) && lines < Props.rows && (lines = Props.rows)
        lines < 1 && (lines = 1)
        lines > maxRows && (lines = maxRows)
        rows !== lines && setRows(lines)
      }, 5)

      onKeyDown && onKeyDown(event)
    }

    eleInput = createElement({ props, tag: "textarea" })
  }

  return eleInput
})
InputText.displayName = "InputText"
InputText.propTypes = {
  debug: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.bool,
  helper: PropTypes.string,
  maxRows: PropTypes.number,
  multiline: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  refController: PropTypes.object,
  refHelper: PropTypes.object,
  rows: PropTypes.number,
  type: PropTypes.oneOf(["email", "password", "search", "text", "textarea"]),
  validity: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export { InputText }
