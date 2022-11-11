import React from 'react';
import './AISurveyResult.scss';
import bookCover from 'images/AISurvey/book-cover.svg';
import { Link } from 'react-router-dom';

function AISurveyResult() {
    return(
        <div id="ai-survey-result">
            <div>
                <h3>~~한 회원님에게 추천하는 책이에요!</h3>
                <img src={bookCover} alt='bookCover' />
                <h4>책 이름</h4>
                <h5>저자</h5>
                <div id="ai-survey-buttons">
                    <button>다시 추천받기</button>
                    <button>공유하기</button>
                </div>
                <div>
                    더 정확한 추천을 원한다면? 
                    <Link to="/view">지금바로 래썸으로!</Link>
                </div>
            </div>
        </div>
    );
}

export default AISurveyResult;