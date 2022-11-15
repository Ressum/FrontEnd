import React from 'react';
import './Reservation.scss';
import { Link } from 'react-router-dom';
import main from 'images/View/main.svg';

function Reservation() {
    return(
        <div id="ai-survey-result">
            <img src={main} alt="main" />
            <button>사전예약하기</button>
        </div>
    );
}

export default Reservation;