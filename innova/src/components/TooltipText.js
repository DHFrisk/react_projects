import React, {Component} from "react"

export default class TooltipText extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <span className="tooltiptext">{this.props.text}</span>
        );
    }
}