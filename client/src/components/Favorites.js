import React, { useState, useEffect } from 'react'
import Nav from './sharedComponents/Nav';
import Axios from 'axios';
import picture from '../img/pencil.png';

export default function Favorties({ location }) {
  const [data, setData] = useState([])
  const [input, setInput] = useState('')
  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    if (location.state) {
      Axios.get(`/api/brandstatement/${location.state.id}`)
        .then(res => {
          setData(res.data)
          setInput(res.data.statement)
        })
    }
  }, [])

  const handleInput = (e) => {
    let text = e.target.value
    setInput(text)
  }

  const handleEditClick = () => {
    setEditOpen(!editOpen)
  }

  const handleSaveClick = () => {
    setEditOpen(!editOpen)
    Axios.put(`/api/brandstatement/${location.state.id}`, {
      statement: input
    }).then(res => console.log('saved'))
  }

  if (editOpen) {
    return (
      <>
        <Nav />
        <body className="body">
          <div className="template-boxes">
            <div>
              <textarea className="create-template" onChange={handleInput} type="text" value={input} />
              <button onClick={handleSaveClick}>save</button>
            </div>
          </div>
        </body>
      </>
    )
  }

  return (
    <>
      <Nav />
      {console.log(input)}
      <body className="body">
        <div className="template-boxes">
          <div className="word-box">
            {data.statement}
            <img onClick={handleEditClick} className="edit-button" src={picture}></img>
          </div>
        </div>
      </body>

    </>
  )
}