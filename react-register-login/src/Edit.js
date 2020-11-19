import React from 'react'

export default function Edit() {
    const handleEditForm = (event)=>{
        event.preventDefault();
        const registerForm = document.querySelector('#edit');
        const registerData = new FormData(registerForm)
            
        fetch('http://localhost:3001/dashboard/edit', { 
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          credentials: "include"
,          body: JSON.stringify({name: registerData.get('name'), hash: registerData.get('password'), dateOfBirth: registerData.get('date-of-birth'), telephone: registerData.get('telephone'), email: registerData.get('email')})
        }).then((response)=>{
          console.log(response);
        })
    }

    return (
        <form id="edit">
            <h3>Edit</h3>
            <label for="name">Name</label>
            <input type="text" name="name" id="edit-name" />
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <label for="password">Password</label>
            <input type="password" name="password" id="edit-password" />
            <label for="date-of-birth">Date Of Birth</label>
            <input type="date" name="date-of-birth" id="date-of-birth" />
            <label for="telephone">Telephone</label>
            <input type="number" name="telephone" id="telephone" />
            <input onClick={handleEditForm} type="submit" value="Submit" />
        </form>
    )
}
