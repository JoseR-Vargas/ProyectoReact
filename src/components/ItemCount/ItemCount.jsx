import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ({stock, initial}) => {
    const [qty, setQty] = useState(initial);

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

    return(
        <div id="div1">
            <button className="btnCount" onClick={ () => handleClick ("-")}>-</button>
            <span>{qty}</span>
            <button className="btnCount" onClick={ () => handleClick ("+")}>+</button>
        </div>
    )
}

export default ItemCount