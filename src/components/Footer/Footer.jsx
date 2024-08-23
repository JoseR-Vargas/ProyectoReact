import "./Footer.css"
import { items } from "../../mock/mockData"
import { db } from "../../firebase/dbConnection"
import { collection, addDoc } from "firebase/firestore"

const Footer = () => {

    const addProducts = () => {
        const productsCollection = collection(db, "productos");

        items.forEach((item)=>{
            addDoc(productsCollection, item)
            .then(doc => {
                console.log("producto agregado con ID", doc.id); 
            })
            .catch(error =>{
                console.log("Error al agregar el producto: ", error)})
        })
    }

    return(
        <footer className="Footercontainer">
            <button className="addProductosToDatabase" onClick={addProducts}>add productos to database</button>
         <p className="parrafoFooter">React proyect comision 62330 July 2024 - Made By Jose Vargas </p>
        </footer>
    )

}

export default Footer