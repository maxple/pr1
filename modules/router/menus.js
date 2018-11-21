import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './stylesheets/menus.scss'

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray',
}

export const MainMenu = () =>
  <nav className="main-menu">
    <NavLink to="/"><FaHome /></NavLink>
    <NavLink to="/about"
             activeStyle={selectedStyle}>[About]</NavLink>
    <NavLink to="/events"
             activeStyle={selectedStyle}>[Events]</NavLink>
    <NavLink to="/products"
             activeStyle={selectedStyle}>[Products]</NavLink>
    <NavLink to="/contact"
             activeStyle={selectedStyle}>[Contact Us]</NavLink>
  </nav>
