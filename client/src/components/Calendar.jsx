import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useHistory } from 'react-router-dom';
const localizer = momentLocalizer(moment)

const MyCalendar = props => {
    const history = useHistory();
    //map through planner entries and um change them to shape that calendar expects and save it into variable called "myEventsList"
    const myEventsList = props.plannerEntries.map((plannerEntry) => {

        return {
            'title': plannerEntry.plannerInput,
            'allDay': false,
            'start': moment(plannerEntry.plannerDate).toDate(),
            'end': moment(plannerEntry.plannerDate).add(1, 'h').format(),
            'id': plannerEntry._id,
        }

    });



    return (
        <div>
            <Calendar
                localizer={localizer}
                events={myEventsList}
                view='week'
                views={{
                    week: true,
                }}
                step={30}
                onSelectEvent={(e) => history.push(`/edit-planner/${e.id}`)}

                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}

export default MyCalendar;