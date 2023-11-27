import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {

  // To access state value
  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log(wishlist);

  const cart = useSelector((state)=>state.cartReducer)
  console.log(cart);

  return (
    <Navbar expand="lg" className="bg-dark fixed-top">
      <Container>
        <Navbar.Brand href="#home"><Link style={{textDecoration:'none', color:'white'}} to={'/'}><i class="fa-solid fa-cart-shopping me-2"></i>E-CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border rounded me-3' href="#home"><Link style={{textDecoration:'none', color:'white'}} to={'/cart'}>Cart <i class="fa-solid fa-cart-shopping"></i> <Badge className='rounded' bg="secondary">{cart.length}</Badge></Link></Nav.Link>
            
            <Nav.Link className='border rounded ' href="#link"><Link style={{textDecoration:'none', color:'white'}} to={'/wishlist'}>Wishlist <i class="fa-solid fa-heart text-danger"></i> <Badge className='rounded' bg="secondary">{wishlist.length}</Badge></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
 
export default Header