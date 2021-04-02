import React from 'react'
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row header  align-items-center">
                <div className="col-8 ">
                    <img src="LogoTinails.png" className="logo"/>
                </div>
                <div className="col-4">
                    <div>
                    <nav className="navbar navbar-expand-lg navbar-light ">
  
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link smooth={true} to="header" className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link smooth={true} to="services" className="nav-link" href="#">Servicios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link smooth={true} to="works" className="nav-link" href="#">Trabajos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link smooth={true} to="prices" className="nav-link" href="#">Precios y Promos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link smooth={true} to="contact" className="nav-link" href="#">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
