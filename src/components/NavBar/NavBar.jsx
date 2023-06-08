import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css'

const NavBar = () => {
  return (
  
<header>

 <nav className="navbar navbar-expand-lg">
    
    <div className="container-fluid">
        
      <h1> EUPHORIA LENCERIA </h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
      </button>
          
      <div className="collapse navbar-collapse" id="navbarNavDropdown">

        <ul className="navbar-nav">

          <li className="nav-item"> INCIO </li>
          <li className="nav-item"> TABLA DE TALLES </li>
          <li className="nav-item"> CONTACTO </li>
          
          <li className="nav-item dropdown">
            <h2 className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LENCERIA
            </h2>
           <ul className="dropdown-menu">
             <li>CONJUNTOS</li>
             <li>ARNES</li>
             <li>BODYS</li>
           </ul>
         </li>
       </ul>

      </div>
      
   </div>

    <div className='carritoCompras'>
     <CartWidget/>
    </div>

  </nav>

</header>

   
  )
}

export default NavBar