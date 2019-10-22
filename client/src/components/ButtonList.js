import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Axios from 'axios'
import KeywordBtn from './KeywordBtn';

export default function ButtonList() {
  const URL = 'api/keywords'
  const [keywords, setKeywords] = useState([])
  const [clickedArr, setClickedArr] = useState([])

  useEffect(() => {
    Axios.get(URL).then(res => setKeywords(res.data))
  }, [])

  const addClicked = (e) => {
    const arr = clickedArr;
    if (clickedArr.length >= 3) {
      arr.shift()
    }
    arr.push(e)
    setClickedArr(arr)
  }

  return (
    <div className="buttonsBox">
      {keywords.map(button => (
        <KeywordBtn key={button.id} button={button} addClicked={addClicked} />
      ))}
    </div>
  )

}
