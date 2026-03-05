import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-info mb-3">About Us</h5>
            <p className="">
              We provide the best movie streaming experience with thousands of titles
              available at your fingertips. Join our community today!
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-info mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className=" text-decoration-none">Home</Link></li>
              <li><Link to="/movies" className=" text-decoration-none">Movies</Link></li>
              <li><Link to="/tv" className=" text-decoration-none">TV Shows</Link></li>
              <li><Link to="/contacts" className=" text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-info mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <Link to="https://www.facebook.com/kerolos.nagy.10" className="text-white fs-4"><i className="fab fa-facebook-f"></i></Link>
              <Link to="https://www.x.com/kerolos.nagy.10" className="text-white fs-4"><i className="fab fa-x"></i></Link>
              <Link to="https://www.instagram.com/kerolos.nagy.10" className="text-white fs-4"><i className="fab fa-instagram"></i></Link>
              <Link to="https://www.youtube.com/kerolos.nagy.10" className="text-white fs-4"><i className="fab fa-youtube"></i></Link>
            </div>
          </div>
        </div>

        <div className="text-center border-top border-secondary mt-4 pt-4">
          <p className=" mb-0"> Movie Platform. All rights reserved. 2026. <br/> Made with <i className="fa-solid fa-heart text-danger"></i> by Kerolos Nagy </p>
          </div>
        </div>
    </footer>
  )
}
