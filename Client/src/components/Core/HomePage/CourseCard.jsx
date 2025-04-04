import React from "react";
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
    const isActive = currentCard === cardData?.heading;

    return (
        <div
            className={`w-[360px] lg:w-[30%] h-[300px] cursor-pointer box-border 
                ${isActive ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50" : "bg-[#161D29] text-[#DBDDEA]"}`}
            onClick={() => setCurrentCard(cardData?.heading)}
        >
            {/* Card Content */}
            <div className="h-[80%] p-6 flex flex-col gap-3 border-b-2 border-dashed border-[#6E727F]">
                <h3 className={`font-semibold text-[20px] ${isActive ? "text-[#161D29]" : ""}`}>
                    {cardData?.heading}
                </h3>
                <p className="text-richblack-400">{cardData?.description}</p>
            </div>

            {/* Footer Section */}
            <div className={`flex justify-between px-6 py-3 font-medium ${isActive ? "text-blue-300" : "text-richblack-300"}`}>
                <div className="flex items-center gap-2 text-[16px]">
                    <HiUsers />
                    <p>{cardData?.level}</p>
                </div>
                <div className="flex items-center gap-2 text-[16px]">
                    <ImTree />
                    <p>{cardData?.lessionNumber} Lessons</p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
