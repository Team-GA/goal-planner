import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <h2>Welcome to Passion Planner, this is the landing page</h2>
      <Link to="/login"><button>login</button></Link>
      <Link to="/register"><button>register</button></Link>
    </div>
  )
}

export default Landing
