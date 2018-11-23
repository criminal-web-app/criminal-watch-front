import React from 'react';

export default class Input extends React.Component{
    onChange(){
        this.props.inputChange();    
    }

    render(){
        return (
            <input
                type={this.props.inputType}
                name={this.props.inputName}
                value={this.props.inputValue}
                placeholder={this.props.placeHolder}
                onChange={this.props.inputChange}
            />
        )
    }
}