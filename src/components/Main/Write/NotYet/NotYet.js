import './NotYet.scss';
import readbook from 'images/Write/read.png';
import { useNavigate } from "react-router-dom";

function NotYet() {
    const navigate = useNavigate();
    return (
        <div id="not-yet-pop-up-bg">
            <img src={readbook} alt="read"/>
            <div id="not-yet-pop-up">
                <h2>준비중인<br/>페이지입니다.</h2>
                <div id="not-yet-pop-up-buttons">
                    <button 
                        id="short-cut-button"
                        onClick={() => {
                            navigate('/');
                        }}
                    >홈으로 돌아가기</button>
                </div>
                <div id="not-yet-pop-up-line"></div>
            </div>
        </div>
    )
}

export default NotYet;