import React from 'react';

const IconBtn = ({
    text,
    onClick,
    children,
    disabled,
    outline = false,
    customClasses = "",
    type = "button",
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={`flex items-center justify-center gap-2 rounded-md px-5 py-2 
                text-lg font-medium transition-all duration-300 
                ${outline
                    ? "border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    : "bg-blue-500 text-white hover:bg-blue-600"} 
                ${disabled ? "opacity-50 cursor-not-allowed" : ""} 
                ${customClasses}`}
        >
            <span>{text}</span>
            {children}
        </button>
    );
};

export default IconBtn;
