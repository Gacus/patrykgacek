import { Link } from "react-router-dom"
import logo from '../../images/logo.svg'
import styles from './navBar.module.scss'

const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <Link to='/'>
        <img src={logo} alt='Logo'/>
      </Link>
    </nav>
  )
}

export default NavBar