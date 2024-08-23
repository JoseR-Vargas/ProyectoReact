import "./CartWidget.css"
import { useCartContext } from "../../context/CartContext"

const CartWidget = () => {

    const {qtyItems} =useCartContext ();

    return(
        <div className="carrito"> {qtyItems} 🛒 Car</div>
    )
}

export default CartWidget