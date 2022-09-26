import './Header.scss';
import homeIcon from 'images/Header/home.svg';
import partyPopperIcon from 'images/Header/party-popper.svg';
import calenderIcon from 'images/Header/calender.svg';
import writeIcon from 'images/Header/write.svg';
function Header() {
    function home(){
        window.location.href='../main/Home';
    }
    function party(){
        window.location.href='../main/Event';
    }
    function notice(){
        window.location.href='../main/notice';
    }
    function write(){
        window.location.href='../main/write';
    }
    function mypages(){
        window.location.href='../main/mypage';
    }
    return(
        <header>
            <div id="logo" onClick={home}>
                <h1>Rasham</h1>
                <h6>맞춤형 독서 교육 플랫폼</h6>
            </div>
            <ul>
                <li onClick={home}>
                    <img src={homeIcon} alt="home" className="notice"/>
                    홈
                </li>
                <li onClick={party}>
                    <img src={partyPopperIcon} alt="event" />
                    이벤트
                </li>
                <li onClick={notice}>
                    <img src={calenderIcon} alt="notice" className="notice"/>
                    공지사항
                </li>
                <li onClick={write}>
                    <img src={writeIcon} alt="write" className="write" />
                    글쓰기
                </li>
            </ul>
            <div id="header-profile-image" onClick={mypages}>
                <img src="" alt="profile" />
            </div>
        </header>
    );
}

export default Header;