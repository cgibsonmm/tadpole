import React from 'react'
import {Link} from "react-router-dom";


export default function Nav() {
  return (
    <header>
      <div className="nav">
      <Link to="/" className="links">Home</Link>
      <Link to="/" className="links">Create Template</Link>
      <Link to="/" className="links">Favorites</Link>
      <Link to="/" className="links">Top Templates</Link>
      </div>
    </header>
  )
}
