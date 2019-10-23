import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import KeywordBtn from './KeywordBtn';

export default function ButtonList({ trackKeyWords }) {
  const URL = 'api/keywords'
  const [keywords, setKeywords] = useState([])
  const [clickedArr, setClickedArr] = useState([])

  useEffect(() => {
    Axios.get(URL).then(res => setKeywords(res.data))
  }, [])

  const addClicked = (id, boolean) => {
    let arr = clickedArr
    if (arr.includes(id)) {
      arr = arr.filter(number => {
        return number != id
      })
    } else if (arr.length < 3) {
      arr.push(id)
    }
    if (arr.length === 3) {
      trackKeyWords(arr)
    }
    setClickedArr(arr)
  }

  const sendLength = () => {
    return clickedArr.length
  }




  return (
    < div className="buttonsBox" >
      {
        keywords.map(button => (
          <KeywordBtn key={button.id} button={button} addClicked={addClicked} sendLength={sendLength} />
        ))
      }
    </div >
  )

}
