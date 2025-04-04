// rafce

import React from 'react'

const HighlightText = ({ text }) => {
    return (
        <span className='font-bold bg-gradient-to-b from-[#118AB2] to-[#63C7E0] text-transparent bg-clip-text'>
            {text}
        </span>
    );
};

export default HighlightText