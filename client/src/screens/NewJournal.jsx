import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { createJournal, updateJournal } from "../services/journal.js";

const NewJournal = (props) => {
  const [journalDate, setJournalDate] = useState("");
  const [journalInput, setJournalInput] = useState("");
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const journal = props.journalEntries.find(
        (journal) => journal._id === params.id
      );
      if (journal) {
        setJournalDate(journal.journalDate);
        setJournalInput(journal.journalInput);
      }
    }
  }, [params.id, props.journalEntries]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      e.preventDefault();

      const journal = {
        journalDate,
        journalInput,
      };
      if (params.id) {
        await updateJournal(params.id, journal);
        history.push("/view-journal-entries");
      } else {
        await createJournal(journal);
        history.push("/view-journal-entries");
      }
      props.setToggleFetch((curr) => !curr);
      history.push("/view-journal-entries");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section>
      <h4>Add a Journal Entry!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="journalDate">Date:</label>
        <input
          id="journalDate"
          type="text"
          value={journalDate}
          onChange={(e) => setJournalDate(e.target.value)}
        />
        <label htmlFor="journalInput">Entry:</label>
        <input
          id="journalInput"
          type="text"
          value={journalInput}
          onChange={(e) => setJournalInput(e.target.value)}
        />
        <button type="submit">Submit!</button>
      </form>
    </section>
  );
};

export default NewJournal;
