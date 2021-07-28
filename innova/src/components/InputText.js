import React, {Component} from 'react';

export default class InputText extends Component{
    constructor(props){
        super(props);
}

    render(){
        return(
            <div>
                <label for={this.props.id}>{this.props.label}</label>
                <input type="text" className="gen-caja-de-texto" id={this.props.id}>
                </input>
            </div>
        );  
    }
}