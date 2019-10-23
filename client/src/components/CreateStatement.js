import React, { useState } from 'react'

export default function CreateStatement({ statement }) {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(statement.statement.join(' '))
  const [savedText, setSavedText] = useState('')
  
  const handleClick = (e) => {
    setToggle(!toggle)
  }

  const handleInput = (e) => {
    const currentInput = e.target.value
    setText(currentInput)
  }

  const formatTextFormatSubmit = () => {
    const text = 'corey is always in good spirits and looking on the bright side. corey is perceived by many as highly intelligent and well articulated. corey is a considerate person who always thinks about how his/her actions affect others.';
    let statement = text.split('. ')
    statement = statement.map(sentence => {
      let arr = sentence.split(' ')
      arr.shift()
      return `I ${arr.join(' ')}`
    })
    console.log(statement)

  }
 

  if (toggle) {
    return (
      <div><textarea onChange={handleInput} type ="text" value={text}/>
      <button onClick={handleClick}>save</button>
      </div>
    )
  }

  return (
    <div key={statement.id} className="word-box">
      <p className="box-text">
        {text}
      </p>
      <button  onClick={handleClick} className="edit-button" value={text}>Edit</button>
    </div>
  )
}
