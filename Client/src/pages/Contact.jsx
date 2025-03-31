import React from "react";
import ContactDetails from "../components/Core/ContactPage/ContactDetails";
import ContactUsForm from "../components/Core/ContactPage/ContactUsForm";
import Footer from "../components/common/Footer";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
            {/* Contact Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 py-12 items-center">

                {/* Contact Details Section - Single Layer */}
                <div className="h-auto lg:h-[50vh] flex items-center">
                    <ContactDetails />
                </div>

                {/* Contact Form Section */}
                <div className="space-y-4">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Got an Idea? Let’s Collaborate!
                    </h1>
                    <p className="text-gray-600">
                        Tell us more about yourself and what you have in mind.
                    </p>
                    <ContactUsForm />
                </div>

            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Contact;
