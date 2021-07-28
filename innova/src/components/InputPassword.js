import React, {Component} from "react";

export default class InputPassword extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <label for={this.props.id}>{this.props.label}</label>
                <input type="password" className="gen-caja-de-texto" id={this.props.id}>
                </input>
            </div>
        );
    }
}