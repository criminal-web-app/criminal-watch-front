import React from 'react';
import InputForm from '../forms/inputField';
import FormButton from '../forms/button';
import axios from 'axios';
import {Form,FormGroup} from 'reactstrap';



class Login extends React.Component{

    constructor(props){
        super(props);

        
        this.state = {
          username : '',
          password : '',
          message : ''
        }
        this.loginSubmit    = this.loginSubmit.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);

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

      loginSubmit(event){
        event.preventDefault();
        let {username,password,message} = this.state;
        let base_url = `https://warm-ravine-42804.herokuapp.com/v1/users/login`;

        if(username && password){
            
            console.log(username,password);
            axios.post(base_url,{
                username : username,
                password : password
            })
            .then(data=>{
                console.log(data);
                this.setState({
                    message : data.data.message
                });
                console.log(message)
            })
            .catch(err =>{
                console.log(base_url);
                this.setState({
                    message : err.response.data.message
                });
                console.log(message);
            })
        }
        
        
      }
    
      componentDidMount(){

      }
  
    render(){
        return ( 
        <div>
            <Form onSubmit={this.loginSubmit}>
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
                        placeHolder={'password'}
                        inputChange={this.updatePassword}
                    />

                </FormGroup>
                <h1>{this.state.message}</h1>
                <FormGroup>
                    {/* SUBMIT */}
                    <FormButton buttonName='Login' buttonValue ='Login' buttonColor='primary'/>
                </FormGroup>  
            </Form>
        </div>
        )
    } 
}



export default Login;