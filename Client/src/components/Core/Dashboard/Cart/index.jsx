import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses'
import RenderTotalCourses from './RenderTotalCourses'

const Cart = () => {

  const { total, totalItems } = useSelector((state) => state.cart)

  return (
    <div>
      <h1> Your Cart </h1>
      <p> {totalItems} Courses in Cart </p>


      {
        total > 0 ? (
          <div>
            <RenderCartCourses />
            <RenderTotalCourses />
          </div>
        ) : (
          <div>
            <p> No Courses in Cart </p>
            <a href="/courses">Click here to buy courses</a>
          </div>
        )
      }
    </div>
  )
}

export default Cart