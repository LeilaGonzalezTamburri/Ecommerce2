import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar" >
            <Link to='/'>
            <h3>Games for allnighters</h3>
            </Link>
            <div className= 'Categories'>
                <NavLink to={'/category/RPG'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>RPG</NavLink>
                <NavLink to={'/category/singlePlayer'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>singlePlayer</NavLink>
                <NavLink to={'/category/MMO'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>MMO</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar