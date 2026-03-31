import { test, expect, afterEach } from "vitest"
import { incrementCount, resetCount } from "../src/functions.cjs"

const div = document.createElement("div")
div.id = "count"
document.body.appendChild(div)

afterEach(() => {
    resetCount()
})

test("increments number and updates element", () => {
    incrementCount()
    expect(div.textContent).toEqual("1")
    incrementCount()
    expect(div.textContent).toEqual("2")
})

test("resets element content", () => {
    incrementCount()
    expect(div.textContent).toEqual("1")
    resetCount()
    expect(div.textContent).toEqual("0")
})