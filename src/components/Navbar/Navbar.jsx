import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"
import NavbarLink from "./NavbarLink";
import LogoEcommerce from "../img/LogoE.jpg"
import { categories } from "../../mock/mockData";
import { Link } from "react-router-dom";


const Navbar = ({ title}) => {
    return (
        <nav>
        <div>{title}</div>

       

        <div className="navContainer">
        <Link to="/"><img className="logo" src={LogoEcommerce} alt="logo" /></Link>
        <nav className="navItems">  

        {categories.map((element, index) => {
            return <NavbarLink key={index} category={element} />
        })}

        {/* <a className="navItem" href="#">{categories[0]}</a>
        <a className="navItem" href="#">{categories[1]}</a>
        <a className="navItem" href="#">{categories[2]}</a>
        <a className="navItem" href="#">{categories[3]}</a>
        <a className="navItem" href="#">{categories[4]}</a> */}
        </nav>
        </div>

       
        <CartWidget/>
        </nav>
    );
}

export default Navbar