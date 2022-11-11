import './AISurvey10.scss';
import { Link } from 'react-router-dom';

function AISurvey10() {
    return (
        <form>
            <div className='aisurvey-10'>
                <div className='questions'>
                    <h1>사밀님은 어떤 반장을 뽑고 싶으신가요?사밀님은 어떤 반장을 뽑고 싶으신가요?</h1>
                    <div>
                        우리 반을 이끌 친구는 누구가 되었으면 하나요?
                    </div>
                </div>
                <div id="ai-survey-book-count">
                    <input id="book-count-option-1" type="radio" required name="book-count" />
                    <label htmlFor="book-count-option-1">
                        <div>엉뚱하지만 웃긴 반장!</div>
                    </label>
                    <input id="book-count-option-2" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-2">
                        <div>다른 친구를 배려하고 잘 이끌어가는 반장!</div>
                    </label>
                    <input id="book-count-option-3" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-3">
                        <div>맡은 일을 성실하게 하는 반장!</div>
                    </label>
                    <input id="book-count-option-4" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-4">
                        <div>즐거운 학교를 만들어줄 반장!</div>
                    </label>
                </div>
            </div>
            <Link to="/main/aisurveyresult">
                <button>
                    확인하기
                </button>
            </Link>
        </form>
    );
}

export default AISurvey10;