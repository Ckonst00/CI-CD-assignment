import { test, expect, beforeAll, afterEach } from "vitest"
import { incrementCount, resetCount } from "../src/functions"

beforeAll(() => {
    const div = document.createElement("div")
    div.id = "count"
    document.body.appendChild(div)
})

afterEach(() => {
    resetCount()
})

test("increments number and updates element", () => {
    incrementCount()
    const doc = document.getElementById("count")
    expect(doc.textContent).toEqual("1")
    incrementCount()
    expect(doc.textContent).toEqual("2")
})

test("resets element content", () => {
    const doc = document.getElementById("count")
    incrementCount()
    expect(doc.textContent).toEqual("1")
    resetCount()
    expect(doc.textContent).toEqual("0")
})