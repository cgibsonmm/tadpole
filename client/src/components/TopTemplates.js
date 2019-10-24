import React from 'react'
import Nav from './sharedComponents/Nav';
import picture from '../img/pencil.png';
import arrowdown from '../img/down.png';
import arrowup from '../img/up.png';


export default function TopTemplates() {
    return(
        <>
        <Nav />
        <body className="body">
        <div className="template-boxes">
        <div className="word-box">
        <img className="edit-button" src={picture}></img>
            </div>
            <div className='direct-arrows'>
      <p className='vote'>Vote</p>
      <img src={arrowup} className="arrow"></img>
      <img src={arrowdown} className="arrow"></img>
    </div>
            </div>
            </body>
    </>
    )
}