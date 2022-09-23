import './Header.scss';
import homeIcon from 'images/Header/home.svg';
import partyPopperIcon from 'images/Header/party-popper.svg';
import calenderIcon from 'images/Header/calender.svg';
import writeIcon from 'images/Header/write.svg';

function Header() {
    return(
        <header>
            <div id="logo">
                <h1>Rasham</h1>
                <h6>맞춤형 독서 교육 플랫폼</h6>
            </div>
            <ul>
                <li>
                    <img src={homeIcon} alt="home" />
                    홈
                </li>
                <li>
                    <img src={partyPopperIcon} alt="event" />
                    이벤트
                </li>
                <li>
                    <img src={calenderIcon} alt="notice" className="notice"/>
                    공지사항
                </li>
                <li>
                    <img src={writeIcon} alt="write" className="write" />
                    글쓰기
                </li>
            </ul>
            <div id="header-profile-image">
                <img src="" alt="profile" />
            </div>
        </header>
    );
}

export default Header;