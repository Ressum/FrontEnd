import './AISurvey8.scss';
import { Link } from 'react-router-dom';

function AISurvey8() {
    return (
        <form>
            <div className='aisurvey-8'>
                <div className='questions'>
                    <h1>사밀님이 어른이 된 모습은 어떨까요?</h1>
                    <div>
                        저흰 언젠간 어른이 될꺼에요! 어른이 된 사밀님의 모습을 생각해볼까요?
                    </div>
                </div>
                <div id="ai-survey-book-count">
                    <input id="book-count-option-1" type="radio" required name="book-count" />
                    <label htmlFor="book-count-option-1">
                        <div>친구들과 신나게 놀고 있을 것 같아요!</div>
                    </label>
                    <input id="book-count-option-2" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-2">
                        <div>열심히 공부를 하고 있을 것 같아요!</div>
                    </label>
                    <input id="book-count-option-3" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-3">
                        <div>음.. 잘 모르겠어요!</div>
                    </label>
                    <input id="book-count-option-4" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-4">
                        <div>혼자가 좋아요! 재밌게 놀고 있을 것 같아요</div>
                    </label>
                </div>
            </div>
            <Link to="/aisurvey/aisurvey9">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurvey8;