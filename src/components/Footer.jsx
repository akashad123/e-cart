import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-evenly align-items-center w-100 flex-column border bg-dark text-light'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>

        <div style={{width:'400px', textAlign:'justify'}}>
            <h4 style={{overflowY:'hidden'}} className='text-light'><i class="fa-solid fa-cart-shopping me-2"></i>E-CART</h4>
              <h6 style={{overflowY:'hidden'}} className='text-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam dolor similique aliquid explicabo quo doloribus pariatur nobis maxime, voluptatem quibusdam fuga quisquam laboriosam suscipit? Odit inventore sunt assumenda aspernatur eos?</h6>
        </div>

        <div className="d-flex flex-column">
              <h4 style={{overflowY:'hidden'}} className='text-light'>LINKS</h4>
              <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
              <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
              <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>Wishlist</Link>
        </div>

        <div className="guides d-flex flex-column">
              <h4 className='text-light' style={{overflowY:'hidden'}}>GUIDES</h4>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>React</Link>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>React bootstrap</Link>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>
        </div>
        
        <div className="contacts">
              <h4 className='text-light' style={{overflowY:'hidden'}}>CONTACT US</h4>
              <div className='d-flex'>
                <input type="text" className='form-control' placeholder='Enter E-mail ID' />
                <button className='btn btn-warning d-flex justify-content-center ms-2 align-items-center'>Subscribe</button>
              </div>
              <div className='mt-2 d-flex justify-content-evenly align-items-center'>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
              </div>
        </div>

      </div>
      <p className='mt-2'>Copyright © 2023 E-Cart. Built with React</p>

    </div>
  )
} 

export default Footer