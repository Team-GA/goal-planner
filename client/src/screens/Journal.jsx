import { useEffect, useState } from "react";
import JournalEntry from "../components/JournalEntry";
import './Journal.css';
import { getAllJournals } from "../services/journal.js";

const Journal = () => {
    const [journalEntries, setJournalEntries] = useState([]);
    const [toggleFetch, setToggleFetch] = useState(false);

    useEffect(() => {
        getAllJournals().then((gotJournals) => setJournalEntries(gotJournals));
    }, [toggleFetch]);

    return (
    <div>
        <h2>Journal Entries</h2>
            <div className="entries">
                {journalEntries.map((journalEntry) => (
                    <JournalEntry setToggleFetch={setToggleFetch} key={journalEntry._id} journalEntry={journalEntry} />
                    
                ))}
            </div>
    </div>
    )
}

export default Journal;