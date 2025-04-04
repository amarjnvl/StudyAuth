import React from 'react'
import { useSelector } from 'react-redux'
import IconBtn from '../../../common/IconBtn';
import { useNavigate } from 'react-router-dom';

const RenderTotalCourses = () => {
  const { total, cart } = useSelector((state) => state.cart);

  const handleBuyCourse = () => {
    const courses = cart.map((course) => course._id);
    console.log(" Selected courses", courses);
  }

  return (
    <div>
      <h1> Total: </h1>
      <p> ₹ {total} </p>
      <IconBtn
        text='Buy Now'
        onClick={handleBuyCourse}
        customClasses=''
      />
    </div>
  )
}

export default RenderTotalCourses
