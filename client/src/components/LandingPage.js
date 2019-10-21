import React from 'react'

export default function LandingPage() {
  return (
    <div className="home">
      <h1 className = 'title'>
        Tadpole
      </h1>
      <h3>Enter name to start and select three key words</h3>
      <input type='text' className="name" placeholder="Eg Sally"/>
      <br/>
      <br/>
      <button>Funny</button>
      <button>Happy</button>
      <button>Intelligent</button>
      <button>Kind</button>
      <button>Honest</button>
      <br/>
      <button>Creative</button>
      <button>Driven</button>
      <button>Leader</button>
    </div>
  )
}
