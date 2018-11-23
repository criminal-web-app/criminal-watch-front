import React from 'react';

export default class Button extends React.Component{
    onClick(){
        this.props.clickSubmit();
    }

    render(){
        return (
            <input
                type='submit'
                name={this.props.buttonName}
                onClick={this.props.clickSubmit}
            />
        )
    }
}