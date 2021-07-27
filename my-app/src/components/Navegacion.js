import React from 'react'
import { Link } from "react-router-dom";
import Aurora3 from '../img/aurora.jpg';
import Beach3 from '../img/beach.jpg';
import Forest3 from '../img/forest.jpg';
import Jungle3 from '../img/jungle.jpg';
import Lake3 from '../img/lake.jpg';
import Milky3 from '../img/milky.jpg';


const Navegacion = () => {
    return (
        <div className="container mt-3 padre">
            <Link to="/aurora" className="links">
            <figure>
                <img src={Aurora3} alt="" className="tamanio-img"/>
                <figurecaption>Aurora</figurecaption>
            </figure>
            </Link>
            <Link to="/beach" className="links">
            <figure>
                <img src={Beach3} alt="" className="tamanio-img"/>
                <figurecaption>Beach</figurecaption>
            </figure>
            </Link>
            <Link to="/forest" className="links">
            <figure>
                <img src={Forest3} alt="" className="tamanio-img"/>
                <figurecaption>Forest</figurecaption>
            </figure>
            </Link>
            <Link to="/jungle" className="links">
            <figure>
                <img src={Jungle3} alt="" className="tamanio-img"/>
                <figurecaption>Jungle</figurecaption>
            </figure>
            </Link>
            <Link to="/lake" className="links">
            <figure>
                <img src={Lake3} alt="" className="tamanio-img"/>
                <figurecaption>Lake</figurecaption>
            </figure>
            </Link>
            <Link to="/milky" className="links">
            <figure>
                <img src={Milky3} alt="" className="tamanio-img"/>
                <figurecaption>Milky</figurecaption>
            </figure>
            </Link>
        </div>
    )
}

export default Navegacion
