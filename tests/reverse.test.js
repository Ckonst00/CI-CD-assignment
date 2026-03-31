import { test, expect } from "vitest"
import { reverseText } from "../src/functions.cjs"


const input = document.createElement("input")
input.id = "textInput"
document.body.appendChild(input)
const resultDiv = document.createElement("div")
resultDiv.id = "result"
document.body.appendChild(resultDiv)

test("displays reversed content in result div", () => {
    input.value = "foobar"
    reverseText()
    expect(resultDiv?.textContent).toEqual("Reversed: raboof")
})