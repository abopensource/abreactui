/**
 * Reporting on application performance analysis(measuring web vitals).
 *
 * @module utils/reportWebVitals
 * @function
 * @param {Function} [onPerfEntry=undefined] A function to record the results when the measurement is ready to be reported.
 */
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(onPerfEntry)
      onFID(onPerfEntry)
      onFCP(onPerfEntry)
      onLCP(onPerfEntry)
      onTTFB(onPerfEntry)
    })
  }
}

export { reportWebVitals }
