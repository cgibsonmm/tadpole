import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function CreateStatement({ statement }) {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(statement.statement.join(' '))
  const [savedText, setSavedText] = useState([])
  const handleClick = () => {
    setToggle(!toggle)
  }

  const handleInput = (e) => {
    const currentInput = e.target.value
    setText(currentInput)
  }

  const handleSaveClick = () => {
    handleClick()
    formatTextFormatSubmit(text)
  }

  const formatTextFormatSubmit = (text) => {
    let statement = text.split('. ')
    let formattedStatement = statement.map(sentence => {
      let arr = sentence.split(' ')
      arr.shift()
      return `I ${arr.join(' ')}`
    })
    setSavedText(formattedStatement)
  }

  useEffect(() => {
    if (savedText.length === 3) {
      saveStatement()
    }
  }, [savedText])

  const saveStatement = () => {
    Axios.get('/api/keywords')
      .then(res => console.log(res.data))
  }

  if (toggle) {
    return (
      <div>
        <textarea className="create-template" onChange={handleInput} type="text" value={text} />
        <button onClick={handleSaveClick}>save</button>
      </div>
    )
  }

  return (
    <div key={statement.id} className="word-box">
      <p className="box-text">
        {text}
      </p>
      <button onClick={handleClick} className="edit-button" value={text}>Edit</button>
    </div>
  )
}
