import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Spinner } from "../spinner/spinner";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/dbConnection";
import { collection, getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = ()=> {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    useEffect(()=> { 
    setLoading(true)
    const productCollection = collection(db, "productos")
    const refDoc = doc(productCollection, id)

    getDoc(refDoc)
    .then((doc)=>{
        setProduct({id: doc.id, ...doc.data()})
        setLoading(false)
    })
    .catch((error)=>{
        setLoading(false);
        console.log("Error getting documents: ", error);
    })
},[id])

    return(
        <main>
         {loading 
            ? <Spinner />
            : <ItemDetail product={product}/>}
        </main>
    )
}

export default ItemDetailContainer