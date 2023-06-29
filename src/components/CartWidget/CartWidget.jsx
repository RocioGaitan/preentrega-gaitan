import './CartWidget.css'

const CartWidget = () => {

    const carrito = "https://cdn-icons-png.flaticon.com/512/6136/6136434.png"

  return (
    <div className='ladoDerecho'>
        <img className='carrito' src={carrito} alt="imagen del carrito de compras" />
        <strong>10</strong>
    </div>
    
  )
}

export default CartWidget