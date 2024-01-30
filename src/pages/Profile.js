import React, { useState } from 'react';
import "../styles/Profile.css"
import Layout from '../components/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const api = axios.create({
  baseURL: 'https://vintage-backend.onrender.com/api',
});

const Profile = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Layout>
      <div className={`profile-container ${isLogin ? 'login' : 'signup'}`}>
        <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <p className='toggle-link' onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
        </p>
      </div>
    </Layout>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const sendLoginCredentials = async()=>{
    try{
      const encodedData = btoa(email+":"+password)
      const response = await api.get("/users/user-login",{
        headers: {
          "Authorization": `Basic ${encodedData}`
        }
        })
      const data = await response.data
      localStorage.setItem("currentUser",data.currentUser)
      console.log("data",data)
    }
    catch(error)
    {
      console.error('Failed to login', error);
    }
  } 

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic for handling login (e.g., API call)
    console.log('Logging in with:', { email, password });
    sendLoginCredentials()
    setTimeout(()=>{
      navigate("/")
    },2000)
    
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your email' style={{
          border: '1px solid #ccc',
          padding: '8px',
          margin: '8px',
          transition: 'border-color 0.3s ease',
        }} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your password' style={{
          border: '1px solid #ccc',
          padding: '8px',
          margin: '8px',
          transition: 'border-color 0.3s ease',
        }} required />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};



const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const navigate = useNavigate()


  const sendSignUpCredentials = async()=>{
    try{
      
      const response = await api.post("/users/create-user",{
        email,
        password
      })
      const data = await response.data
      localStorage.setItem("currentUser",data.currentUser)
      console.log("data",data)
    }
    catch(error)
    {
      console.error('Failed to login', error);
    }
  } 

  const handleSignUp = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    // Check if password has at least length 8
    if (password.length < 8) {
      setPasswordMatchError(false);
      alert("Password should be at least 8 characters long");
      return;
    }

    // Add logic for handling sign-up (e.g., API call)
    console.log('Signing up with:', { email, password, confirmPassword });
    sendSignUpCredentials()
    setTimeout(()=>{
      navigate("/")
    },2000)
  };

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" style={{
          border: '1px solid #ccc',
          padding: '8px',
          margin: '8px',
          transition: 'border-color 0.3s ease',
        }} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" style={{
          border: '1px solid #ccc',
          padding: '8px',
          margin: '8px',
          transition: 'border-color 0.3s ease',
        }} required />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Enter Your Password' style={{
          border: passwordMatchError ? '1px solid red' : '1px solid #ccc',
          padding: '8px',
          margin: '8px',
          transition: 'border-color 0.3s ease',
        }} required />
      </label>
      {passwordMatchError && <p style={{ color: 'red' }}>Passwords don't match!</p>}
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Profile;
