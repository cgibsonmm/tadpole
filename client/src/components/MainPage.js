import React, { useState, useEffect } from 'react'
import Nav from './sharedComponents/Nav';
import Axios from 'axios';



export default function MainPage({ location }) {
  const { state } = location;
  console.log(state)
  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get('api/sentences')
      .then(res => setData(res.data))
      .catch(e => console.log(e.message))
  }, [])


  return (
    <>
      <div className="head">
        <Nav />
      </div>
      <div className="template-boxes">
        {data.map(template => (
          <div key={template.id} className="word-box">
            <p className="box-text">
            {template.string}
            </p>
            <button className="edit-button">Edit</button>
          </div>
        ))}
      </div>
    </>
  )
}
