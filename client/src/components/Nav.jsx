import { Link } from "react-router-dom";
// import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TodayIcon from "@mui/icons-material/Today";
import CreateIcon from "@mui/icons-material/Create";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import SettingsIcon from '@mui/icons-material/Settings';
import { useState, useEffect } from "react";

const Nav = ({ user }) => {
  // const [ toggleFetch, setToggleFetch ] = useState(false);

  const [menuActive, setMenuActive] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
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
      localStorage.removeItem("token", userInfo);
      window.localStorage.clear();
      history.push("/Login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <header></header>

      {user ? (
        <>
          <header>
            <button className="hamburger">
              <MenuIcon className="icon" />
            </button>

            <div className="mobile_nav">
              <ul className="nav_links">
                <li>
                  <Link to="/home" className="navItem">
                    <h3>Home </h3>
                  </Link>
                </li>
                <li>
                  <Link to="/all-to-do" className="navItem">
                    <h3>All To-Do List </h3>
                  </Link>
                </li>
                <li>
                  <Link to="/add-to-planner" className="navItem">
                    <h3>Add to Planner </h3>
                  </Link>
                </li>
                <li>
                  <Link to="/new-journal" className="navItem">
                    <h3>New Journal Entry</h3>
                  </Link>
                </li>
                <li>
                  <Link to="/view-journal-entries" className="navItem">
                    <h3>View Journal Entries</h3>
                  </Link>
                </li>
                {/* <li>
                  <h3>Notification</h3>
                  <NotificationsIcon />
                </li> */}
              </ul>
            </div>
          </header>

          <nav className="navbar">
            <div className="navbar-one">
              <ul className="nav_links">
                <li>
                  <Link to="/home" className="navItem">
                    <HomeIcon className="icon" />{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/all-to-do" className="navItem">
                    <AddIcon className="icon" />
                    {/* All To-Do List{" "} */}{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/add-to-planner" className="navItem">
                    <LibraryBooksIcon className="icon" />
                    {/* Add to Planner{" "} */}
                  </Link>
                </li>
                <li>
                  <Link to="/new-journal" className="navItem">
                    <CreateIcon className="icon" />
                    {/* New Journal Entry */}
                  </Link>
                </li>
                <li>
                  <Link to="/view-journal-entries" className="navItem">
                    <ChromeReaderModeIcon className="icon" />
                    {/* View Journal Entries */}
                  </Link>
                </li>
                {/* <li>
                <NotificationsIcon />
              </li> */}
              </ul>
            </div>

            <div>
              <Link to="/home">
                <AccountCircleIcon className="icon" />
                <br />
                <span>Hi, {user.username}!</span>
              </Link>
            </div>

            <div className="navbar-two">
              <header className="home-header">
                <button id="logout-btn" onClick={logout}>
                  logout
                </button>
              </header>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="navbar">
            <div className="button">
              <Link to="/login">
                <button id="landing-btn">login</button>
              </Link>
              <Link to="/register">
                <button id="landing-btn">register</button>
              </Link>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default Nav;
