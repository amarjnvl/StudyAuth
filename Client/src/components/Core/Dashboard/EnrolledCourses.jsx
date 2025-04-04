import React, { useEffect, useState } from 'react'
import Spinner from '../../common/Spinner'
import { useSelector } from 'react-redux'
import { getUserEnrolledCourses } from '../../../Services/operations/profileAPI'
import ProgressBar from "@ramonak/react-progress-bar"

const EnrolledCourses = () => {
    const { token } = useSelector(state => state.auth)
    const [enrolledCourses, setEnrolledCourses] = useState(null)

    const getEnrolledCourses = async () => {
        try {
            const response = await getUserEnrolledCourses(token)
            setEnrolledCourses(response)
        } catch (error) {
            console.error("Error fetching enrolled courses:", error)
        }
    }

    useEffect(() => {
        getEnrolledCourses()
    }, [])

    return (
        <div className="w-11/12 mx-auto mt-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-[#1e293b]">Enrolled Courses</h2>

            {!enrolledCourses ? (
                <div className="flex items-center justify-center h-[200px]">
                    <Spinner />
                </div>
            ) : enrolledCourses.length === 0 ? (
                <div className="flex items-center justify-center h-[200px]">
                    <h1 className="text-xl font-semibold text-[#1e293b]">No Enrolled Courses</h1>
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Header */}
                    <div className="grid grid-cols-12 bg-[#f3f4f6] px-6 py-3 rounded-md text-[#1e293b] font-semibold">
                        <p className="col-span-6">Course</p>
                        <p className="col-span-3">Duration</p>
                        <p className="col-span-3">Progress</p>
                    </div>

                    {/* Course Rows */}
                    {enrolledCourses.map((course, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-12 items-center bg-[#ffffff] border border-[#e2e8f0] px-6 py-4 rounded-lg shadow-sm"
                        >
                            {/* Course Info */}
                            <div className="col-span-6 flex gap-4 items-start">
                                <img
                                    src={course.thumbnail}
                                    alt={course.courseName}
                                    className="w-[80px] h-[60px] rounded-md object-cover border border-[#e2e8f0]"
                                />
                                <div className="flex flex-col">
                                    <p className="text-md font-semibold text-[#0f172a]">{course.courseName}</p>
                                    <p className="text-sm text-[#475569]">{course.courseDescription}</p>
                                </div>
                            </div>

                            {/* Duration */}
                            <div className="col-span-3 text-[#334155] font-medium text-sm">
                                {course.totalDuration}
                            </div>

                            {/* Progress */}
                            <div className="col-span-3 flex flex-col gap-1">
                                <p className="text-sm text-[#0f172a] font-medium">
                                    {course.progressPercentage ?? 0}% completed
                                </p>
                                <ProgressBar
                                    completed={course.progressPercentage ?? 0}
                                    bgColor="#2563eb"
                                    baseBgColor="#e2e8f0"
                                    height="8px"
                                    isLabelVisible={false}
                                    borderRadius="4px"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default EnrolledCourses
