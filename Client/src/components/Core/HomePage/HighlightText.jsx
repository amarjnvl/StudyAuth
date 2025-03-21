// rafce

import React from 'react'

const HighlightText = ({ text }) => {   // destructure props
    return (
        // bg-gradient-to-b from-white to-blue-500
        <span className='font-bold bg-gradient-to-b from-white to-blue-500 text-transparent bg-clip-text'>
            {" "}
            {text}
        </span>
    )
}

export default HighlightText