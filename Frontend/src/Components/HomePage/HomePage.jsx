import React from 'react'
import styles from './HomePage.css'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className = {'home'}>
        <div className="content">
          <div className="info">
            <h1>Decibel Detector and Sound Mapper! </h1>
            <p>Discover the power of technology to monitor and map noise levels in your area. Our application provides real-time decibel data to help you identify and avoid noise pollution hotspots. Whether you’re looking to find quieter spaces or contribute to a growing database of sound levels, Decibel Detect makes it easy to record, upload, and visualize noise data on an interactive map.</p>
            <a href="#" className="btn">Join Us!</a>
          </div>
          
          
        </div>

    </div>
  )
}

export default HomePage