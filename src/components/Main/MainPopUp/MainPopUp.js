import React from 'react';
import './MainPopUp.scss';

function MainPopUp({ setShowPopUp }) {
    return (
        <div id="main-pop-up-bg">
            <div id="main-pop-up">
                <h2>래썸 AI추천도서</h2>
                <div id="main-pop-up-contents">래썸 AI가 이용자의 “개인별 독서 이력”과 “취향 분석”을 통해 맞춤형으로 도서를 추천해드립니다.</div>
                <div id="main-pop-up-buttons">
                    {/* <button id="close-button" onClick={() => setShowPopUp(false)}>닫기</button> */}
                    <button id="short-cut-button">바로가기</button>
                </div>
                {/* <div id="do-not-show" onClick={() => setShowPopUp(false)}>일주일 동안 보지 않기</div> */}
                <div id="main-pop-up-line"></div>
            </div>
        </div>
    )
}

export default MainPopUp;