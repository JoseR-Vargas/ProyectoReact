import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList.jsx"
import "./ItemListContainer.css"
import { getProducts } from "../../utils/fetchData.js"
import { items } from "../../mock/mockData.js"
import ItemCount from "../ItemCount/ItemCount.jsx"
import { useParams } from "react-router-dom"
import {Spinner} from "../spinner/spinner.jsx"

const ItemListContainer = ({title}) => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{ 
        
        console.log("se termino de montar el componente");
        setLoading(true);
        getProducts(categoryId)
        .then((res)=>{
            console.log("se resolvio la promesa");
            setProducts(res)
            console.log("se actualizaron los productos");
        })
        .catch((err)=>{
            console.log(err);
        })
        .finally(()=>{
            console.log("finalizo la promesa");
            setLoading(false);
        })

        return () => {
            console.log("se desmonto el componente");
        }

    },[categoryId])


    
    
    return(
        <main className="mainContainer">
        {console.log("renderizo el componente")}

         <div className="ItemListContainer">
         <div className="title">{title}</div>

         {loading 
            ? <Spinner />
            : <ItemList products={products}/>}
         
         </div>
        </main>
       
    ); 
};

export default ItemListContainer