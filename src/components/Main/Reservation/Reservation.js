import React from 'react';
import './Reservation.scss';
import { Link } from 'react-router-dom';
import run from 'images/Write/run.png';
import ReservationPopUp from './ReservationPopUp/ReservationPopUp';
import { useState } from 'react';

function Reservation() {
    const [showReservationPopUp, setShowReservationPopUp] = useState(false);
    return(
        <div id="ai-survey-result">
            {
                showReservationPopUp ? <ReservationPopUp setShowReservationPopUp={setShowReservationPopUp} /> : null
            }
            <img src={run} alt="main" />
            <button onClick={()=>{setShowReservationPopUp(true);}}>사전예약하기</button>
        </div>
    );
}

export default Reservation;