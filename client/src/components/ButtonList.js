import React from 'react'

const keywords = [
  'Funny',
  'Happy',
  'Intelligent',
  'Kind',
  'Honest',
  'Creative',
  'Driven',
  'Leader'
];

export default function ButtonList() {
  return (
    <div className="buttonsBox">
      {keywords.map((word, index) => (
        <button key={index} className="buttons">{word}</button>
      ))}
       </div>
  )
 
}
