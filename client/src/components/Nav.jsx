import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav>
            <Link to='/home' className="navItem">Home </Link>
            <Link to='/all-to-do' className="navItem">All To-Do List </Link>
            <Link to='/add-to-planner' className="navItem">Add to Planner </Link>
            <Link to='/new-journal' className = 'navItem'>New Journal Entry</Link>
            <Link to='/view-journal-entries' className = 'navItem'>View Journal Entries</Link>
        </nav>
    )
}