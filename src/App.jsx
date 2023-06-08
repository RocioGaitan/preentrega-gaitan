import './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
import './components/Mensaje/Mensaje'
import Mensaje from './components/Mensaje/Mensaje'
import NavBar from './components/NavBar/NavBar'

function App() {
  

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = {"¡Gracias por tu compra! Podes hacer click en el botón finalizar compra y se te enviara via email el detalle de los productos que compraste"}/>
      <Mensaje/>
    </>
    

  

  )
}

export default App