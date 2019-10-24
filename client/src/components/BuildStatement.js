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

  const trackKeyWords = (arr) => {
    let currentArr = arr
    setSelectedArr(currentArr)
    setSendData(data => ({
      ...data,
      keywords: currentArr
    }))
  }

  const handleSaveClick = (text) => {
    let length = text.split('').length
    setSendData(data => ({
      ...data,
      statement: text,
    }))
    postStatement()
  }

  const postStatement = () => {
    Axios.post('/api/createbrandstatement', {
      keywords: sendData.keywords,
      statement: sendData.statement
    })
      .then(res => {
        setRes(res.data)
        setResSaved(true)
      })

      .catch(e => console.log(e))
  }

  if (resSaved) {
    return <Redirect to={{ pathname: `/mybrandstatement/${res.id}`, state: res }} />
  }

  return (
    <div>
      <CreateTemplate handleSaveClick={handleSaveClick} trackKeyWords={trackKeyWords} />
    </div>
  )
}

