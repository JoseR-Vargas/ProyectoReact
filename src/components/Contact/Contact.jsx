import { useCartContext } from "../../context/CartContext"

const Contact = () => {
    const {titulo} = useCartContext();
    return <h1>Contact form {titulo}</h1>
}

export default Contact