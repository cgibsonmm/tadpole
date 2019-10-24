import React, { useState, useEffect } from 'react'

import { Redirect } from 'react-router-dom';
import CreateTemplate from './CreateTemplate'
import ButtonList from './ButtonList';
import Axios from 'axios';

export default function BuildStatement() {
  const [selectedArr, setSelectedArr] = useState([])
  const [res, setRes] = useState([])
  const [resSaved, setResSaved] = useState(false)
  const [sendData, setSendData] = useState({
    statement: '',
    keywords: []
  })

  const handleSaveClick = (text) => {
    let length = text.split('').length
    setSendData(data => ({
      ...data,
      statement: text,
    }))
    postStatement(text)
  }

  const postStatement = (text) => {
    Axios.post('/api/createbrandstatement', {
      keywords: sendData.keywords,
      statement: text
    })
      .then(res => {
        setRes(res.data)
        setResSaved(true)
      })

      .catch(e => console.log(e))
  }

  const trackWords = (arr) => {
    console.log('helloi')
    let currentArr = arr
    setSelectedArr(currentArr)
    setSendData(data => ({
      ...data,
      keywords: currentArr
    }))
  }
  if (resSaved) {
    return <Redirect to={{ pathname: `/favorites`, state: res }} />
  }
  return (
    <div>
      <CreateTemplate handleSaveClick={handleSaveClick} trackWords={trackWords} />
    </div>
  )
}

