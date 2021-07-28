import React, {Component} from 'react';

export default class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <button className="gen-boton-general">
                    {this.props.text}
                </button>
            </div>
        );
    }
}