import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    return (

            <Card style={{ width: '12rem'}} className='m-2'>
            <Card.Img variant="top" style={{ padding: '1rem' }} src={product.image} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <div className="d-flex flex-wrap flex-column align-items-center text-center" style={{ flex: '1 1 auto'}}>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>$ {product.price}</Card.Text>
                </div>
                <div className="d-flex justify-content-center w-100">
                    <Link to={`/product/${product.id}`}>
                    <Button style={{ backgroundColor: '#3e721d', borderColor: '#3e721d', marginTop:'0.2rem' }}>Details</Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default Item;


