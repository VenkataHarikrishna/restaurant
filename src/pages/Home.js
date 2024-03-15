import React from 'react'
import Layout1 from '../components/Layout/Layout1'
import { Link } from 'react-router-dom'
import Banner from '../Images/Banner1.jpg'
import '../styles/HomeStyles.css'
const Home = () => {
  return (
    <Layout1>
       <div className='home' style={{ backgroundImage: `url(${Banner})`}}>
        <div className='headerContainer'>
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to='/menu'>
            <button>ORDER NOW</button>
          </Link>
        </div>

       </div>

        </Layout1>
  )
}

export default Home