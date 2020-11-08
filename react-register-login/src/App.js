import './App.css';

function App() {
  const handleRegisterForm = (event)=>{
    event.preventDefault();
    const registerForm = document.querySelector('#register');
    const registerData = new FormData(registerForm)
    console.log(registerData.get('name'));
    console.log(registerData.get('email'));
    console.log(registerData.get('password'));

    fetch('http://localhost:3001/login', { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: registerData.get('name'), email: registerData.get('email'), hash: registerData.get('password')})
    });
  }

  return (
    <div >
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
      <form id="login">
        <h3>Login</h3>
        <label for="name">Name</label>
        <input type="text" name="name" id="login-name" />
        <label for="email">Email</label>
        <input type="email" name="email" id="login-email" />
        <label for="password">Password</label>
        <input type="password" name="password" id="login-password" />
        <input onClick={handleRegisterForm} type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
