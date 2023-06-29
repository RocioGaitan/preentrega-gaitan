import { useParams } from 'react-router-dom'
import './Body.css'

const Body = () => {
  const {id} = useParams();
  return (
    <div className='body'>
       <h3>Body</h3>
       <p>id categoria: {id} </p>
    </div>
  )
}

export default Body