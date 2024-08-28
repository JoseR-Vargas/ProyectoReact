import { useState } from "react";
import { useCartContext } from "../../context/CartContext"
import { Table } from "react-bootstrap"
import { addDoc, collection } from "@firebase/firestore"
import { db } from "../../firebase/dbConnection";
import "./Cart.css"

const Cart = () => {

   const { cart, total, removeItem, clearCart } = useCartContext();
   const [formData, setFormData] = useState({name:"", tel:"", email:""});

   const handleRemoveItem = (id, price, qty) => {
      removeItem(id, price , qty);

      Toastify({
         text: "Product removed",
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
   };

   const handleCleartCart = () => {
      clearCart();

      Toastify({
         text: "cart was cleaned",
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
      
   };

   const handleOnChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
   }

   const handleSaveCart = () => {
      console.log("Saving in db");
      console.log("formData", formData);
      console.log("cart", cart);

      const orderCollection = collection (db, "orders")
      const newOrder = {
         buyer: formData,
         items: cart,
         date: new Date(),
         total: total
      }

      addDoc(orderCollection, newOrder)
      .then((doc)=>{

         Toastify({
            text: "Purchase was successfully",
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
         
         // alert("Order saved with id: " + doc.id)
         console.log("Order saved with id: " + doc.id);
         clearCart()
         setFormData({name:"", tel: "", email: ""})
      })
      .catch((error) =>{
         console.log("Error adding document: ", error);
      });
   }

     return (
      <>
   <Table className="table-responsive" striped bordered hover>
      <thead>
         <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Actions</th>
         </tr>
      </thead>
      <tbody>
         {cart?.map(({ id, name, price, qty }, index)=>{
            return(
         <tr key={index}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{qty}</td>
            <td>
            <button className="removeBtnItem" onClick={()=> handleRemoveItem(id, price, qty)}>Remove Item</button>
            </td>
         </tr>
            );
         })}
         <tr>
            <td colSpan={4}>Total price</td>
            <td> $ {total}</td>
         </tr>
      </tbody>
   </Table>
        <button className="cleartbtn" onClick={handleCleartCart}>Cleart cart</button>

        <div className="buyForm">
        <input className="inputForm" type="text" name="name" id="name" placeholder="Ingrese su nombre" onChange={(e)=> handleOnChange(e)} />
         <input className="inputForm" type="text" name="tel" id="tel" placeholder="Ingrese su telefono" onChange={(e)=> handleOnChange(e)}/>
         <input className="inputForm" type="text" name="email" id="email" placeholder="Ingrese su email" onChange={(e)=> handleOnChange(e)}/>
         <button className="saveBuy" onClick={handleSaveCart}>Finalizar compra</button>
        </div>


      </>
   ) 
}

       
export default Cart

