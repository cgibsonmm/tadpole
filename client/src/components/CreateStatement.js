import React from 'react'

export default function CreateStatement({ statement }) {
  return (
    <div key={statement.id} className="word-box">
      <p className="box-text">
        {statement.statement.join(' ')}
      </p>
      <button className="edit-button">Edit</button>
    </div>
  )
}
