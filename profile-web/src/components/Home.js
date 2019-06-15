import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <div className="home-page">
      <div className="home-card">
        <h2>IronProfile</h2>
        <p>oishsgoirhgoidghoihoi</p>
        <Link className="btn btn-primary" to="/signup">Sign up</Link>
        <Link className="btn btn-primary" to="/login">Login</Link>
      </div>
    </div>
  )
}

export default Home;