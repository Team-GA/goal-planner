const PlannerEntry = (props) => {
    const { plannerDate, plannerInput } = props.plannerEntry
    return (
        <article>
            <h4>{ plannerDate }</h4>
            <h6>{ plannerInput }</h6>
        </article>
    )
}

export default PlannerEntry