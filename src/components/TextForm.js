import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const read = text.split(/\s+/).filter((word) => word.length > 0).length

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const upperCaseButton = () => {
        setText(text.toUpperCase())
    }

    const lowerCaseButton = () => {
        setText(text.toLowerCase())
    }

    const capitalizeButton = () => {
        setText(text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '))
    }

    const copyButton = () => {
        navigator.clipboard.writeText(text)
        setText(text)
    }

    const clearButton = () => {
        setText('')
    }

    return (
        <>
            <div>
                <h3 className="my-4">{props.heading}</h3>
                <div className="mb-3">
                    <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Enter your text here"></textarea>
                </div>
                <button onClick={upperCaseButton} type="button" className="btn btn-light btn-sm mx-2">Convert to UpperCase</button>
                <button onClick={lowerCaseButton} type="button" className="btn btn-light btn-sm mx-2">Convert to LowerCase</button>
                <button onClick={capitalizeButton} type="button" className="btn btn-light btn-sm mx-2">Capitalized First Letter</button>
                <button onClick={copyButton} type="button" className="btn btn-light btn-sm mx-2">Copy to clipboard</button>
                <button onClick={clearButton} type="button" className="btn btn-light btn-sm mx-2">Clear</button>
            </div>

            <div className="my-4">
                <h3>Your text summary</h3>
                <p className="my-2">{read} words and {text.length} characters</p>
                <p>Estimated reading time: {0.08 * read}</p>
            </div>

            <div>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
