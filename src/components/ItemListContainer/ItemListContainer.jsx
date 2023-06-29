import { useState, useEffect } from 'react'
import ItemList from "../ItemList/ItemList"
import { getProductos, getProductosPorCategoria} from '../../asyncmock'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'


const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect( () => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

    funcionProductos(idCategoria)
    .then(respuesta => setProductos(respuesta))
    .catch(error => console.log(error))

  }, [idCategoria])

  return (
    <div>
      <h3 className='titulo'> Descubrí el catálogo de productos </h3>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer