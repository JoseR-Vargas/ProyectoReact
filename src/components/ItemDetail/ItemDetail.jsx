import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemDetail = ({product})=> {

     const {name, description, price, image, stock} = product

    return(
      <Card style={{ width: '18rem', margin: '2rem auto', padding: '1rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body className='text-center'>
      <Card.Text >{name}</Card.Text>
        <Card.Title>{price}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Quedan {stock} unidades</Card.Text>
        <Button style={{ backgroundColor: '#fe8801', borderColor: '#1c1c1c' }}>Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail