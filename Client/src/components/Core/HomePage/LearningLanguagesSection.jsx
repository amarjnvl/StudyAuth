import React from "react";
import HighlightText from "./HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";
import KnowYourProgress from "../../../assets/Images/Know_your_progress.png";
import CompareWithOthers from "../../../assets/Images/Compare_with_others.svg";
import PlanYourLessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
    return (
        <div className="w-10/12 mx-auto">
            {/* Heading Section */}
            <div className="text-4xl font-semibold text-center my-10">
                Your swiss knife for <HighlightText text={"learning any language"} />
            </div>

            {/* Description */}
            <p className="w-10/12 lg:w-3/4 mx-auto text-center text-base font-medium leading-6 text-gray-700 mt-3">
                Using Spin makes learning multiple languages easy, with 20+ languages,
                realistic voice-over, progress tracking, custom schedules, and more.
            </p>

            {/* Image Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-8">
                <img
                    src={KnowYourProgress}
                    alt="Know your progress"
                    className="object-contain lg:w-[300px] w-[200px]"
                />
                <img
                    src={CompareWithOthers}
                    alt="Compare with others"
                    className="object-contain lg:w-[300px] w-[200px]"
                />
                <img
                    src={PlanYourLessons}
                    alt="Plan your lessons"
                    className="object-contain lg:w-[300px] w-[200px]"
                />
            </div>

            {/* CTA Button */}
            <div className="w-fit mx-auto mt-6 lg:mt-10">
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>
            </div>
        </div>
    );
};

export default LearningLanguageSection;
