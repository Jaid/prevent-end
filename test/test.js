import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(__dirname, "..", process.env.MAIN) : path.join(__dirname, "..", "src"))
const {default: preventEnd} = require(indexModule)

it("should run run for string", () => {
  const result = preventEnd("abcd", "cd")
  expect(result).toEqual("ab")
})

it("should run run for arrays", () => {
  const result = preventEnd(["a", "b", "c", "d"], ["c", "d"])
  expect(result).toEqual(["a", "b"])
})