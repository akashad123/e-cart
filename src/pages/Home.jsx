import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {

  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  // To call a function that add value to state
  const dispatch = useDispatch()

  return (
    <Row style={{marginTop:'10rem'}}>

      { data?.length>0?
        data?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
        <Card className='mx-auto' style={{ width: '20rem', height:'25rem' }}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
        <Card.Body>
          <Card.Title>{item.title.slice(0,10)}...</Card.Title>
          <Card.Text>
            {item.description.slice(0,35)}...
          </Card.Text>
          <div className='d-flex justify-content-between align-items-center'>
            <Button onClick={()=>dispatch(addToWishlist(item))} className='rounded' variant="outline-danger"><i class="fa-solid fa-heart"></i></Button>
            <Button onClick={()=>dispatch(addToCart(item))} className='rounded' variant="outline-success"><i class="fa-solid fa-cart-shopping"></i></Button>
          </div>
        </Card.Body>
        </Card>
      </Col>))
        : <p>Nothing here</p>
      }

    </Row>
  )
} 

export default Home