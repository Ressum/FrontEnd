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
                홈
            </Link>
            <Link to='/main/event'>
                <img src={partyPopperIcon} alt="event" />
                이벤트
            </Link>
            <Link to='/main/write'>
                <img src={bookIcon} alt="write" />
                글쓰기
            </Link>
            <Link to='/main/notice'>
                <img src={calenderIcon} alt="notice" />
                공지사항
            </Link>
            <Link to='/main/mypage'>
                <img src={mypage} alt="mypage" />
                마이페이지
            </Link>
        </div>
    );
}

export default BottomBar;