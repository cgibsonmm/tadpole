import React from 'react'
import arrowup from '../../img/up.png'
import arrowdown from '../../img/down.png'

export default function DirectArrows() {

  return (
    <div className='direct-arrows'>
      <p className='vote'>Vote</p>
      <img src={arrowup} className="arrow"></img>
      <img src={arrowdown} className="arrow"></img>
    </div>
  )
}
