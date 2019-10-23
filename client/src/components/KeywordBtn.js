import React, { useState, useEffect } from 'react'

export default function KeywordBtn({ button, addClicked, sendLength }) {
  const [clicked, setClicked] = useState(false);
  const { word } = button;

  const handleClick = () => {
    console.log(sendLength())
    if (sendLength() <= 3) {
      addClicked(button.id, !clicked)
      setClicked(!clicked)
    }
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
