import React from 'react';
import IconBtn from '../common/IconBtn';

const ConfirmationModal = ({ text1, text2, btn1Text, btn1Handler, btn2Text, btn2Handler }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6">
                {/* Modal Text */}
                <p className="text-xl font-semibold text-gray-800">{text1}</p>
                <p className="text-gray-600 mt-2">{text2}</p>

                {/* Buttons */}
                <div className="flex justify-end gap-4 mt-6">
                    <button
                        onClick={btn2Handler}
                        className="px-4 py-2 rounded-md border border-gray-400 text-gray-600 hover:bg-gray-100 transition"
                    >
                        {btn2Text}
                    </button>
                    <button
                        onClick={btn1Handler}
                        className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                    >
                        {btn1Text}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
