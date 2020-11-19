import React from 'react'

export default function Delete() {
    const handleDeleteForm = (event)=>{
        event.preventDefault();
        const registerForm = document.querySelector('#delete');
        const registerData = new FormData(registerForm)
        console.log(registerData.get('email'));
    
        fetch('http://localhost:3001/dashboard/delete', {
          credentials: "include",
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({email: registerData.get('email')})
        }).then((response)=>{
          console.log(response);
        })
    }

    return (
        <form id="delete">
            <h3>Delete</h3>
            <label for="email">Email</label>
            <input type="email" name="email" id="delete-email" />
            <input onClick={handleDeleteForm} type="submit" value="Submit" />
        </form>
    )
}
