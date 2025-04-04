import { FcGoogle } from "react-icons/fc"
import { useSelector } from "react-redux"

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, description2, image, formType }) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 px-6 py-10">
            {/* Left Section: Text & Form */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    {title}
                </h1>
                <p className="mt-4 text-sm lg:text-base text-gray-700 leading-snug">
                    <span>{description1}</span>{" "}
                    <span className="font-semibold text-blue-600">{description2}</span>
                </p>
                <div className="mt-6">{formType === "signup" ? <SignupForm /> : <LoginForm />}</div>
            </div>

            {/* Right Section: Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src={image}
                    alt="Illustration"
                    className="max-w-xs sm:max-w-md lg:max-w-lg rounded-2xl shadow-xl"
                />
            </div>
        </div>
    );
}

export default Template;