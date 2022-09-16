import React from 'react'
import "./QuoteBox.css"


const QuoteBox = ({ isQuote, getAllRandom, isColor }) => {

    const objectStyle = {
        color: isColor
    }

    const objectBgStyle = {
        backgroundColor: isColor
    }

    return (
        <div className={`card `} style={objectStyle} >
            <i className="fa-solid fa-quote-left"></i>
            <h1>{isQuote.quote}</h1>
            <div className='author'>
                <h2>{isQuote.author}</h2>
            </div>
            <div className='btn'>
                <button onClick={getAllRandom} style={objectBgStyle}>&#62;</button>
            </div>
        </div>
    )
}

export default QuoteBox
