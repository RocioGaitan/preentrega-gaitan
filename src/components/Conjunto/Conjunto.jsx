import { useParams } from 'react-router-dom'
import './Conjunto.css'


const Conjunto = () => {
  const {id} = useParams();
  return (
    <div>
       <h2>Conjuntos</h2>
       <p>id categoria: {id} </p>
    </div>
  )
}

export default Conjunto