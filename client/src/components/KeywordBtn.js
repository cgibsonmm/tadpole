import React, { useState, useEffect } from 'react'

export default function KeywordBtn({ button, addClicked }) {
  const [clicked, setClicked] = useState(false);
  const { word } = button;

  const handleClick = (e) => {
    setClicked(!clicked)
    addClicked(button.id)
  }
  return (
    <button onClick={handleClick} className={clicked ? 'buttons clicked' : 'buttons'}>{word}</button>
  )
}
