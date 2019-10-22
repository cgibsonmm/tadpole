import React from 'react'
import Nav from './sharedComponents/Nav';


export default function MainPage() {
  return (
    <>
   <div className="head">
      <Nav />
    </div>
    <div className="template-boxes">
      <div className="box1" className="word-box">
        Top Template 1
      </div>
      <div className="box2" className="word-box">
        Top Template 2
      </div>
      <div className="box3" className="word-box">
        Top Template 3
      </div>
      <div className="box4" className="word-box">
        Top Template 4
      </div>
    </div>
    </>
  )
}
