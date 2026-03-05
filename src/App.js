import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Movies from './Movies/Movies';
import Contacts from './Contact/Contact';
import Login from './Login/Login';
import Home from './Home/Home';
import About from './About/About';
import Tv from './Tv/Tv';
import Register from './Register/Register';
import Logout from './Logout/Logout';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import MediaContextProvider from './MediaContext/MediaContext';
import People from './People/People';
import ItemDetails from './ItemDetails/ItemDetails';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {

  const [userData, setUserData] = useState(null);
  let navigate = useNavigate();

  function getUserData() {
    let token = localStorage.getItem('userToken');
    if (token) {
      let decodedToken = jwtDecode(token);
      setUserData(decodedToken);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      getUserData();
    }
  }, []);


  function logOut() {
    localStorage.removeItem('userToken');
    setUserData(null);
    navigate('/login');
  }

  function ProtectedRoute({ children }) {
    if (!localStorage.getItem('userToken')) {

      return <Navigate to='/login' />;
    }

    else {
      return children;
    }
  }




  return (
    <>
      <MediaContextProvider>
        <Navbar userData={userData} logOut={logOut} />
        <div className="App">
          <Routes>
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
            <Route path="/contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
            <Route path="/movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
            <Route path="/tv" element={<ProtectedRoute><Tv /></ProtectedRoute>} />
            <Route path="/people" element={<ProtectedRoute><People /></ProtectedRoute>} />
            <Route path="/itemdetails/:id/:media_type" element={<ProtectedRoute><ItemDetails /></ProtectedRoute>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login getUserData={getUserData} />} />
            <Route path="/logout" element={<Logout logOut={logOut} />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </MediaContextProvider>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;