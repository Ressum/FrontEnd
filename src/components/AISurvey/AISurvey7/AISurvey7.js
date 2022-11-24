import './AISurvey7.scss';
import { Link } from 'react-router-dom';

function AISurvey7() {
    return (
        <form>
            <div className='aisurvey-7'>
                <div className='questions'>
                    <h1>요즘 어떤 고민이 있으신가요?</h1>
                    <div>
                        누구나 가질 수 있는 고민, 사밀님은 어떤 고민을 가지고 계신가요?
                    </div>
                </div>
                <div id="ai-survey-book-count" className="option-select">
                    <input id="book-count-option-1" type="radio" required name="book-count" />
                    <label htmlFor="book-count-option-1">
                        <div>제 얼굴과 모습이 신경쓰여요!</div>
                    </label>
                    <input id="book-count-option-2" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-2">
                        <div>친구들과 지내는게 어려워요!</div>
                    </label>
                    <input id="book-count-option-3" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-3">
                        <div>앞으로 무얼 해야할지 모르겠어요</div>
                    </label>
                    <input id="book-count-option-4" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-4">
                        <div>학교 성적, 공부에 대한 고민이 커요</div>
                    </label>
                    <input id="book-count-option-5" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-5">
                        <div>아무 고민 없어요!</div>
                    </label>
                </div>
            </div>
            <Link to="/aisurvey/aisurvey8">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurvey7;