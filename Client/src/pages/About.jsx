import React from 'react';
import HighlightText from '../components/core/HomePage/HighlightText';
import BannerImage1 from '../assets/Images/aboutus1.webp';
import BannerImage2 from '../assets/Images/aboutus2.webp';
import BannerImage3 from '../assets/Images/aboutus3.webp';
import Quote from '../components/Core/AboutPage/Quote';
import FoundingStory from "../assets/Images/FoundingStory.png";
import StatsComponent from '../components/Core/AboutPage/Stats';
import LearningGrid from '../components/Core/AboutPage/LearningGrid';
import ContactForm from '../components/Core/AboutPage/ContactForm';
import Footer from "../components/common/Footer";


const About = () => {
    return (
        <div>
            <div className="px-6 md:px-12 lg:px-24 py-12 bg-white">

                {/* Section 1 */}
                <section className="text-center">
                    <header className="max-w-3xl mx-auto">
                        <h1 className="text-3xl font-bold mb-4">
                            Driving Innovation in Online Education for a <br />
                            <HighlightText text={" Brighter Future"} />
                        </h1>
                        <p className="text-gray-600">
                            Studynotion is at the forefront of driving innovation in online education. We're passionate about
                            creating a brighter future by offering cutting-edge courses, leveraging emerging technologies,
                            and nurturing a vibrant learning community.
                        </p>
                    </header>
                    <div className='flex flex-wrap justify-center gap-4 mt-8'>
                        <img src={BannerImage1} alt="" className="w-80 rounded-lg shadow-lg" />
                        <img src={BannerImage2} alt="" className="w-80 rounded-lg shadow-lg" />
                        <img src={BannerImage3} alt="" className="w-80 rounded-lg shadow-lg" />
                    </div>
                </section>

                {/* Section 2 */}
                <section className="my-12">
                    <Quote />
                </section>

                {/* Section 3 */}
                <section className="bg-gray-100 py-12 rounded-lg shadow-lg">
                    {/* Our Vision & Mission First */}
                    <div className="text-center">
                        <h1 className='text-3xl font-bold text-amber-500'>Our Vision & Mission</h1>
                        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                            With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the
                            way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that
                            combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                        </p>
                        <p className="text-gray-700 max-w-3xl mx-auto mt-4">
                            We are passionate about revolutionizing the way we learn. Our innovative platform combines technology, expertise,
                            and community to create an unparalleled educational experience.
                        </p>
                    </div>

                    {/* Our Founding Story Second */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-8 px-6 lg:px-16 mt-12">
                        {/* Image First */}
                        <div className="md:w-1/2 flex justify-center">
                            <img src={FoundingStory} alt="Founding Story" className="rounded-lg shadow-lg w-full md:w-auto" />
                        </div>

                        {/* Text Second */}
                        <div className="md:w-1/2 space-y-4">
                            <h1 className="text-3xl font-bold bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-transparent">
                                Our Founding Story
                            </h1>
                            <p className="text-gray-700">
                                Our e-learning platform was born out of a shared vision and passion for transforming education.
                                It all began with a group of educators, technologists, and lifelong learners who recognized the
                                need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.
                            </p>
                            <p className="text-gray-700">
                                As experienced educators ourselves, we witnessed firsthand the limitations and challenges of
                                traditional education systems. We believed that education should not be confined to the walls of a
                                classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps
                                and empower individuals from all walks of life to unlock their full potential.
                            </p>
                        </div>
                    </div>
                </section>


                {/* Section 4 - Stats Section */}
                <section className="bg-white py-16">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Our Impact in Numbers
                        </h2>
                        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                            We take pride in our achievements and the impact we've made on learners worldwide.
                            Here are some key stats that highlight our journey.
                        </p>

                        {/* StatsComponent */}
                        <div className="mt-12">
                            <StatsComponent />
                        </div>
                    </div>
                </section>

                {/* Section 5 - Learning Grid */}
                <section className="bg-white pb-6">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center text-gray-800 ">
                            Why Choose <span className="text-blue-600">Us?</span>
                        </h2>
                        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                            We provide a structured learning path designed to help you excel in your career with real-world skills.
                        </p>
                        <div>
                            <LearningGrid />
                        </div>
                        {/* ContactForm Section */}
                        <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-16 rounded-lg shadow-lg">

                            <ContactForm />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>

    );
};

export default About;
