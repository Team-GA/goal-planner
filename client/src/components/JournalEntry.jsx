import { useHistory } from "react-router-dom";
import { deleteJournal } from "../services/journal";
import { Link } from "react-router-dom";
import { useState } from "react";

const JournalEntry = (props) => {
//moty
    const { journalDate, journalInput } = props.journalEntry
    const [toggleFetch, setToggleFetch] = useState(false);
    const history = useHistory();
    const id = props.journalEntry._id;

    const handleDelete = async () => {
        await deleteJournal(id);
        setToggleFetch((curr) => !curr);
        history.push("/view-journal-entries")
    }
    //moty

    return (
        <div>
            <h4>{ journalDate }</h4>
            <h6>{ journalInput }</h6>
            <button onClick={handleDelete}>Delete</button>
            <form>
            <Link to={`/edit-journal/${props.journalEntry._id}`}>
                <button className="button">EDIT</button>
            </Link>
            </form>
        </div>
    )
}

export default JournalEntry;