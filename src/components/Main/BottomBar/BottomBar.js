import './BottomBar.scss';
import homeIcon from 'images/mobile/home.svg';
import partyPopperIcon from 'images/mobile/party-popper.svg';
import calenderIcon from 'images/mobile/calender.svg';
import bookIcon from 'images/mobile/write.svg';
import mypage from 'images/mobile/mypage.svg';

function BottomBar() {
    return (
        <ul id="bottom-menu" role="navigation">
            <li>
                <img src={homeIcon} alt="home" />
                <p>홈</p>
            </li>
            <li>
                <img src={partyPopperIcon} alt="event" />
                <p>이벤트</p>
            </li>
            <li>
                <img src={bookIcon} alt="write" />
                <p>글쓰기</p>
            </li>
            <li>
                <img src={calenderIcon} alt="notice" />
                <p>공지사항</p>
            </li>
            <li>
                <img src={mypage} alt="mypage" />
                <p>마이페이지</p>
            </li>
        </ul>
    );
}

export default BottomBar;