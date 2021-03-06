/** @module prevent-end */

import {isEqual, takeRight, slice} from "lodash"

/**
 * Prevents a string or an array from having a specified end
 * @example
 * import prevendEnd from "prevent-end"
 * preventEnd("abcd", "cd")
 * // "ab"
 * @example
 * import prevendEnd from "prevent-end"
 * preventEnd(["ab", "c" "d"], ["c", "d"])
 * // ["ab"]
 * @function
 * @param {string|array} value String or array that should not end with specified value
 * @param {string|array} badEnd The unwanted end value
 * @returns {*} Cleaned value
 */
export default (value, badEnd) => {
  if (typeof value === "string") {
    if (value.endsWith(badEnd)) {
      return value.substr(0, value.length - badEnd.length)
    }
    return value
  }
  if (Array.isArray(value, badEnd)) {
    if (!Array.isArray(badEnd)) {
      badEnd = [badEnd]
    }
    if (isEqual(takeRight(value, badEnd.length), badEnd)) {
      return slice(value, 0, value.length - badEnd.length)
    }
    return value
  }
  return value
}