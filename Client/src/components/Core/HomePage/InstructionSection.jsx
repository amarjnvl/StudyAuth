import React from 'react'
import become_an_instructor from '../../../assets/Images/become_an_instructor.jpeg'
import HighlightText from './HighlightText'
import CTAButton from './Button'
import { FaArrowRight } from 'react-icons/fa'


const InstructionSection = () => {
    return (
        <div className='-mt-10 w-9/12'>
            <div className='flex flex-row gap-20 items-center'>
                <div className='w-[50%]'>

                    <img src={become_an_instructor} alt="instructor" />
                </div>

                <div className='w-[50%] flex flex-col gap-10 '>
                    <div className='text-4xl font-semibold w-[50%]'>
                        Become an <HighlightText text={"instructor"} />
                    </div>
                    <p className='font-medium text-[16px] w-[79%] text-[#838894]'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>

                    <div className='w-fit'>
                        <CTAButton active={1} linkto={'/signup'}>
                            <div className='flex items-center gap-2'>
                                Start teaching today
                                <FaArrowRight />
                            </div>
                        </CTAButton>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default InstructionSection