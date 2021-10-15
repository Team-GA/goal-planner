import { Link } from "react-router-dom";
// import { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom';

const Nav = ({ user }) => {

    // const [ toggleFetch, setToggleFetch ] = useState(false);

    const history = useHistory();

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    const logout = async (e, userInfo) => {
        e.preventDefault();
        try {
            localStorage.removeItem("token", userInfo)
            window.localStorage.clear();
            history.push("/Login")
        } catch (error) {
            console.error(error.message);
        }
    }

  return (
    <nav>
      {user ? (
        <>
          <Link to="/home" className="navItem">
            Home{" "}
          </Link>
          <Link to="/all-to-do" className="navItem">
            All To-Do List{" "}
          </Link>
          <Link to="/add-to-planner" className="navItem">
            Add to Planner{" "}
          </Link>
          <Link to="/new-journal" className="navItem">
            New Journal Entry
          </Link>
          <Link to="/view-journal-entries" className="navItem">
            View Journal Entries
          </Link>
          <Link to="/home">
            <span>Hi, {user.username}!</span>{" "}
          </Link>

           <header className="home-header">
                <button id="logout-btn" onClick={logout}>logout</button>
            </header>
        </>
      ) : (
        <div className="button">
          <Link to="/login">
            <button id="landing-btn">login</button>
          </Link>
          <Link to="/register">
            <button id="landing-btn">register</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
