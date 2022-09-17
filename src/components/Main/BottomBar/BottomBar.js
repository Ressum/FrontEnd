import './BottomBar.scss';
import homeIcon from 'images/mobile/home.svg';
import partyPopperIcon from 'images/mobile/party-popper.svg';
import calenderIcon from 'images/mobile/calender.svg';
import bookIcon from 'images/mobile/write.svg';
import mypage from 'images/mobile/mypage.svg';

function BottomBar() {
    return (
        <ul id="head-menu" role="navigation" style={{height: '50px'}}>
            <li>
                <img src={homeIcon} alt="home" />
                홈
            </li>
            <li>
                <img src={partyPopperIcon} alt="event" />
                이벤트
            </li>
            <li>
                <img src={bookIcon} alt="write" />
                글쓰기
            </li>
            <li>
                <img src={calenderIcon} alt="notice" />
                공지사항
            </li>
            <li>
                <img src={mypage} alt="mypage" />
                마이페이지
            </li>
        </ul>
    );
}

export default BottomBar;