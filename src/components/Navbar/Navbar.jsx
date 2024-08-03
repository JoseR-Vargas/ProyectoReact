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

        <button className="btnabrir">abrir</button>

        {categories.map((element, index) => {
            return <NavbarLink key={index} category={element} />
        })}
        </nav>
        </div>

        <CartWidget/>

        </nav>
    );
}

export default Navbar