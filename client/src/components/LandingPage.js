import React, { useState, useEffect } from 'react'

export default function LandingPage() {
  const [keywords, setKeyWords] = useState([]);

  useEffect(() => {
    // Axios.get(URL)
  }, [])

  return (
    <div className="home">
      <h1 className = 'title'>
        Tadpole
      </h1>
      <h5>Enter name to start and select three key words</h5>
      <input type='text' className="name" placeholder="Eg Sally"/>
      <br/>
      <br/>
      <div className="buttons">
      <button className="pickbutton">Funny</button>
      <button className="pickbutton">Happy</button>
      <button className="pickbutton">Intelligent</button>
      <button className="pickbutton">Kind</button>
      <button className="pickbutton">Honest</button>
      <button className="pickbutton">Creative</button>
      <button className="pickbutton">Driven</button>
      <button className="pickbutton">Leader</button>
      </div>
    </div>
  )
}
