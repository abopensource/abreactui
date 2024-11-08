/**
 * Logger for controlling log output according to the execution environment.
 *
 * The error log(`log.error()`) is also output in the `production` environment,
 * and the warning log(`log.warn()`), information log(`log.info()`),
 * and debug log(`log.debug()`) are only output in the `development` environment.
 *
 * @module utils/log
 * @type {Object<String, Function>}
 */
const log = {
  /**
   * Debug log output.
   *
   * Debug log output only in `development` environment.
   *
   * @member log.debug
   * @param {...} [args] Debug log contents to be output.
   */
  debug: function (...args) {
    if (process.env.NODE_ENV === "production") return
    console.debug(...args)
  },
  /**
   * Error log output.
   *
   * Error logs are also output in the `production` environment.
   *
   * @member log.error
   * @param {...} [args] Error log contents to be output.
   */
  error: function (...args) {
    console.error(...args)
    process.env.NODE_ENV === "development" && console.trace()
  },
  /**
   * Information log output.
   *
   * Information log output only in `development` environment.
   *
   * @member log.info
   * @param {...} [args] Information log contents to be output.
   */
  info: function (...args) {
    if (process.env.NODE_ENV === "production") return
    console.info(...args)
  },
  /**
   * Warning log output.
   *
   * Warning log output only in `development` environment.
   *
   * @member log.warn
   * @param {...} [args] Warning log contents to be output.
   */
  warn: function (...args) {
    if (process.env.NODE_ENV === "production") return
    console.warn(...args)
  },
}

export { log }
