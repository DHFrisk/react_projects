import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './css/Login.css';
import logo from './logo.svg';
import Button from "./components/Button";
import InputText from "./components/InputText";
import TootltipText from "./components/TooltipText";
import InputPassword from "./components/InputPassword";
import imglogo from "./img/login-logo.png";

export default class Login extends Component{
    render(){
        return(
            <div className="container">
                <div className="login-fondo">
                    <div className="login-img">
                        <img src={imglogo}/>
                    </div>
                    <div className="login-formulario">
                        {/* <form action="" method=""> */}
                            <div><h2>InnovaSoftGT</h2></div>
                            <div className="tooltip">
                                <InputText label="Ingrese usuario" id="user-input"/>
                                <TootltipText text="InnovaSoftGT-KYU-Username"/>
                                <br></br>
                            </div>
                            <div className="tooltip">
                                <br></br>
                                <InputPassword label="Ingrese clave de acceso" id="user-password"/>
                                <TootltipText text="InnovaSoftGT-KYU-Password"/>
                                <br></br>
                            </div>
                            <Link to="/home">
                                <Button text="Ingresar"/>
                            </Link>
                        {/* </form> */}
                    </div>
                </div>
            </div>

        );
    }
}