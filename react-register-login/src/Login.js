import React from 'react'

export default function Login() {
    const handleLoginForm = (event)=>{
        event.preventDefault();
        const registerForm = document.querySelector('#login');
        const registerData = new FormData(registerForm)
        console.log(registerData.get('name'));
        console.log(registerData.get('email'));
        console.log(registerData.get('password'));
    
        fetch('http://localhost:3001/user/login', { 
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: "include"
,          body: JSON.stringify({name: registerData.get('name'), email: registerData.get('email'), hash: registerData.get('password')})
        }).then((response)=>{
          console.log(response);
        })
      }

    return (
        <form id="login">
            <h3>Login</h3>
            <label for="name">Name</label>
            <input type="text" name="name" id="login-name" />
            <label for="email">Email</label>
            <input type="email" name="email" id="login-email" />
            <label for="password">Password</label>
            <input type="password" name="password" id="login-password" />
            <input onClick={handleLoginForm} type="submit" value="Submit" />
        </form>
    )
}
