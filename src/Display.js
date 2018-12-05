import React from "react";  
import "./Display.css";
import ButtonPanel from "./ButtonPanel";


class Display extends React.Component{
    render(){
        return (
            <div class="component-display">
                <div>
                    {this.props.value}
                </div>
            </div>
        );
    }
}

export default Display;