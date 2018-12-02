import React from 'react';
import {Input} from 'reactstrap';
export default class InputForm extends React.Component{
    onChange(){
        this.props.inputChange();    
    }

    render(){
        return (
            <Input
                type={this.props.inputType}
                name={this.props.inputName}
                value={this.props.inputValue}
                className={this.props.className}
                placeholder={this.props.placeHolder}
                onChange={this.props.inputChange}
            />
        )
    }
}