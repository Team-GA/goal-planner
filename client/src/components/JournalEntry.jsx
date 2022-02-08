import { deleteJournal, getJournalbyId } from "../services/journal";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./JournalEntry.css";
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
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
    <div className = "journal-entry">
      <h5 className="date">Entry date: {String(journal.journalDate).split("T")[0]}</h5>
      <h6>{journal.journalInput}</h6>
      <div className="journalButtons">
        <RiCloseCircleLine className='delete-icon' onClick={handleDelete}/>
        <Link to={`/edit-journal/${props.journalEntry._id}`}>
        <TiEdit className='edit-icon'/>
        </Link>
      </div>
      
    </div>
  );
};

export default JournalEntry;
