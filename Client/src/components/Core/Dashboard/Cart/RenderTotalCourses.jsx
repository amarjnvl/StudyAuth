import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn'
import { useNavigate } from 'react-router-dom'

const RenderTotalCourses = () => {
  const { total, cart } = useSelector((state) => state.cart)

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id)
    console.log(" Selected courses", courses)
  }

  return (
    <div className="mt-8 p-6 rounded-md border border-[#e2e8f0] bg-white shadow-sm">
      <h1 className="text-2xl font-semibold text-[#1e293b] mb-2">Total:</h1>
      <p className="text-xl font-medium text-[#334155] mb-4">₹ {total}</p>

      <IconBtn
        text="Buy Now"
        onClick={handleBuyCourse}
        customClasses="bg-[#3b82f6] text-white px-5 py-2 rounded-md hover:bg-[#2563eb] transition duration-200"
      />
    </div>
  )
}

export default RenderTotalCourses
