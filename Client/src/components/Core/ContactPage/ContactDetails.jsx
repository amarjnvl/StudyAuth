import React from "react";
import * as BiIcons from "react-icons/bi";
import * as HiIcons from "react-icons/hi2";
import * as IoIcons from "react-icons/io5";

const contactDetails = [
    {
        icon: "HiChatBubbleLeftRight",
        heading: "Chat with Us",
        description: "Our friendly team is here to help.",
        details: "info@studyAuth.com",
    },
    {
        icon: "BiWorld",
        heading: "Visit Us",
        description: "Come and say hello at our office HQ.",
        details: "Akshya Nagar 1st Block, Bangalore-560016",
    },
    {
        icon: "IoCall",
        heading: "Call Us",
        description: "Mon - Fri, 8 AM to 5 PM",
        details: "+123 456 7869",
    },
];

const ContactDetails = () => {
    return (
        <div className="flex flex-col gap-6">
            {contactDetails.map((data, index) => {
                let Icon = BiIcons[data.icon] || IoIcons[data.icon] || HiIcons[data.icon];

                return (
                    <div
                        key={index}
                        className="flex items-center gap-4 p-5 border border-gray-300 rounded-lg bg-white shadow-sm hover:shadow-md transition"
                    >
                        <div className="text-blue-600 bg-blue-100 p-3 rounded-full">
                            {Icon ? <Icon size={30} /> : <span>🚫</span>}
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-lg font-semibold text-gray-800">{data.heading}</h1>
                            <p className="text-gray-600">{data.description}</p>
                            <p className="font-medium text-gray-900">{data.details}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ContactDetails;
