import React, { Component } from 'react';
import BlogList             from '../components/blogList';


function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
}


class ToggleButton extends React.Component{
    constructor (props){
        super(props);
        
        this.handleLogin    = this.handleLogin.bind(this);
        this.handleLogout   = this.handleLogout.bind(this);
        this.isLoggedin     = true;
    }

    handleLogin(){
        this.setState.isLoggedin       = true;
    }
    handleLogout(){
        this.setState.isLoggedin       = false;
    }

    render(){
        const isLoggedin    = this.isLoggedin;
        let button;
        isLoggedin ?
            button = 
            <div>
                <BlogList/>
                <LogoutButton isLoggedin={isLoggedin}/>
            </div>
        :
            button = <LoginButton isLoggedin={isLoggedin}/>;


        return (
            <div>
                {button}
            </div>
        )
    }

}




export default ToggleButton;