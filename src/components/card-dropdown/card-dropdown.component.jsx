import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart-context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDrpdownConatiner, EmptyMessage, CartItems } from './card-dropdown.styles'; 

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDrpdownConatiner>
      <CartItems>
      {
        cartItems.length ?  (cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))) : (
          <EmptyMessage>Your cart is Empty</EmptyMessage>
        )
      }
        
      </CartItems>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </CartDrpdownConatiner>
  );
};

export default CartDropdown;