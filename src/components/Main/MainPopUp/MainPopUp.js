import React from 'react';
import './MainPopUp.scss';

function MainPopUp({ setShowPopUp }) {
    return (
        <div id="main-pop-up-bg">
            <div id="main-pop-up">
                <h2>타이틀 제목</h2>
                <div id="main-pop-up-contents">래썸을 시작하기 위해선 설문조사를 받으셔야 해요!</div>
                <div id="main-pop-up-buttons">
                    <button id="close-button" onClick={() => setShowPopUp(false)}>닫기</button>
                    <button id="short-cut-button">바로가기</button>
                </div>
                <div id="do-not-show" onClick={() => setShowPopUp(false)}>일주일 동안 보지 않기</div>
                <div id="main-pop-up-line"></div>
            </div>
        </div>
    )
}

export default MainPopUp;