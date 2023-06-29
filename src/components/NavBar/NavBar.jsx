import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from "react-router-dom"
import './NavBar.css'


const NavBar = () => {
  return (
  
 <header>

 <nav className="navbar navbar-expand-lg">
    
    <div className="container-fluid">
      
      <Link to={"/"}>
       <h1> EUPHORIA LENCERIA </h1>
      </Link>
      


      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
      </button>
          
      <div className="collapse navbar-collapse" id="navbarNavDropdown">

        <ul className="navbar-nav">

          <li>
            <NavLink to={`/`}> HOME </NavLink>
          </li>
          
          <li>
            <NavLink to={`/categoria/1`}> CONJUNTO </NavLink>
         </li>

          <li>
           <NavLink to={`/categoria/2`}> BODY </NavLink>
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