import { useState, useEffect } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/dbConnection.js"
import ItemList from "../ItemList/ItemList.jsx"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import {Spinner} from "../spinner/spinner.jsx"

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{ 
        
        setLoading(true);
        let productsCollection = collection(db, "productos")

        if(categoryId) {
            productsCollection = query(productsCollection, where("category", "array-contains", categoryId))
        }

            getDocs(productsCollection)
            .then(({docs})=> {
                const prodFromDocs = docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(prodFromDocs)
                setLoading(false)
            })
            .catch((error)=>{
                console.log("Error getting documents: ", error);
            }) 
        
    },[categoryId])


    
    return(
        <main className="mainContainer">
        {console.log("renderizo el componente")}

         <div className="ItemListContainer">
        
         {loading 
            ? <Spinner />
            : <ItemList products={products}/>}
         
         </div>
        </main>
       
    ); 
};

export default ItemListContainer