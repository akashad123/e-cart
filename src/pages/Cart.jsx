import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const cartArray = useSelector((state)=>state.cartReducer)
  /* console.log(cartArray); */

  const dispatch = useDispatch()

  const [total, setTotal] = useState(0)

  const navigate = useNavigate()

  const getTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handleCheckout =()=>{
    alert('Thank you, your order has been placed !!!')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <div style={{marginTop:'10rem', marginBottom:'3rem'}}>
      
      { cartArray?.length>0?
      <div className='row w-100'>
          <div className='col-lg-7 ms-5'>
          <table className='table border shadow'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { cartArray?.map((item, index)=>(<tr>
              <td>{index+1}</td>
              <td>{item.title}</td>
              <td><img className='shadow rounded' width={'100px'} height={'100px'} src={item.thumbnail} alt="" /></td>
              <td>₹{item.price}</td>
              <td><Button onClick={()=>dispatch(removeFromCart(item.id))} className='rounded' variant="outline-danger"><i class="fa-solid fa-trash"></i></Button></td>
              </tr>))
              }
            </tbody>
          </table>
        </div>

        <div className='col-lg-4 d-flex justify-content-center align-items-center flex-column'>
          <div className='border shadow p-5 rounded'>
            <h2 className='text-info mb-4'>CART SUMMARY</h2>
            <h4 className='mb-3'>Number of products : {cartArray.length}</h4>
            <h4>Total amount : ₹{total}</h4>
            <button onClick={handleCheckout} className='btn btn-success w-100 mt-3 rounded'>Checkout</button>
          </div>
          </div>      

      </div>:<p>Nothing here</p>
      }
    </div>
  )
} 

export default Cart