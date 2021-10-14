const PlannerEntry = (props) => {
    const { plannerDate, plannerInput } = props.plannerEntry
    return (
        <article>
            <h4>{ plannerDate }</h4>
            <h6>{ plannerInput }</h6>
            <h3>Thus is the PlannerEntry</h3>
        </article>
    )
}

export default PlannerEntry