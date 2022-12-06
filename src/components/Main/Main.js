import React, { useContext } from 'react';
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { useState } from 'react';

import Header from './Header/Header';
import AttendanceCheck from './AttendanceCheck/AttendanceCheck';
import Event from './Event/Event';
import Home from './Home/Home';
import MyPage from './MyPage/MyPage';
import Notice from './Notice/Notice';
import Payment from './Payment/Payment';

import Write from './Write/Write';
import NoticeShopButton from './NoticeShopButton/NoticeShopButton';

import Reservation from './Reservation/Reservation';
import './Main.scss';
import BottomBar from 'components/Main/BottomBar/BottomBar';
import MainPopUp from './MainPopUp/MainPopUp';
import { UserContext } from 'App';

function Main() {

    return (
        <div id="main">
            <Header />
            <NoticeShopButton />
            {
                localStorage.getItem('isSurveyTested') === 'false' ? <MainPopUp /> : null
            }
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="attendancecheck" element={<AttendanceCheck />} />
                <Route path="event" element={<Event />} />
                <Route path="mypage" element={<MyPage />} />
                <Route path="notice/*" element={<Notice />} />
                <Route path="payment" element={<Payment />} />

                <Route path="write" element={<Write />} />

                <Route path="Reservation" element={<Reservation />} />
                <Route path="/" element={<Navigate to="home" />} />
            </Routes>
            <BottomBar></BottomBar>
        </div>
    );
}

export default Main;