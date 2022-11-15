import React from 'react';
import './Reservation.scss';
import { Link } from 'react-router-dom';
import main from 'images/View/main.svg';
import ReservationPopUp from './ReservationPopUp/ReservationPopUp';
import { useState } from 'react';

function Reservation() {
    const [showSignUpPopUp, setShowReservationPopUp] = useState(false);
    return(
        <div id="ai-survey-result">
            <img src={main} alt="main" />
            <button onClick={()=>{setShowReservationPopUp(true);}}>사전예약하기</button>
        </div>
    );
}

export default Reservation;