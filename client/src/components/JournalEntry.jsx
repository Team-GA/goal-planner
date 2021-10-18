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
    <div class="all">
      <div class="books">
        <div class="book">
          <div className="back"></div>
          <div className="page6">
              <h5>My journal</h5>
            <h6>{journal.journalInput}</h6>
            <div className="journalButtons">
              <RiCloseCircleLine className='delete-icon' onClick={handleDelete}/>
              <Link to={`/edit-journal/${props.journalEntry._id}`}>
                <TiEdit className='edit-icon'/>
              </Link>
            </div>
          </div>
          <div classn="page5"></div>
          <div className="page4"></div>
          <div className="page3">
            <p>{String(journal.journalDate).split("T")[0]}</p>
          </div>
          <div className="page2"></div>
          <div className="page1"></div>
          <div className="front"></div>
        </div>
      </div>
    </div>
  );
};

export default JournalEntry;
