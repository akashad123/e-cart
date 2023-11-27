import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function WishList() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  /* console.log(wishlistArray); */

  const dispatch = useDispatch()

  const handleWishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div>

      <Row style={{marginTop:'10rem'}}>
        { wishlistArray?.length>0?
          wishlistArray?.map((item)=>(
          <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='mx-auto' style={{ width: '20rem', height:'25rem' }}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
        <Card.Body>
          <Card.Title>{item.title.slice(0,10)}...</Card.Title>
          <Card.Text>
            {item.description.slice(0,35)}...
          </Card.Text>
          <div className='d-flex justify-content-between align-items-center'>
            <Button onClick={()=>dispatch(removeFromWishlist(item.id))} className='rounded' variant="outline-danger"><i class="fa-solid fa-trash"></i></Button>
            <Button onClick={()=>handleWishlist(item)} className='rounded' variant="outline-success"><i class="fa-solid fa-cart-shopping"></i></Button>
          </div>
        </Card.Body>
        </Card>
        </Col>
          ))
          :
        <div className='d-flex justify-content-center align-items-center flex-column mb-5'>
          <p>Nothing here</p>
          <Button className='btn btn-success'><Link to={'/'} style={{textDecoration:'none', color:'white'}}>Back to home</Link></Button>
        </div>
       
       
        }
      </Row>

    </div>
  )
} 

export default WishList