import './BottomBar.scss';
import homeIcon from 'images/mobile/home.svg';
import partyPopperIcon from 'images/mobile/party-popper.svg';
import calenderIcon from 'images/mobile/calender.svg';
import bookIcon from 'images/mobile/write.svg';
import mypage from 'images/mobile/mypage.svg';
import { Link } from 'react-router-dom';
function BottomBar() {
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
    return (
        <ul id="bottom-menu" role="navigation">
            <li onClick={home}>
                <img  className='home' src={homeIcon} alt="home" />
                <p>홈</p>
            </li>
            <li onClick={party}>
                <img src={partyPopperIcon} alt="event" />
                <p>이벤트</p>
            </li>
            <li onClick={write}>
                <img src={bookIcon} alt="write" />
                <p>글쓰기</p>
            </li>
            <li onClick={notice}>
                <img src={calenderIcon} alt="notice" />
                <p>공지사항</p>
            </li>
            <li onClick={mypages}>
                <img src={mypage} alt="mypage" />
                <p>마이페이지</p>
            </li>
        </ul>
    );
}

export default BottomBar;