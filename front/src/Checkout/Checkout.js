import React from 'react'
import './Checkout.scss'
import image from './book.jpeg'
import { Link } from 'react-router-dom'
function Checkout() {
  return (
    <div className='checkoutWrapper'>
        <Link to='/Homepage'>Back to Library</Link>
        <div className="checkOutBox">
            <img src={image} alt="" />
            <h1>Book Name</h1>
            <h3>Author Name</h3>
            <input type="text" placeholder='Student Name' />
            <input type="text" placeholder='Student Reg Number'/>
            <input type="text" placeholder='Student Phone Number'/>
            <input type="text" placeholder='Student Email Address'/>
            <button>Issue Book</button>
        </div>
    </div>
  )
}

export default Checkout