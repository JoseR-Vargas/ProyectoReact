import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';


const ItemDetail = ({product})=> {

     const { id, name, description, price, image, stock} = product

    const  { addToCart } = useCartContext ();

     const ClickToBuy = (qty) => {
      console.log(`se agregaron ${qty} productos al carrito`);
      const item = {id, name, description, price}
      addToCart(item, qty);
     }

    return(
      <Card style={{ maxWidth: '15rem', margin: '0.5rem auto', marginBottom:'4rem', padding: '0.9rem', backgroundColor: '#ececec' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className='text-center'>
      <Card.Text >{name}</Card.Text>
        <Card.Title>{price}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Quedan {stock} unidades</Card.Text>
        <ItemCount stock={stock} initial={1} ClickToBuy={ClickToBuy}/>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail