import './Event.scss';
// import event1 from 'images/Event/event1.png';
import { Link } from 'react-router-dom';
// import event2 from 'images/Event/event2.svg';
// import event3 from 'images/Event/event3.svg';
// import event4 from 'images/Event/event4.svg';

function Event() {
    return(
        <div id="event">
            <h1>이벤트</h1>
            <div id="event-line"></div>
            <ul id="events">
                <li>
                    <Link to="/main/AttendanceCheck">
                        {/* <img src={event1} alt="event1" /> */}
                        <h2>잊지마 출석체크</h2>
                        <div>2022.09.01 ~ 2022.09.30</div>
                    </Link>
                </li>
                {/* <li>
                    <img src={event2} alt="event2" />
                    <h2>잊지마 출석체크</h2>
                    <div>2022.09.01 ~ 2022.09.30</div>
                </li>
                <li>
                    <img src={event3} alt="event3" />
                    <h2>잊지마 출석체크</h2>
                    <div>2022.09.01 ~ 2022.09.30</div>
                </li>
                <li>
                    <img src={event4} alt="event4" />
                    <h2>잊지마 출석체크</h2>
                    <div>2022.09.01 ~ 2022.09.30</div>
                </li> */}
            </ul>
        </div>
    );
}

export default Event;
