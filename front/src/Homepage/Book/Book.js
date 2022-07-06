import React from 'react'
import './Book.scss'
import book from '../book.jpeg'

function Book() {
  return (
    <div className='bookWrapper'> 
        <img src={ book } alt="" />
        <h2>Book Name</h2>
        <p>Author</p>
        <h4>500 Reads</h4>
        <h3>20 copies available</h3>
        <button>Issue Book</button>
    </div>
  )
}

export default Book