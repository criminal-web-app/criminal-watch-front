import React from 'react';
import Input from '../forms/inputField';
import Button from '../forms/button';
import axios from 'axios';




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
        let base_url = `http://127.0.0.1:8084/v1/users/login`;

        if(username && password){
            console.log(username,password);
            axios.post(base_url,{
                username : username,
                password : password
            })
            .then(data=>{

                this.setState({
                    message : data.data.message
                });
                console.log(message)
            })
            .catch(err =>{
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
            <form onSubmit={this.loginSubmit}>
                {/* USERNAME */}
                <Input
                    inputType={'text'}
                    inputName={'username'}
                    inputValue={this.state.username}
                    placeHolder={'Username'}
                    inputChange={this.updateUsername}
                />
                {/* PASSWORD */}
                <Input
                    inputType={'password'}
                    inputName={'password'}
                    inputValue={this.state.password}                    
                    placeHolder={'password'}
                    inputChange={this.updatePassword}
                />
                {/* SUBMIT */}
                <Button buttonName='Submit' />              
            </form>
        </div>
        )
    } 
}



export default Login;