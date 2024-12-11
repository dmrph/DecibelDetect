import React from 'react'
import styles from './HomePage.css'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className = {'home'}>
        <div className="content">
          <div className="info">
            <h1>Decibel Detector and Sound Mapper! </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta labore rerum commodi architecto doloribus. In fuga odio ad aliquam recusandae accusantium adipisci, ut, incidunt neque iure exercitationem assumenda totam dolorum?</p>
            <a href="#" className="btn">Join Us!</a>
          </div>
          
          
        </div>

    </div>
  )
}

export default HomePage