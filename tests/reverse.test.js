import { test, expect, beforeAll } from "vitest"
import { reverseText } from "../src/functions.cjs"

beforeAll(() => {
    const input = document.createElement("input")
    input.id = "textInput"
    document.body.appendChild(input)
    const resultDiv = document.createElement("div")
    resultDiv.id = "result"
    document.body.appendChild(resultDiv)
})

test("displays reversed content in result div", () => {
    const input = document.getElementById("textInput")
    const resultDiv = document.getElementById("result")
    input.value = "foobar"
    reverseText()
    expect(resultDiv?.textContent).toEqual("Reversed: raboof")
})