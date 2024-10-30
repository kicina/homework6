import React from 'react'
import './Card.css'

export default function Card({ imgsrc }) {
  return (
    <div className='card'>
        <img className='img' src={imgsrc} alt="" />
    </div>
  )
}
