import React, { useState, useEffect } from 'react'
import ButtonList from './ButtonList';
import NameForm from './NameForm';

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
      <h1 className='title'>
        Tadpole
      </h1>
      <h3>Enter name to start and select three key words</h3>
      <NameForm handleInput={handleInput} />
      <br />
      <br />
      <ButtonList />
    </div>
  )
}
