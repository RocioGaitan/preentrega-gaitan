import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailConteiner'
import './App.css'



function App() {
  

  return (
    <>
     <BrowserRouter>
       <NavBar/>
       <Routes>
          <Route path="/" element = {<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element = {<ItemListContainer/>} />
          <Route path="/Item/:idItem" element = {<ItemDetailConteiner/>} />
       </Routes>
     </BrowserRouter>
    </>

  

  )
}

export default App