import './bottomBar.scss';
import homeIcon from 'images/Header/home.svg';
import partyPopperIcon from 'images/Header/party-popper.svg';
import calenderIcon from 'images/Header/calender.svg';
import bookIcon from 'images/Header/book.svg';

function bottomBar() {
    return (
        <ul id="head-menu" role="navigation" style="height: 50px;">
            <li>
                <img src={homeIcon} alt="home" />
                홈
            </li>
            <li>
                <img src={partyPopperIcon} alt="event" />
                이벤트
            </li>
            <li>
                <img src={calenderIcon} alt="notice" />
                공지사항
            </li>
            <li>
                <img src={bookIcon} alt="write" />
                글쓰기
            </li>
        </ul>
    );
}

export default bottomBar;