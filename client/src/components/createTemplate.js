import React, { useState } from 'react'
import Nav from './sharedComponents/Nav';
import ButtonList from './ButtonList';

export default function CreateTemplate({ handleSaveClick, trackKeyWords }) {
  const [input, setInput] = useState('')
  const handleInput = (e) => {
    let string = e.target.value;
    setInput(string)
  }
  const handleClick = (e) => {
    e.preventDefault()
    handleSaveClick(input)
  }



  return (
    <div>
      <>
        <Nav />
        <body className="body">
          <div className="template-body">
            <textarea onChange={handleInput} value={input} className="create-template" placeholder="Enter text here"></textarea>
            <button onClick={handleClick} className="save-button">Save</button>
          </div>
          <ButtonList trackKeyWords={trackKeyWords} />
        </body>
      </>
    </div>
  )
}
