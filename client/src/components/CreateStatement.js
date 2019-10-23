import React, { useState } from 'react'

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
    statement = statement.map(sentence => {
      let arr = sentence.split(' ')
      arr.shift()
      return `I ${arr.join(' ')}`
    })
    setSavedText(statement)
  }


  if (toggle) {
    return (
      <div>
      <textarea className="create-template" onChange={handleInput} type ="text" value={text}/>
      <button onClick={handleClick}>save</button>
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
