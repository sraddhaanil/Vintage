import React, { useState } from 'react';
import "../styles/Profile.css"
import Layout from '../components/Layout';

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

  const handleLogin = (e) => {
    e.preventDefault();
    // Add logic for handling login (e.g., API call)
    console.log('Logging in with:', { email, password });
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

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add logic for handling sign-up (e.g., API call)
    console.log('Signing up with:', { email, password, confirmPassword });
  };

  return (
    <form className="signup-form" onSubmit={handleSignUp}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"  style={{
            border: '1px solid #ccc',
            padding: '8px',
            margin: '8px',
            transition: 'border-color 0.3s ease',
          }} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password"  style={{
            border: '1px solid #ccc',
            padding: '8px',
            margin: '8px',
            transition: 'border-color 0.3s ease',
          }}required />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Enter Your Password' style={{
            border: '1px solid #ccc',
            padding: '8px',
            margin: '8px',
            transition: 'border-color 0.3s ease',
          }} required />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
    
  );
};

export default Profile;

