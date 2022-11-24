import React from 'react';
import { useRef, useState } from 'react';
import './AttendanceCheck.scss';
import AttendanceCheckPopUp from './AttendanceCheckPopUp/AttendanceCheckPopUp';

function AttendanceCheck() {
    const [showPopUp, setShowPopUp] = useState(false);

    const days = useRef(['', '', '', 1, 2, 3, 4, 
        5, 6, 7, 8, 9, 10, 11, 
        12, 13, 14, 15, 16, 17, 18, 
        19, 20, 21, 22, 23, 24, 25, 
        26, 27, 28, 29, 30, '', '']);
    return(
        <div id="attendancecheck">
            <h1>출석체크</h1>
            <div id="attendancecheck-line"></div>
            <div id="calendar">
                <div id="dates">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                </div>
                <ul id="days">
                    {
                        days.current.map((day, index) => (
                            <li key={index}>
                                {day}
                            </li>
                        ))
                    }
                </ul>
                <button onClick={() => setShowPopUp(true)}>출석체크하기</button>
            </div>
            {
                showPopUp ? <AttendanceCheckPopUp setShowPopUp={setShowPopUp} /> : null
            }
        </div>
    );
}

export default AttendanceCheck;