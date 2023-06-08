import { useState } from "react";
import './Mensaje.css'

const Mensaje = () => {
  const [mensaje, setMensaje] = useState(false);

  const manejadorMensaje = () => {
    setMensaje(!mensaje)
  }
  return (
    <div>
      <button onClick={ manejadorMensaje }> { mensaje ? "Volver a comprar" : "Finalizar compra"} </button>
      {mensaje && <h2>Te enviamos a tu email el detalle de tu compra. Obtuviste un 15% de descuento en tu próxima compra</h2>}
    </div>
  )
}

export default Mensaje