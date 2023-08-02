import { useState } from "react";
import { loginUser } from "../services";
import { useHistory } from "react-router";
import "./Login.css";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
// import axios from 'axios'

// import LoginIcon from '@mui/icons-material/Login';

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function successLogin() {
    alert("You have Logged in!!!");
    history.push("/home");
  }

  function failedLogin() {
    alert("wrong username & password combination");
    history.push("/Login");
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        password,
      };
      const user = await loginUser(userInfo);
      props.setUser(user);
      if (user) {
        successLogin();
      } else {
        failedLogin();
      }
      history.push("/home");
      if((userInfo === user) && (userInfo === user)) {
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="login-section">
      <div className="main_page">
        <Link to="/">
          <HomeIcon className="icon" />
          
        </Link>
      </div>

      <h3>login to your account!</h3>
      <div className="form-box">
        <form className="login-form" onSubmit={handleSubmit} required>
          <label htmlFor="username">Username: </label>
          <input
            className="form-control"
            id="username"
            placeholder="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            placeholder="password"
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" type="submit" alert="login successful">
            login!
          </button>
          <br />
          <span>
            You dont have an account? <Link to="/Register">Register now!</Link>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Login;
