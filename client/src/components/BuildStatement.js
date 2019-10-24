import React, { useState } from 'react'
import CreateTemplate from './CreateTemplate'
import ButtonList from './ButtonList';

export default function BuildStatement() {
  const [selectedArr, setSelectedArr] = useState([])

  const trackKeyWords = (arr) => {
    let currentArr = arr
    setSelectedArr(currentArr)
  }

  const handleSaveClick = (text) => {
    console.log(text)
  }

  return (
    <div>
      <CreateTemplate handleSaveClick={handleSaveClick} trackKeyWords={trackKeyWords} />
    </div>
  )
}
