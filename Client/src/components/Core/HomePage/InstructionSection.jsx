import React from "react";
import becomeAnInstructor from "../../../assets/Images/become_an_instructor.jpeg";
import HighlightText from "./HighlightText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructionSection = () => {
    return (
        <div className="w-11/12 mx-auto -mt-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
                {/* Left Section - Image */}
                <div className="lg:w-1/2 w-full flex justify-center">
                    <img
                        src={becomeAnInstructor}
                        alt="Become an Instructor"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>

                {/* Right Section - Text & CTA */}
                <div className="lg:w-1/2 w-full flex flex-col gap-6 text-center lg:text-left">
                    <h2 className="text-4xl font-semibold">
                        Become an <HighlightText text={" instructor"} />
                    </h2>
                    <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
                        Instructors from around the world teach millions of students on
                        StudyNotion. We provide the tools and skills to teach what you love.
                    </p>

                    {/* CTA Button */}
                    <div className="w-fit mx-auto lg:mx-0">
                        <CTAButton active={1} linkto={"/signup"}>
                            <div className="flex items-center gap-2">
                                Start teaching today <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstructionSection;
