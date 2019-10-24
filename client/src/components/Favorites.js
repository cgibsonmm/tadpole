import React from 'react'
import Nav from './sharedComponents/Nav';
import picture from '../img/pencil.png';

export default function Favorties() {
    return(
        <>
        <Nav />
        <body className="body">
        <div className="template-boxes">
        <div className="word-box">
        <img className="edit-button" src={picture}></img>
            </div>
            </div>
    </body>
    </>
    )
}