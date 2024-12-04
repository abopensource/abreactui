import React from "react"

/**
 * Returns after created a `React.ReactElement`(JSX element).
 *
 * @module createElement
 * @type {Function}
 * @param {React.ComponentProps} [props] `React.ComponentProps` passed to React component.
 * @param {React.ReactNode} [props.children] `React.ReactNode` to include at the `React.ReactElement` that will be created.
 * @param {React.ComponentProps} [props.props] `React.ComponentProps` to apply to the `React.ReactElement` that will be created.
 * @param {String} [props.tag="div"] HTML element name to apply to the `React.ReactElement` that will be created.
 * @returns {React.ReactElement} Returns the created `React.ReactElement`(JSX element).
 */
const createElement = ({ children, props, tag }) =>
  React.createElement(tag ? tag : "div", props, children)

/**
 * Logger to control log output depending on the execution environment.
 *
 * The error log(`log.error()`) is output even in the operating environment,
 * while the warning log(`log.warn()`), information log(`log.info()`), and debug log(`log.debug()`) are output only in the development environment.
 *
 * @module utils/log
 */
const log = {
  _tag: "ABReactUI",
  /**
   * Debug log output.
   *
   * Debug log output only in development environment.
   *
   * @member log.debug
   * @param {...} args What to output using the debug log.
   */
  debug: function (...args) {
    if (process.env.NODE_ENV === "production") return
    console.debug(...args)
  },
  /**
   * Error log output.
   *
   * Error logs are also output in the operating environment.
   *
   * @member log.error
   * @param {...} args What to output using the error log.
   */
  error: function (...args) {
    console.error(...args)
    process.env.NODE_ENV === "development" && console.trace()
  },
  /**
   * Information log output.
   *
   * Information log output only in development environment.
   *
   * @member log.info
   * @param {...} args What to output using the information log.
   */
  info: function (...args) {
    if (process.env.NODE_ENV === "production") return
    console.info(...args)
  },
  /**
   * Warning log output.
   *
   * Warning log output only in development environment.
   *
   * @member log.debug
   * @param {...} args What to output using the Warning log.
   */
  warn: function (...args) {
    if (process.env.NODE_ENV === "production") return
    console.warn(...args)
  },
}

const ENV = process.env.NODE_ENV || "production"
const env = `${ENV.replace(/\b[a-z]/, (c) => c.toUpperCase())} Environment`
log.debug(`${"=".repeat(env.length)}\n${env}\n${"-".repeat(env.length)}`)

export { createElement, log }
