import './NotYet.scss';
import readbook from 'images/Write/cry.png';
import { useNavigate } from "react-router-dom";

function NotYet() {
    const navigate = useNavigate();
    return (
        <div id="not-yet-pop-up-bg">
            <img id="notYet-img" src={readbook} alt="read"/>
            <div id="not-yet-pop-up">
                <h2>준비중인<br/>페이지입니다.</h2>
                    <button 
                        id="short-cut-button"
                        onClick={() => {
                            navigate('/');
                        }}
                    >홈으로 돌아가기</button>
                <div id="not-yet-pop-up-line"></div>
            </div>
        </div>
    )
}

export default NotYet;