import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { MediaContext } from '../MediaContext/MediaContext';

export default function Navbar(props) {
  let { searchQuery, setSearchQuery } = useContext(MediaContext);
  return <>
      
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent ">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="/">NOXE</Link>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {  props.userData ? <>
      
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tv">TV Shows</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to="/people">People</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacts">Contact</Link>
              </li>
          </> : null
        }

       </ul>
       
       <div className='d-flex align-items-center ms-auto'>
         {props.userData && (
           <form className="d-flex me-3" role="search" onSubmit={(e) => e.preventDefault()}>
             <input 
               className="form-control" 
               type="search" 
               placeholder="Search..." 
               aria-label="Search"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
           </form>
         )}

          <ul className="navbar-nav me-2 mb-2 mb-lg-0 flex-row">
        <li className="nav-item">
          <Link className="nav-link" to="https://www.facebook.com" ><i className="fab fa-facebook"></i></Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="https://www.instagram.com"><i className="fab fa-instagram"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="https://www.x.com"><i className="fab fa-x"></i></Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to="https://www.tiktok.com"><i className="fab fa-tiktok"></i></Link>
        </li>
      

        </ul>



      <ul className="navbar-nav mb-2 mb-lg-0">
        {
          props.userData ?<>
          <li className="nav-item">
            <span className="nav-link text-danger" onClick={props.logOut} style={{cursor:'pointer'}}>LogOut</span>
          </li>
          </> :
          <>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li> 
          </>
        }
      </ul>
       </div>
    </div>
    </nav>
    </>
}