import React from 'react';
import HighlightText from '../HomePage/HighlightText';

const Quote = () => {
    return (
        <div className="bg-gray-50 px-6 py-8 rounded-lg shadow-md text-center border border-gray-200">
            <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                We are passionate about revolutionizing the way we learn. Our innovative platform
                <HighlightText text={" combines technology, "} />
                <span className="font-bold bg-gradient-to-b from-yellow-500 to-orange-600 text-transparent bg-clip-text">
                    expertise
                </span>
                {" "} and community to create an
                <span className="font-bold bg-gradient-to-b from-yellow-500 to-orange-600 text-transparent bg-clip-text">
                    {" "} unparalleled educational experience.
                </span>
            </p>
        </div>
    );
};


export default Quote;