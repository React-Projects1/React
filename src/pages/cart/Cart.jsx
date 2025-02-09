import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../Redux/Reduxs/cartSlice';
import { NavbarHeightContext } from '../../Context/NavbarHeightContext';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './cart.scss';

const Cart = () => {
  const { navbarHeight = 0 } = useContext(NavbarHeightContext);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0)

  const handlePrice = () => {
    const allPrice = cartItems.map(item => {
      if (item.quantity !== 1) {
        return item.quantity * item.price
      } else {
        return item.price
      }
    })
    setPrice(allPrice.reduce((previous, current) => previous + current, 0))
  }

  useEffect(() => {
    handlePrice()
    console.log(cartItems);
    
  }, [cartItems]);

  


  return (
    <div className="cart">
      <div className="wrapper">
        <div className="sidebarContainer">
          <Sidebar />
        </div>
        <div className="navbarContainer">
          <Navbar />
        </div>

        <div className="content py-3" style={{ marginTop: `${navbarHeight + 12}px` }}>
          <div className="row h-100 d-flex justify-content-center gap-5">
            {cartItems.length > 0 ? (
              <>
                <div className='row'>
                  <div className='col-4'>
                    <h4>The total price: <span className='text-success'>${price}</span> </h4>
                  </div>
                </div>
                {cartItems.map(item => (
                  <div key={item.id} className="col-3 card p-3">
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => dispatch(removeItem(item))}
                    ></button>
                    <div className="img d-flex justify-content-center align-items-center mb-3">
                      <img src={item.img} className="card-img-top" alt={item.title} />
                    </div>
                    <div className="card-body pt-0">
                      <h5 className="card-title">{item.title}</h5>
                      <div className="d-flex justify-content-between align-items-center pt-2">
                        <p className="card-text mb-0">Quantity: {item.quantity}</p>
                        <p className="card-text mb-0">Price: ${item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>

            ) : (
              <p className="text-center mt-5">Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
