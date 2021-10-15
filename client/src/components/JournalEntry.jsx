import { deleteJournal, getJournalbyId } from "../services/journal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const JournalEntry = (props) => {
    const [ journal, setJournal ] = useState({});
    const id = props.journalEntry._id;

    useEffect(() => {
        getJournalbyId(id).then((gotJournalEntry) => setJournal(gotJournalEntry));
    }, [id])

    const handleDelete = async () => {
        await deleteJournal(id);
        props.setToggleFetch((curr) => !curr);
    }

    return (
        <div>
            <h4>{ journal.journalDate }</h4>
            <h6>{ journal.journalInput }</h6>
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