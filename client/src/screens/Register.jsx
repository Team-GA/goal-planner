import { useState } from "react";
import { registerUser } from "../services";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./Register.css";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        firstname,
        lastname,
        email,
        password,
      };

      const user = await registerUser(userInfo);
      props.setUser(user);
      history.push("/home");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section className="signup-section">

      <div className="main_page">
        <Link to="/">
          <HomeIcon className="icon" />{" "}
        </Link>
      </div>

      <h3>Register for an account!</h3>

      <div className="form-box">
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="username">Username: </label>
          <input
            className="reg-form-control"
            id="username"
            placeholder="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="firstname">firstname: </label>
          <input
            className="reg-form-control"
            id="firstname"
            placeholder="firstname"
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />

          <label htmlFor="lastname">lastname: </label>
          <input
            className="reg-form-control"
            id="lastname"
            placeholder="lastname"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />

          <label htmlFor="email">Email:</label>
          <input
            className="reg-form-control"
            id="email"
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            className="reg-form-control"
            id="password"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="signup-btn" type="submit">
            Sign up!
          </button>
        </form>
      </div>
      
    </section>
  );
};

export default Register;
