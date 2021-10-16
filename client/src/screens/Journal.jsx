import { useEffect, useState } from "react";
import JournalEntry from "../components/JournalEntry";
import { getAllJournals } from "../services/journal.js";

const Journal = () => {
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    getAllJournals().then((gotJournals) => setJournalEntries(gotJournals));
  }, []);

  return (
    <div>
      <h2>Journal Entries</h2>
      <div>
        {journalEntries.map((journalEntry) => (
          <JournalEntry key={journalEntry._id} journalEntry={journalEntry} />
        ))}
      </div>
    </div>
  );
};

export default Journal;
