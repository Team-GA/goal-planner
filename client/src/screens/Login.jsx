import { useState } from "react";
import { loginUser } from "../services";
import { useHistory } from "react-router";
import "./Login.css"

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // define an async function to register the user
  const handleSubmit = async (e) => {
      try {
          e.preventDefault();
          // make the userInfo object
          const userInfo = {
            username,
            password,
          };
          // call loginUser with userInfo as the argument and save the user into a variable
          const user = await loginUser(userInfo);
          // console log the user!
          props.setUser(user);
          history.push("/home")
          
      } catch (error) {
          console.error(error.message);
      }
  }
    return (
        <section>
        <h3>login to your account!</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

          <label htmlFor="password">Password:</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">login!</button>
        </form>
      </section>
    );
};

export default Login;
