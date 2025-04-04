import React from 'react'
import { FaStar } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../../../slices/cartSlice'

const RenderCartCourses = () => {
	const { cart } = useSelector((state) => state.cart)
	const dispatch = useDispatch()

	return (
		<div className="space-y-6">
			{
				cart.map((course, index) => (
					<div
						key={index}
						className="flex flex-col md:flex-row justify-between items-center bg-white border border-[#e2e8f0] rounded-lg shadow-sm p-4"
					>
						{/* Left: Course Info */}
						<div className="flex flex-col md:flex-row gap-4 items-center">
							<img
								src={course?.thumbnail}
								alt={course?.name}
								className="w-[120px] h-[90px] object-cover rounded-md"
							/>

							<div className="space-y-1">
								<p className="text-lg font-semibold text-[#1e293b]">{course?.courseName}</p>
								<p className="text-sm text-[#64748b]">{course?.category?.name}</p>

								{/* Ratings */}
								<div className="flex items-center gap-2 text-[#475569] text-sm">
									<ReactStars
										count={5}
										value={
											course?.ratingAndReviews?.reduce((acc, curr) => acc + curr.rating, 0)
											/ course?.ratingAndReviews?.length
										}
										size={18}
										activeColor="#facc15"
										edit={false}
										half={true}
										emptyIcon={<FaStar />}
										fullIcon={<FaStar />}
									/>
									<span>{course?.ratingAndReviews?.length} Ratings</span>
								</div>
							</div>
						</div>

						{/* Right: Remove + Price */}
						<div className="flex flex-col items-center gap-2 mt-4 md:mt-0">
							<button
								onClick={() => dispatch(removeFromCart(course._id))}
								className="flex items-center gap-2 text-[#ef4444] hover:text-[#dc2626] transition"
							>
								<RiDeleteBin6Line className="text-lg" />
								<span className="text-sm">Remove Course</span>
							</button>
							<p className="text-[#0f172a] font-medium">₹ {course?.price}</p>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default RenderCartCourses
