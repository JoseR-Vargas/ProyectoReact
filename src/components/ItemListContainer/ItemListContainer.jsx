import ItemCount from "../ItemCount/ItemCount.jsx"
import ItemList from "../ItemList/ItemList.jsx"
import Item from "../Item/Item.jsx"
import "./ItemListContainer.css"

const ItemListContainer = ({title}) => {
    return(
        <>
        <div className="ItemListContainer">
         <div>{title}</div>
         <ItemList/>
         <Item/>
         <ItemCount stock={10} initial={1}/>
         </div>
        </>
       
    ); 
};

export default ItemListContainer