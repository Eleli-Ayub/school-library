import React from 'react'
import Homepage from '../Homepage/Homepage';
import { Link } from 'react-router-dom'
import './Addbook.scss'

function Addbook() {
  return (
    <div className='addBookWrapper'>
        <Link to='/Homepage'>Back to Library</Link>
        <div className="title">
            <h1>Add Book</h1>
        </div>
        <div className="inputDiv">
            <label htmlFor="fileInput">Click to Add Image for Book</label>
            <input type="file" id='fileInput'/>
            <input type="text" placeholder='Book Name'/>
            <input type="text" placeholder='Author Names'/>
            <input type="number" placeholder='Copies Available'/>
            <button>Add New Book</button>
        </div>
    </div>
  )
}

export default Addbook