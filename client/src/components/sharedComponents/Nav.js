import React from 'react'
import {Link} from "react-router-dom";


export default function Nav() {
  return (
    <header>
      <div className="nav">
      <Link to="/" className="links">Home</Link>
      <Link to="/createtemplate" className="links">Create Template</Link>
      <Link to="/favorites" className="links">Favorites</Link>
      <Link to="/toptemplates" className="links">Top Templates</Link>
      </div>
    </header>
  )
}
