import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='detalleProductos'>
        <img src={img} alt={nombre} />
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>Artículo: {id} </h3>
    </div>
  )
}

export default ItemDetail