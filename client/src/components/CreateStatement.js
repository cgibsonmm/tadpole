import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import picture from '../img/pencil.png';

export default function CreateStatement({ statement }) {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState(statement.statement.join(' '))
  const [savedText, setSavedText] = useState([])

  // const [item, setItem] = useLocalStorage('name', 'Initial Value');

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
    // setItem(text)
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
      <img onClick={handleClick} className="edit-button" value={text} src={picture}></img>
    </div>
  )
}
