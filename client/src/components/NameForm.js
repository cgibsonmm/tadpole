import React from 'react'

export default function NameForm({ handleInput }) {
  return (
    <form>
      <input onChange={handleInput} type='text' className="name" placeholder="Eg Sally" />
    </form>
  )
}
