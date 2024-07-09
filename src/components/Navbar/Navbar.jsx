import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css"
import LogoEcommerce from "../img/LogoE.jpg"


const Navbar = ({categories, title}) => {
    return (
        <>
        <div>{title}</div>

       

        <div className="navContainer">
        <img className="logo" src={LogoEcommerce} alt="logo" />
        <nav className="navItems">  
        <a className="navItem" href="#">{categories[0]}</a>
        <a className="navItem" href="#">{categories[1]}</a>
        <a className="navItem" href="#">{categories[2]}</a>
        <a className="navItem" href="#">{categories[3]}</a>
        <a className="navItem" href="#">{categories[4]}</a>
        </nav>
        </div>

       
        <CartWidget/>
        </>
    );
}

export default Navbar