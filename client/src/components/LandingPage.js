import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import ButtonList from './ButtonList';
import NameForm from './NameForm';
import picture from './tadpole.png'

export default function LandingPage() {
  const [userSelection, setUserSelection] = useState({
    name: '',
    keywords: [],
    ready: false,
  });

  const handleInput = (e) => {
    let input = e.target.value
    setUserSelection(prevState => ({
      ...prevState,
      name: input
    }))
  }

  const trackKeyWords = (arr) => {
    let keyArr = arr;
    setUserSelection(prevState => ({
      ...prevState,
      keywords: keyArr,
      ready: true
    }))
  }

  if (userSelection.ready) {
    return <Redirect to={{ pathname: '/main', state: userSelection }} />
  }



  return (
    <div className="home">
      <img src={picture} className="tadpole" />
      <h1 className='title'>
        Tadpole
      </h1>
      <h5>let us help you find your personal brand</h5>
      <h4>Enter name to start and select 3 key words</h4>
      <NameForm handleInput={handleInput} />
      <br />
      <br />
      <ButtonList trackKeyWords={trackKeyWords} />
    </div>
  )
}
