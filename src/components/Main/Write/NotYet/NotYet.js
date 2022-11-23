import './NotYet.scss';
import { useNavigate } from "react-router-dom";

function NotYet() {
    const navigate = useNavigate();
    return (
        <div id="not-yet-pop-up-bg">
            <div id="not-yet-pop-up">
                <h2>준비중인 페이지입니다.</h2>
                <div id="not-yet-pop-up-contents">글쓰기 페이지는 아직 준비중입니다.</div>
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