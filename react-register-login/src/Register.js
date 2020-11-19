import React from 'react'

export default function Register() {
    const handleRegisterForm = (event)=>{
        event.preventDefault();
        const registerForm = document.querySelector('#register');
        const registerData = new FormData(registerForm)
        console.log(registerData.get('name'));
        console.log(registerData.get('email'));
        console.log(registerData.get('password'));
    
        fetch('http://localhost:3001/user/register', { 
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: registerData.get('name'), email: registerData.get('email'), hash: registerData.get('password')})
        }).then((response)=>{
          console.log(response);
        })
      }

    return (
        <form id="register">
            <h3>Register</h3>
            <label for="name">Name</label>
            <input type="text" name="name" id="register-name" />
            <label for="email">Email</label>
            <input type="email" name="email" id="register-email" />
            <label for="password">Password</label>
            <input type="password" name="password" id="register-password" />
            <input onClick={handleRegisterForm} type="submit" value="Submit" />
        </form>
    )
}
