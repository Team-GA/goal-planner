import { useState } from "react";
import { registerUser } from "../services";
import { useHistory } from "react-router";

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
          history.push("/home")
          
      } catch (error) {
          console.error(error.message);
      }
  }

  return (
    <section>
      <h3>Register for an account!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="firstname">firstname: </label>
        <input id="firstname" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

        <label htmlFor="lastname">lastname: </label>
        <input id="lastname" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />

        <label htmlFor="email">Email:</label>
        <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign up!</button>
      </form>
    </section>
  );
};

export default Register;