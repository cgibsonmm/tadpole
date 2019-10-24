import React, { useState } from 'react'

export default function CreateStatement({ statement }) {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(statement.statement.join(' '))
  const [savedText, setSavedText] = useState([])
  const handleClick = () => {
    setToggle(!toggle)
    myStorage();
  }

function myStorage() {

}

  const handleInput = (e) => {
    const currentInput = e.target.value
    setText(currentInput)
  }

  const handleSaveClick = () => {
    handleClick()
    formatTextFormatSubmit(text)
  }

  function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return initialValue;
      }
    })}


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
