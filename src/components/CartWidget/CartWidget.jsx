import './CartWidget.css'

const CartWidget = () => {

    const carrito = "https://static.vecteezy.com/system/resources/thumbnails/019/787/018/small/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"

  return (
    <div className='ladoDerecho'>
        <img className='carrito' src={carrito} alt="imagen del carrito de compras" />
        <strong>25</strong>
    </div>
    
  )
}

export default CartWidget