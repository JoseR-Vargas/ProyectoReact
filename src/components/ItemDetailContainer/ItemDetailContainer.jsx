import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from "../../utils/fetchData";
import { Spinner } from "../spinner/spinner";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ()=> {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    useEffect(()=> { 
        
        setLoading(true);
        getProductById(id)
        .then((res)=>{
            setProduct(res)
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            setLoading(false);
        })

        return () => {
            console.log("se desmonto el componente");
        }
},[id])

    return(
        <main>
            <div className="text-center">ItemDetailContainer</div>
         {loading 
            ? <Spinner />
            : <ItemDetail product={product}/>}
        </main>
    )
}

export default ItemDetailContainer