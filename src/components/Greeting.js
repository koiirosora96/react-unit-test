import React, { useState } from "react"

export const Greeting = () => {
    const [changedText, setChangedText] = useState(true)

    const changeTextHandler = () => {
        setChangedText(!changedText)
    }

    return (
        <>
            <h1>
                Hello, world!
            </h1>
            <p>Trying to test a unit</p>
            {changedText && <p>i'ts good to see you!</p>}
            {!changedText && <p>text changed</p>}
            <button onClick={changeTextHandler}>Click me to change text</button>
        </>
    )
}