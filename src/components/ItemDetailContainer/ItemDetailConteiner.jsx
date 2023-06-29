import { useState, useEffect } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams  } from 'react-router-dom';

import './ItemDetailConteiner.css'

const ItemDetailConteiner = () => {
  const [producto, setProductos] = useState(null);

  const {idItem} = useParams();

    useEffect( () => {
      getUnProducto(idItem)
      .then(res => setProductos(res))
    }, [idItem])

  return (
    <div className='detalle'>
        <h3>Detalle del producto:</h3>
        <ItemDetail {...producto} />
        <button>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetailConteiner