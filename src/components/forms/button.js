import React from 'react';
import {Button} from 'reactstrap';
export default class FormButton extends React.Component{
    onClick(){
        this.props.clickSubmit();
    }

    render(){
        return (
            
            <Button
                className={this.props.class_name}
                color = {this.props.buttonColor}
                name={this.props.buttonName}
                onClick={this.props.clickSubmit}
                value={this.props.buttonValue}
            >
            {this.props.buttonName}
            </Button>
        )
    }
}