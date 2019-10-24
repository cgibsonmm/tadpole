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
            <p className='instructions'>
        Write out your written statement inside the box and select three key words associated to your statement.
        Click the save button once you're happy with your statement and word choices.
      </p>
          <ButtonList trackKeyWords={trackKeyWords} />
          <button onClick={handleClick} className="save-button">Save</button>
          </div>
        </body>
      </>
    </div>
  )
}
