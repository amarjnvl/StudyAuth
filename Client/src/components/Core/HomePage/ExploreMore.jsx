import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";
import HighlightText from "./HighlightText";

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {
    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [courses, setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard, setCurrentCard] = useState(
        HomePageExplore[0].courses[0].heading
    );

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    };

    return (
        <div>
            {/* Explore more section */}
            <div>
                <div className="text-4xl font-semibold text-center my-10">
                    Unlock the
                    <HighlightText text={" Power of Code"} />
                    <p className="text-center text-[#838894] text-lg font-semibold mt-1">
                        Learn to Build Anything You Can Imagine
                    </p>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="hidden lg:flex gap-5 -mt-5 mx-auto w-max bg-white text-gray-600 p-1 rounded-full font-medium shadow-md">
                {tabsName.map((ele, index) => {
                    return (
                        <div
                            className={`text-[16px] flex flex-row items-center gap-2 ${currentTab === ele
                                ? "bg-[#EAF5FF] text-[#118AB2] font-medium"
                                : "text-gray-600"
                                } px-7 py-[7px] rounded-full transition-all duration-200 cursor-pointer hover:bg-[#EAF5FF] hover:text-[#118AB2]`}
                            key={index}
                            onClick={() => setMyCards(ele)}
                        >
                            {ele}
                        </div>
                    );
                })}
            </div>
            <div className="hidden lg:block lg:h-[200px]"></div>

            {/* Cards Group */}
            <div className="lg:absolute gap-10 justify-center lg:gap-0 flex lg:justify-between flex-wrap w-full lg:bottom-[0] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[50%] text-gray-800 lg:mb-0 mb-7 lg:px-0 px-3">
                {courses.map((ele, index) => {
                    return (
                        <CourseCard
                            key={index}
                            cardData={ele}
                            currentCard={currentCard}
                            setCurrentCard={setCurrentCard}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ExploreMore;