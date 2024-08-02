import { Link, NavLink } from "react-router-dom"

const NavbarLink = ({category}) => {
    return(
        <NavLink to={`/pepito/${category}`} className= "navItem">
            {category}
        </NavLink>
    )
}
export default NavbarLink