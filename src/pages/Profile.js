import React, { useState } from 'react';
import "../styles/Profile.css";
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
  const [errorMessage,setErrorMessage] = useState("")

  const navigate = useNavigate();

  const sendLoginCredentials = async () => {
    try {
      const encodedData = btoa(email + ":" + password);
      const response = await api.get("/users/user-login", {
        headers: {
          "Authorization": `Basic ${encodedData}`
        }
      });
      const data = await response.data;
      if(response.status === 200)
      {
        localStorage.setItem("currentUser", data.currentUser);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      
    } catch (error) {
      if(error.response.status === 404)
      {
        setErrorMessage("User does not exist!")
      }
      else if(error.response.status === 401)
      {
        setErrorMessage("Incorrect password!")
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
    sendLoginCredentials();
    
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter Your email'
          style={{
            border: '1px solid #ccc',
            padding: '8px',
            margin: '8px',
            transition: 'border-color 0.3s ease',
          }}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter Your password'
          style={{
            border: '1px solid #ccc',
            padding: '8px',
            margin: '8px',
            transition: 'border-color 0.3s ease',
          }}
          required
        />
      </label>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

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
  const [errorMessage,setErrorMessage] = useState("")

  const navigate = useNavigate();

  const sendSignUpCredentials = async () => {
    try {
      const response = await api.post("/users/create-user", {
        email,
        password
      });
      const data = await response.data;
      console.log(response.status)
      if(response.status === 200)
      {
        localStorage.setItem("currentUser", data.currentUser);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
      
    } catch (error) {
      if(error.response.status === 409)
      {
        setErrorMessage("User already exists!")
      }
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    if (password.length < 8) {
      setPasswordMatchError(false);
      alert("Password should be at least 8 characters long");
      return;
    }

    console.log('Signing up with:', { email, password, confirmPassword });
    sendSignUpCredentials();
   
  };

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{
            border: '1px solid #ccc',
            padding: '8px',
            margin: '8px',
            transition: 'border-color 0.3s ease',
          }}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
          style={{
            border: '1px solid #ccc',
            padding: '8px',
            margin: '8px',
            transition: 'border-color 0.3s ease',
          }}
          required
        />
      </label>
      <br />
      <label>
        Confirm Password:
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Enter Your Password'
          style={{
            border: passwordMatchError ? '1px solid red' : '1px solid #ccc',
            padding: '8px',
            margin: '8px',
            transition: 'border-color 0.3s ease',
          }}
          required
        />
      </label>
      {passwordMatchError && <p style={{ color: 'red' }}>Passwords don't match!</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Profile;
