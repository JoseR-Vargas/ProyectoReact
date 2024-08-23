import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import "./ItemCount.css"


const ItemCount = ({stock, initial, ClickToBuy}) => {

    const navigate = useNavigate ();

    const [qty, setQty] = useState(initial);

    const [itemAdded, setiItemAdded] = useState (false)

    const handleClick = (op) => {
        op === "-" ? clickMenos() : clickMas();
    };

    const clickMenos = () => {
        if(qty === 1 ){
            alert('No se puede seleccionar menos de 1 producto');
            return;
        }
        setQty(qty - 1)
    }

    const clickMas = () => {
        if( qty === stock){
            alert("No hay mas stock")
            return
        }
        setQty(qty + 1)
    }

    const ClickAddToCart = () => {
        ClickToBuy(qty)
        setiItemAdded(true)

        Toastify({
            text: "Product added to cart",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

    const ClickGoToCheckout = () =>{
        setiItemAdded(false)
        navigate("/cart")
    }
   

    return(
    <>
        <div id="div1">
        <button className="btnCount" onClick={ () => handleClick ("-")}>-</button>
        <span>{qty}</span>
        <button className="btnCount" onClick={ () => handleClick ("+")}>+</button>
        </div>

        {itemAdded ? (
        <Button style={{ backgroundColor: '#3e721d', borderColor: '#3e721d' }} onClick={ClickGoToCheckout}>Checkout</Button>
        ) : (
        <Button style={{ backgroundColor: '#3e721d', borderColor: '#3e721d' }} onClick={ClickAddToCart}>Add To Cart</Button>
        )}
    </>

    )
}

export default ItemCount