import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            alert("Success! " + data.message);
            // Instantly navigate to your homepage after successful login
            navigate('/home'); 
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to connect to backend server. Is your Node server running?");
    }
  };

  return (
    <div style={{ backgroundColor: '#fdeceb', minHeight: '100vh', paddingTop: '1px', paddingBottom: '50px' }}>
      
      {/* DECORATIVE QUOTES */}
      <div className="floating-text text-left">
          <span className="quote-main">Good Food</span>
          <span className="quote-middle">= Happy</span>
          <span className="quote-small">You</span>
          <span className="quote-heart">♡</span>
      </div>

      <div className="floating-text text-right">
          <span className="quote-main">Good Food</span>
          <span className="quote-middle">= Good</span>
          <span className="quote-small">Mood</span>
          <span className="quote-heart">♡</span>
      </div>

      {/* DECORATIONS */}
      <img src="/salad-bowl.png" alt="Salad bowl" className="decor decor-salad" />
      <img src="/strawberries.png" alt="Strawberries" className="decor decor-strawberries" />
      <img src="/recipe-books.png" alt="Recipe books" className="decor decor-books" />
      <img src="/chef-hat-cute.png" alt="Cute chef hat" className="decor decor-chef" />
      <img src="/wooden-spoon.png" alt="Wooden spoon" className="decor decor-spoon" />
      <img src="/notes.png" alt="Notes" className="decor decor-notes" />
      <img src="/avocado.png" alt="Avocado" className="decor decor-avocado" />

      {/* TOP BORDER */}
      <div className="scalloped-top"></div>

      {/* MAIN CONTENT */}
      <div className="wrapper">
          <div className="header-title">
              <i className="fa-solid fa-hat-chef"></i>
              <h1>Recipe Finder<br />& Meal Planner</h1>
              <div className="tagline">
                  Discover new recipes <span>♥</span> Plan your meals <span>♥</span> Eat better
              </div>
          </div>

          <div className="form-box">
              <h2>Welcome Back</h2>
              <p className="subtitle">Log in to your account and<br />continue your delicious journey!</p>

              <form id="loginForm" onSubmit={handleLogin}>
                  <div className="input-group">
                      <i className="fa-regular fa-user"></i>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                  </div>

                  <div className="input-group">
                      <i className="fa-solid fa-lock"></i>
                      <input 
                        type={showPassword ? "text" : "password"} 
                        placeholder="Password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i 
                        className={`fa-regular ${showPassword ? 'fa-eye-slash' : 'fa-eye'} password-eye`} 
                        onClick={() => setShowPassword(!showPassword)}
                      ></i>
                  </div>

                  <div className="form-options">
                      <label className="remember-me">
                          <input type="checkbox" defaultChecked /> Remember Me
                      </label>
                      <a href="#" className="forgot-password">Forgot Password? &rarr;</a>
                  </div>

                  <button type="submit" className="submit-btn">Log In ♡</button>

                  <div className="divider"><span>OR</span></div>

                  <button type="button" className="google-btn">
                      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      </svg>
                      Continue with Google
                  </button>

                  <div className="signup-link">
                      Don't have an account? <Link to="/signup">Sign Up &rarr;</Link>
                  </div>
              </form>
          </div>
      </div>

      <div className="scalloped-bottom"></div>

      <div className="footer-wrapper">
          <div className="footer-features">
              <div className="feature">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <h4>Find Recipes</h4><p>for every mood</p>
              </div>
              <div className="feature">
                  <i className="fa-regular fa-calendar-check"></i>
                  <h4>Plan Your Meals</h4><p>save time & eat well</p>
              </div>
              <div className="feature">
                  <i className="fa-regular fa-heart"></i>
                  <h4>Track Your Goals</h4><p>healthy & happy you</p>
              </div>
              <div className="feature">
                  <i className="fa-brands fa-envira"></i>
                  <h4>Simple. Tasty. Yours.</h4><p>♥</p>
              </div>
          </div>
      </div>

    </div>
  );
}

export default Login;