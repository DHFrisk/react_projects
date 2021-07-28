import React from 'react';
import {Component} from "react";
import './css/Login.css';
import InputText from './components/InputText';
import TootltipText from "./components/TooltipText";

export default class Home extends Component{
    render(){
        return (
            <div className="container login-fondo">
                <div className="tooltip">
                    <InputText label="el_label" id="el_id"/>
                    <TootltipText text="InnovaSoftGT-KYU-Username"/>
                </div>
                
            </div>
        );
    }
}

