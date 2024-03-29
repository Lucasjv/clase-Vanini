import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import './StylesComponent.css/Cart.css';

export default function Cart() {
  const {cart, emptyCart,  getItemPrice,  removeFromCart} = useContext(CartContext);
  const carritoVacio = cart.length === 0;

  return (
    <>
    <h2 className="cart-title">Mi Carrito</h2>
    <div className="cart">
    <table>
      <thead>
        <tr>
          <th>Imágen</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {(carritoVacio &&
          <tr>
            <td colSpan="6" className="empty-cart">
              <h3>No hay productos en el carrito</h3>
            </td>
          </tr>
        ) || 
        cart.map(item => (
          <tr className="cart-item" key={item.id}>
            <td className="cart-item-img">
              <img src={item.img} alt={item.personaje} />
            </td>
            <td className="cart-item-title">
              {item.personaje}
            </td>
            <td className="cart-item-price">${item.precio}</td>
            <td className="cart-item-qty">
              {item.count}
            </td>
            <td className="cart-item-total">
              ${item.precio * item.count}
            </td>
            <td className="cart-item-remove">
              <button className="botonPrincipal" onClick={() => removeFromCart(item.id)}>
                X
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
    <div className="cart-footer">
      {carritoVacio?
          <Link to="/"><button className="botonPrincipal">Volver al inicio</button></Link>
          :
          <>
          <h3>Total: ${getItemPrice()}</h3>
          <Link to="/checkout"><button className="botonPrincipal">Continuar al checkout</button></Link>
          <button className="botonPrincipal" onClick={emptyCart}>Vaciar Carrito</button>
          </>
      }
    </div>
    </div>      
          </>

  )
}