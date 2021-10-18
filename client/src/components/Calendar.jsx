import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const MyCalendar = props => {
    //map through planner entries and um change them to shape that calendar expects and save it into variable called "myEventsList"
    const myEventsList = props.plannerEntries.map((plannerEntry) =>{ 
        console.log(moment(plannerEntry.plannerDate).toDate());
        return{
            'title': plannerEntry.plannerInput,
            'allDay': false,
            'start': moment(plannerEntry.plannerDate).toDate(),
            'end': moment(plannerEntry.plannerDate).add(1, 'h').format(),
        }
        
    });
    


    return (
        <div>
            <Calendar
                localizer={localizer}
                events={ myEventsList}
                view='week'
                views={{
                    week: true,
                  }}
                  step={30}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    )
}

export default MyCalendar;