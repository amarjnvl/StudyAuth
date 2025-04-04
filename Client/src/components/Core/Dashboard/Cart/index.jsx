import React from 'react'
import { useSelector } from 'react-redux'
import RenderCartCourses from './RenderCartCourses'
import RenderTotalCourses from './RenderTotalCourses'

const Cart = () => {
  const { total, totalItems } = useSelector((state) => state.cart)

  return (
    <div className="min-h-screen bg-[#f9fafb] px-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#0f172a] mb-2">Your Cart</h1>
          <p className="text-[#475569] text-sm">{totalItems} Courses in Cart</p>
        </div>

        {/* Cart Content */}
        {
          total > 0 ? (
            <div className="space-y-8">
              <RenderCartCourses />
              <RenderTotalCourses />
            </div>
          ) : (
            <div className="text-center mt-20">
              <p className="text-lg text-[#64748b]">No Courses in Cart</p>
              <a
                href="/courses"
                className="mt-4 inline-block text-sm text-[#3b82f6] font-medium hover:underline"
              >
                Click here to browse courses
              </a>
            </div>
          )
        }

      </div>
    </div>
  )
}

export default Cart
