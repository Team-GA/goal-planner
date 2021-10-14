import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createJournal } from "../services/journal.js";

const NewJournal = () => {
    // 1. it should have labels, inputs, and states corresponding to what a new book should look like (title, author, yearPublished)
    const [journalDate, setJournalDate] = useState("");
    const [journalInput, setJournalInput] = useState("");
    const history = useHistory();

    // 2. when the form on this component is submitted, we'd like to call our createBook function and pass our newBook as an argument. if it's successful, we'll bring the user back to the main page

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // make the book object
            const journal = {
                journalDate,
                journalInput
            }
            // call createBook with book as an argument
            await createJournal(journal);
            // push the user to the home page
            history.push("/view-journal-entries");
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <section>
            <h4>Add a Journal Entry!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="journalDate">Date:</label>
                <input id="journalDate" type="text" value={journalDate} onChange={(e) => setJournalDate(e.target.value)} />
                <label htmlFor="journalInput">Entry:</label>
                <input id="journalInput" type="text" value={journalInput} onChange={(e) => setJournalInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </section>
    );
};

export default NewJournal;