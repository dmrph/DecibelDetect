import {Link, Outlet} from "react-router-dom"
import styles from "./HomePageLayout.css"
export function HomePageLayout(){
    return(
      <>
      <nav className = 'navbar'>
      <a href="#" className = 'logo'> Decibel Detect</a>
      <ul>
        <li> <Link to='/Home' style = {HomePageLayout.a}>Home</Link></li>
        <li> <Link to='/Home/Upload' style = {HomePageLayout.a}>Upload</Link></li>
        <li> <Link to='/Home/Profile' style = {HomePageLayout.a}>Profile</Link></li>
      </ul>
    </nav>
    <Outlet />
    </>
    )
}