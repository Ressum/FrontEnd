import './BottomBar.scss';
import homeIcon from 'images/mobile/home.svg';
import partyPopperIcon from 'images/mobile/party-popper.svg';
import calenderIcon from 'images/mobile/calender.svg';
import bookIcon from 'images/mobile/write.svg';
import mypage from 'images/mobile/mypage.svg';
import { Link } from 'react-router-dom';
function BottomBar() {
    return (
        <div id="bottom-menu" role="navigation">
            <Link to='/main/home'>
                <img  className='home' src={homeIcon} alt="home" />
                <p>홈</p>
            </Link>
            <Link to='/main/write'>
                <img src={bookIcon} alt="write" />
                <p>글쓰기</p>
            </Link>
            <Link to='/main/event'>
                <img src={partyPopperIcon} alt="event" />
                <p>이벤트</p>
            </Link>
            <Link to='/main/notice'>
                <img src={calenderIcon} alt="notice" />
                <p>공지사항</p>
            </Link>
            <Link to='/main/mypage'>
                <img src={mypage} alt="mypage" />
                <p>마이페이지</p>
            </Link>
        </div>
    );
}

export default BottomBar;