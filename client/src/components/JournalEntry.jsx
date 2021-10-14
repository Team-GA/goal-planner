const JournalEntry = (props) => {
    const { journalDate, journalInput } = props.journalEntry
    return (
        <article>
            <h4>{ journalDate }</h4>
            <h6>{ journalInput }</h6>
        </article>
    )
}

export default JournalEntry;