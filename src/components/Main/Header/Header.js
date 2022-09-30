import './Header.scss';
import homeIcon from 'images/Header/home.svg';
import partyPopperIcon from 'images/Header/party-popper.svg';
import calenderIcon from 'images/Header/calender.svg';
import writeIcon from 'images/Header/write.svg';
import { Link } from 'react-router-dom';
function Header() {
    return(
        <header>
            <Link id="logo" to='/main/Home'>
                <h1>Rasham</h1>
                <h6>맞춤형 독서 교육 플랫폼</h6>
            </Link>
            <ul>
                <Link to='/main/Home'>
                        <img src={homeIcon} alt="home" className="notice"/>
                        홈
                </Link>
                <Link to='/main/Event'>
                    <img src={partyPopperIcon} alt="event" />
                    이벤트
                </Link>
                <Link to='/main/notice'>
                    <img src={calenderIcon} alt="notice" className="notice"/>
                    공지사항
                </Link>
                <Link to='/main/write'>
                    <img src={writeIcon} alt="write" className="write" />
                    글쓰기
                </Link>
            </ul>
            <Link id="header-profile-image" to='/main/mypage'>
                    <img src="" alt="profile" />
            </Link>
        </header>
    );
}

export default Header;