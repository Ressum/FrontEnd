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
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Write from './Write/Write';
import NoticeShopButton from './NoticeShopButton/NoticeShopButton';
import LostPassword from './LostPassword/LostPassword';
import AISurveyResult from './AISurveyResult/AISurveyResult';
import './Main.scss';
import BottomBar from 'components/Main/BottomBar/BottomBar';
import MainPopUp from './MainPopUp/MainPopUp';

function Main() {
    //const [showPopUp, setShowPopUp] = useState(true);
    return (
        <div id="main">
            <Header />
            <NoticeShopButton />
            {/*
                showPopUp ? <MainPopUp setShowPopUp={setShowPopUp} /> : null
            */}
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="attendancecheck" element={<AttendanceCheck />} />
                <Route path="event" element={<Event />} />
                <Route path="mypage" element={<MyPage />} />
                <Route path="notice/*" element={<Notice />} />
                <Route path="payment" element={<Payment />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="write" element={<Write />} />
                <Route path="lostpassword" element={<LostPassword />} />
                <Route path="aisurveyresult" element={<AISurveyResult />} />
                <Route path="/" element={<Navigate to="home" />} />
            </Routes>
            <BottomBar></BottomBar>
        </div>
    );
}

export default Main;