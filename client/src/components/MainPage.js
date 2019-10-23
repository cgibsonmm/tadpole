import React, { useState, useEffect } from 'react'
import Nav from './sharedComponents/Nav';
import Axios from 'axios';



export default function MainPage({ location }) {
  const { state } = location;
  const toPass = state.keywords

  const [data, setData] = useState([])

  useEffect(() => {
    Axios.get(`api/allsentenceswithkeyword/${toPass}`, {
      params: toPass
    })
      .then(res => formatSentences(res.data))
      .catch(e => console.log(e.message))
  }, [])

  const formatSentences = (resData) => {
    const statements = [{
      id: 1,
      statement: []
    }, {
      id: 2,
      statement: []
    }, {
      id: 3,
      statement: []
    }]
    resData.forEach((item, index) => {
      item.forEach((i, idx) => {
        console.log(i)
        statements[idx].statement.push(`${state.name} ${i.string}.`)
      })
    })
    setData(statements)
  }


  return (
    <>
      <div className="head">
        <Nav />
      </div>
      <div className="template-boxes">
        {console.log(data)}
        {data.map(statment => (
          <div key={statment.id} className="word-box">
            <p className="box-text">
              {statment.statement.join(' ')}
            </p>
            <button className="edit-button">Edit</button>
          </div>
        ))}
      </div>
    </>
  )
}
