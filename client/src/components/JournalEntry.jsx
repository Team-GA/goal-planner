import { deleteJournal, getJournalbyId } from "../services/journal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./JournalEntry.css";
// refrence for css https://codepen.io/dhanishgajjar/pen/bjaYYo

const JournalEntry = (props) => {
  const [journal, setJournal] = useState({});
  const id = props.journalEntry._id;

  useEffect(() => {
    getJournalbyId(id).then((gotJournalEntry) => setJournal(gotJournalEntry));
  }, [id]);

  const handleDelete = async () => {
    await deleteJournal(id);
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <div class="all">
      <div class="books">
        <div class="book">
          <div className="back"></div>
          <div className="page6"><h6>{journal.journalInput}</h6></div>
          <div classn="page5"></div>
          <div className="page4"></div>
          <div className="page3"><p>{String(journal.journalDate).split("T")[0]}</p></div>
          <div className="page2"></div>
          <div className="page1"></div>
          <div className="front"></div>
        </div>
        
      </div>
      <div className="journalButtons">
            <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit-journal/${props.journalEntry._id}`}>
        <button className="button">EDIT</button>
      </Link>
            </div>
    </div>
  );
};

export default JournalEntry;
