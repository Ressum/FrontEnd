import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

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

function Main() {
    return (
        <div>
            <Header />
            <NoticeShopButton />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="attendancecheck" element={<AttendanceCheck />} />
                <Route path="event" element={<Event />} />
                <Route path="mypage" element={<MyPage />} />
                <Route path="notice" element={<Notice />} />
                <Route path="payment" element={<Payment />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="write" element={<Write />} />
                <Route path="lostpassword" element={<LostPassword />} />
                <Route path="/" element={<Navigate to="home" />} />
            </Routes>
        </div>
    );
}

export default Main;