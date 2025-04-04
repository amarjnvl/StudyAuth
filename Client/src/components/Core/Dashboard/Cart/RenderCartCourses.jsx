import React from 'react'
import { FaStar } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../../../slices/cartSlice'

const RenderCartCourses = () => {

	const { cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<div>
			{
				cart.map((course, index) => (
					<div key={index}>
						<div>
							<img
								src={course?.thumbnail}
								alt={course?.name}
							/>

							<div>
								<p> {course?.courseName} </p>
								<p> {course?.category?.name} </p>

								<div>
									<span>  </span>
									<ReactStars
										count={5}
										value={course?.ratingAndReviews?.reduce((acc, curr) => acc + curr.rating, 0) / course?.ratingAndReviews?.length}
										size={20}
										activeColor="#ffd700"
										edit={false}
										half={true}
										emptyIcon={<FaStar />}
										fullIcon={<FaStar />}
									/>
									<span>
										{course?.ratingAndReviews?.length} Ratings
									</span>
								</div>
							</div>
						</div>
						<div>
							<button
								onClick={() => dispatch(removeFromCart(course._id))}
							>
								<RiDeleteBin6Line />
								Remove Course
							</button>
							<p>
								₹ {course?.price}
							</p>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default RenderCartCourses