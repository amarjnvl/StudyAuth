import React from "react";
import ContactUsForm from "../ContactPage/ContactUsForm";


const ContactForm = () => {
    return (

        <div className="max-w-3xl mx-auto text-center px-6">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-800">Get in Touch</h1>
            <p className="text-gray-600 ">
                Have any questions? We'd love to hear from you. Fill out the form below, and our team will get back to you shortly.
            </p>

            {/* Form Section */}
            <div className="mt-8">
                <ContactUsForm />
            </div>


        </div>


    );
};

export default ContactForm;
