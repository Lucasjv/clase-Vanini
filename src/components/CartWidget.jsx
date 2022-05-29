import React from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
function CartWidget({product}) {
  return (
    <>
    <ShoppingCartCheckoutIcon />
    {product}
    </>
  )
}

export default CartWidget