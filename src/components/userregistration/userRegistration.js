import React from 'react';
import InputForm from '../forms/inputField';
import FormButton from '../forms/button';
import {Form,FormGroup} from 'reactstrap';
import axios from 'axios';


class Register extends React.Component {

    constructor(props){
        super(props);


        this.state = {
            first_name :'',
            last_name :'',
            email : '',
            username : '',
            password: '',
            phone_number :''
        }


        this.updateFirstName    = this.updateFirstName.bind(this);
        this.updateLastName     = this.updateLastName.bind(this);
        this.updateEmail        = this.updateEmail.bind(this);
        this.updateUsername     = this.updateUsername.bind(this);
        this.updatePassword     = this.updatePassword.bind(this);
        this.updatePhoneNumber  = this.updatePhoneNumber.bind(this);    
    }

    updateFirstName(event){
        this.setState({
            first_name : event.target.value
        });
      }

    updateLastName(event){
        this.setState({
            last_name : event.target.value
        });
    }

    updateEmail(event){
        this.setState({
            email : event.target.value
        });
    }

    updateUsername(event){
        this.setState({
            username : event.target.value
        });
    }

    updatePassword(event){
        this.setState({
            password : event.target.value
        });
    }

    updatePhoneNumber(event){
        this.setState({
            phone_number : event.target.value
        });
    }

    render(){
        return ( 
        <div>
            <Form onSubmit={this.loginSubmit}>
                <FormGroup>
                    {/* FIRST NAME */}
                    <InputForm
                        inputType={'text'}
                        inputName={'first_name'}
                        inputValue={this.state.first_name}
                        placeHolder={'First name'}
                        inputChange={this.updateFirstName}
                    />
                </FormGroup>

                <FormGroup>
                    {/* last NAME */}
                    <InputForm
                        inputType={'text'}
                        inputName={'last_name'}
                        inputValue={this.state.last_name}
                        placeHolder={'Last name'}
                        inputChange={this.updateLastName}
                    />
                </FormGroup>

                <FormGroup>
                    {/* Email */}
                    <InputForm
                        inputType={'text'}
                        inputName={'email'}
                        inputValue={this.state.email}
                        placeHolder={'Email'}
                        inputChange={this.updateEmail}
                    />
                </FormGroup>

                <FormGroup>
                    {/* USERNAME */}
                    <InputForm
                        inputType={'text'}
                        inputName={'username'}
                        inputValue={this.state.username}
                        placeHolder={'Username'}
                        inputChange={this.updateUsername}
                    />
                </FormGroup>
                
                <FormGroup>
                    {/* PASSWORD */}
                    <InputForm
                        inputType={'password'}
                        inputName={'password'}
                        inputValue={this.state.password}                    
                        placeHolder={'Password'}
                        inputChange={this.updatePassword}
                    />

                </FormGroup>

                <FormGroup>
                    {/* PHONE NUMBER */}
                    <InputForm
                        inputType={'text'}
                        inputName={'phone_number'}
                        inputValue={this.state.phone_number}                    
                        placeHolder={'Phone number'}
                        inputChange={this.updatePhoneNumber}
                    />

                </FormGroup>

                <h1>{this.state.message}</h1>
                <FormGroup>
                    {/* SUBMIT */}
                    <FormButton buttonName='Register' buttonValue ='Register' buttonColor='primary'/>
                </FormGroup>  
            </Form>
        </div>
        )
    }
}


export default Register;