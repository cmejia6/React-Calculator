import React from 'react';
import PropTypes from 'prop-types'
import "./Button.css";

class Button extends React.Component{
    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render(){
        return(
            <div className="component-button">
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        );
    }
}

export default Button;