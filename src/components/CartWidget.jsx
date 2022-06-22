import React, { useContext } from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import {CartContext} from './Context/CartContext'



function CartWidget() {

const {getItemQty} = useContext(CartContext)
  return (
    <>
    <ShoppingCartCheckoutIcon />
    {getItemQty()}
    </>
  )
}

export default CartWidget