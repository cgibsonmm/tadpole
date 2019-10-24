import React, { useState, useEffect } from 'react'
import CreateTemplate from './createTemplate'
import ButtonList from './ButtonList';
import Axios from 'axios';

export default function BuildStatement() {
  const [selectedArr, setSelectedArr] = useState([])
  const [statement, setStatement] = useState('')
  const [sendData, setSendData] = useState({
    valid: false,
    statement: '',
    keywords: []
  })



  const trackKeyWords = (arr) => {
    let currentArr = arr
    setSelectedArr(currentArr)
    setSendData(data => ({
      ...data,
      keywords: currentArr
    }))
  }

  //TODO: need to change this 
  const handleSaveClick = (text) => {
    console.log('here')

    Axios.post('/api/createbrandstatement', {
      keywords: selectedArr,
      statement: text
    })
      .then(res => console.log(res))

  }

  return (
    <div>
      <CreateTemplate handleSaveClick={handleSaveClick} trackKeyWords={trackKeyWords} />
    </div>
  )
}
