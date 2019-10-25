import React from 'react'
import picture from '../../img/pencil.png';
import DirectArrows from './DirectArrows'

export default function WordBox({ statement }) {
  console.log(statement)
  return (
    <>
      <div className="word-box">
        {statement.statement}
        <img className="edit-button" src={picture}></img>
      </div>
      <DirectArrows rank={statement.rank} id={statement.id} />
    </>
  )
}
