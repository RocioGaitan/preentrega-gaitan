import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedor'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: $ {precio} </p>
        <p>Artículo: {id} </p>
        <Link to={`/Item/${id}`}> Ver detalles </Link>
    </div>
  )
}

export default Item