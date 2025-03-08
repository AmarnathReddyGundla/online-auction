import { useState } from "react";
import axios from "axios";
import './Signup.css';
import { useNavigate } from "react-router-dom";

function Signup() {
  // Declare the state variables for username, email, and password
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5001/signup', {
        username,
        password
      });

      alert('Signup successful! Please sign in.');
      navigate('/signin'); // Redirect to signin page
    } catch (err) {
      console.error('Signup Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    
    <form className="signup_form"onSubmit={handleSignup}>
        <h1 className="h1">Sign up</h1>
      <input 
        type="text" 
        className="input-field"
        placeholder="Username" 
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="email" 
        className="input-field"
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        className="input-field"
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button className="sign_in"type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;