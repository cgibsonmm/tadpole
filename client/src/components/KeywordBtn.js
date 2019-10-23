import React, { useState, useEffect } from 'react'

export default function KeywordBtn({ button, addClicked }) {
  const [clicked, setClicked] = useState(false);
  const { word } = button;

  const handleClick = () => {
    addClicked(button.id, !clicked)
    setClicked(!clicked)
  }

  return (
    <button
      onClick={handleClick}
      className={clicked ? 'buttons clicked' : 'buttons'}
    >
      {word}
    </button>
  )
}
