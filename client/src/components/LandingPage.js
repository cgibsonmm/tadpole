import React, { useState, useEffect } from 'react'
import ButtonList from './ButtonList';
import NameForm from './NameForm';
import picture from './tadpole.png'

export default function LandingPage() {
  // State
  const [keywords, setKeyWords] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    // Axios.get(URL)
  }, [])

  const handleInput = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="home">
      <img src={picture} className="tadpole"/>
      <h1 className='title'>
        Tadpole
      </h1>
      <h5>let us help you find your personal brand</h5>
      <h4>Enter name to start and select three key words</h4>
      <NameForm handleInput={handleInput} />
      <br />
      <br />
      <ButtonList />
    </div>
  )
}
