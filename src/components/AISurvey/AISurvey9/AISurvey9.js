import './AISurvey9.scss';
import { Link } from 'react-router-dom';

function AISurvey9() {
    return (
        <form>
            <div className='aisurvey-9'>
                <div className='questions'>
                    <h1>사밀님은 어떤 일이 가장 관심이 가시나요?</h1>
                    <div>
                        원하는게 없다면 조금이라도 관심가는 걸 골라볼까요?
                    </div>
                </div>
                <div id="ai-survey-book-count">
                    <input id="book-count-option-1" type="radio" required name="book-count" />
                    <label htmlFor="book-count-option-1">
                        <div>무언가를 열심히 파고드는 일!</div>
                    </label>
                    <input id="book-count-option-2" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-2">
                        <div>이곳저곳 돌아다니는 일</div>
                    </label>
                    <input id="book-count-option-3" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-3">
                        <div>다른 사람과 함께 할 수 있는 일</div>
                    </label>
                    <input id="book-count-option-4" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-4">
                        <div>머리속에 떠오르는 걸 만들어가는 일!</div>
                    </label>
                </div>
            </div>
            <Link to="/aisurvey/aisurvey10">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurvey9;