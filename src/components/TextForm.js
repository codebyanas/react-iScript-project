import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const [copy, setCopy] = useState('Copy to Clipboard')
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

    const extraSpacingButton = () => {
        setText(text.split(/[ ]+/).join(' '))
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
        setCopy('Copied')

        setTimeout(() => {
            setCopy('Copy to Clipboard')
        }, 2000)
    }

    const clearButton = () => {
        setText('')
    }

    return (
        <>
            <div className="container">
                <h3 className="my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h3>
                <div className="mb-3">
                    <textarea style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Enter your text here"></textarea>
                </div>
                <button onClick={upperCaseButton} disabled={text.length === 0} type="button" className="btn btn-light btn-sm mx-1 my-1 btn-color">Convert to UpperCase</button>
                <button onClick={lowerCaseButton} disabled={text.length === 0} type="button" className="btn btn-light btn-sm mx-1 my-1 btn-color">Convert to LowerCase</button>
                <button onClick={capitalizeButton} disabled={text.length === 0} type="button" className="btn btn-light btn-sm mx-1 my-1 btn-color">Capitalized First Letter</button>
                <button onClick={copyButton} disabled={text.length === 0} type="button" className="btn btn-light btn-sm mx-1 my-1 btn-color">{copy}</button>
                <button onClick={extraSpacingButton} disabled={text.length === 0} type="button" className="btn btn-light btn-sm mx-1 my-1 btn-color">Remove Extra Spacing</button>
                <button onClick={clearButton} disabled={text.length === 0} type="button" className="btn btn-light btn-sm mx-1 my-1 btn-color">Clear</button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your text summary</h3>
                <p className="my-2">{read} words and {text.length} characters</p>
                <p>Estimated reading time: {0.08 * read}</p>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
