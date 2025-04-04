// Icons Import
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"

// Component Imports
import Footer from "../components/common/Footer"
import CTAButton from "../components/Core/HomePage/Button"
import CodeBlocks from "../components/Core/HomePage/CodeBlocks"
import HighlightText from "../components/core/HomePage/HighlightText"
import TimelineSection from "../components/Core/HomePage/TimelineSection"
import LearningLanguageSection from "../components/Core/HomePage/LearningLanguagesSection"
import InstructionSection from "../components/Core/HomePage/InstructionSection"
import ExploreMore from "../components/core/HomePage/ExploreMore"
// import ReviewSlider from "../components/common/ReviewSlider"

function Home() {
    return (
        <div>
            {/* Section 1 */}
            <div className='relative mx-auto flex flex-col w-10/12 text-gray-800 items-center max-w-maxContent bg-white'>
                {/* Become an Instructor Button */}
                <Link to={"/signup"}>
                    <div className='group mt-16 p-1 mx-auto rounded-full bg-[#EAF5FF] font-bold text-[#118AB2] transition-all duration-200 hover:scale-95 shadow-lg w-fit'>
                        <div className='group-hover:bg-[#D4E9F5] flex items-center gap-2 rounded-full py-[5px] px-10'>
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                {/* Heading */}
                <div className='text-center text-4xl font-semibold mt-7'>
                    Empower Your Future with
                    <HighlightText text={" Coding Skills"} />
                </div>

                {/* Sub Heading */}
                <div className='mt-5 w-[70%] text-center text-lg font-medium text-gray-600'>
                    With our online coding courses, you can learn at your own pace, from
                    anywhere in the world, and get access to a wealth of resources,
                    including hands-on projects, quizzes, and personalized feedback from
                    instructors.
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                {/* Video */}
                <div className='mx-3 my-14 shadow-md shadow-gray-300'>
                    <video
                        className="rounded-lg shadow-lg"
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                {/* Code Section 1 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock your
                                <HighlightText text={" coding potential"} /> with our online
                                courses.
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={{
                            btnText: "Try it Yourself",
                            link: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Learn More",
                            link: "/login",
                            active: false,
                        }}
                        codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    />
                </div>

                {/* Explore Section */}
                <ExploreMore />
            </div>

            {/* Section 2 */}
            <div className="bg-[#F9FAFB]">
                <div className="homepage_bg h-[311px] pt-7">
                    <div className='w-11/12 max-w-maxContent flex items-center justify-center gap-1 mx-auto py-[150px]'>
                        <div className='flex gap-7 text-gray-800'>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-2">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/login"}>
                                Learn More
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className='mx-auto w-[1100px] flex flex-col items-center justify-between gap-7 bg-white p-6 rounded-lg shadow-md'>
                    {/* Job that is in Demand - Section 1 */}
                    <div className='flex gap-5 mb-10 mt-[90px]'>
                        <div className='text-4xl font-semibold w-[45%]'>
                            Get the skills you need for a{" "}
                            <HighlightText text={" job that is in demand."} />
                        </div>
                        <div className='flex flex-col gap-10 w-[45%] items-start'>
                            <div className="text-[16px] text-gray-600">
                                The modern StudyNotion dictates its own terms. Today, to
                                be a competitive specialist requires more than professional
                                skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="">Learn More</div>
                            </CTAButton>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <TimelineSection />


                </div>
                {/* Instruction Section */}
                <div className="w-full">
                    <InstructionSection />
                </div>

                {/* Learning Language Section */}
                <LearningLanguageSection />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home;
