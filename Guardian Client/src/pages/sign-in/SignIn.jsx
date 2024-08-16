import React, {useState}from 'react'
import './signin.css'

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);    
    console.log('Email:', email);
  };

  const handlePasswordChange = (e) => {
    setEmail(e.target.value);
    console.log('Password:', password);
  };

  const handleSubmit = async (e) => {
    
    try {
      console.log("Submitting form...")
      const response = await fetch('http://localhost:4600/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
      // Handle success here (e.g., redirect or display a message)
    } catch (error) {
      console.error('Error:', error);
      // Handle error here (e.g., display an error message)
    }
  
  };
 
  return (
    <div className='wrapper'>
      <div className='leftSide'> 
        <h1 id = "guardiantext"><span id="a123">GUARD</span>IAN</h1>
        <p>Protecting your health, one medicine at a time</p>
      </div>

      <div  className='rightSide'>
        <label>Email</label>
        <input type='email'  onChange={handleEmailChange} placeholder='Enter your email' required /><br/>
        <label>Password</label>
        <input type='password'onChange={handlePasswordChange} placeholder='Enter your password' required />
        <button type='button' onClick={handleSubmit}>Login</button>
      </div>
   </div>
  )
}

export default SignIn