import React from "react";
import HighlightText from "../HomePage/HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";

const LearningGridArray = [
    {
        order: -1,
        heading: "World-Class Learning for",
        highlightText: "Anyone, Anywhere",
        description:
            "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        BtnText: "Learn More",
        BtnLink: "/",
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description:
            "Save time and money! The Studynotion curriculum is designed to be easy to understand and aligned with industry requirements.",
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description:
            "Studynotion collaborates with over 275+ leading universities and companies to provide top-tier education.",
    },
    {
        order: 3,
        heading: "Certification",
        description:
            "Earn recognized certifications that validate your expertise and boost your career prospects.",
    },
    {
        order: 4,
        heading: `Rating & "Auto-grading"`,
        description:
            "Our auto-grading system ensures fair evaluations and instant feedback to enhance your learning experience.",
    },
    {
        order: 5,
        heading: "Ready to Work",
        description:
            "Gain practical skills and real-world experience, making you job-ready from day one.",
    },
];

const LearningGrid = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 lg:px-0 mb-12">
            {LearningGridArray.map((data, index) => (
                <div
                    key={index}
                    className={`rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-105 
            ${index === 0
                            ? "lg:col-span-2 bg-white text-gray-900 shadow-lg"
                            : data.order % 2 === 1
                                ? "bg-gray-200 hover:bg-gray-300"
                                : "bg-gray-100 hover:bg-gray-200"
                        }
            ${data.order === 3 && "lg:col-start-2"}
          `}
                >
                    {data.order < 0 ? (
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-3xl font-bold">
                                {data.heading}
                                <br />
                                <HighlightText text={data.highlightText} />
                            </h2>
                            <p className="text-lg">{data.description}</p>
                            <div className="w-fit">
                                <CTAButton active={true} linkto={data.BtnLink}>
                                    {data.BtnText}
                                </CTAButton>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800">{data.heading}</h3>
                            <p className="text-gray-600">{data.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default LearningGrid;
