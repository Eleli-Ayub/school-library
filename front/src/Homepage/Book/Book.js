import React from 'react'
import { useNavigate } from "react-router-dom"
import './Book.scss'
import book from '../book.jpeg'

function Book() {
  const navigate = useNavigate();
  return (
    <div className='bookWrapper'> 
        <img src={ book } alt="" />
        <h2>Book Name</h2>
        <p>Author</p>
        <h4>500 Reads</h4>
        <h3>20 copies available</h3>
        <button onClick={()=>{
          navigate('/Checkout')
        }

          }
          >Issue Book</button>
    </div>
  )
}

export default Book