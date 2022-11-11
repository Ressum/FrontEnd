import './AISurvey6.scss';
import { Link } from 'react-router-dom';

function AISurvey6() {
    return (
        <form>
            <div className='aisurvey-6'>
                <div className='questions'>
                    <h1>사밀님은 왜 책을 읽으시려하나요?</h1>
                    <div>
                        아무래도 좋아요! 조금이라도 마음이 가는 걸 선택해보아요 !
                    </div>
                </div>
                <div id="ai-survey-book-count">
                    <input id="book-count-option-1" type="radio" required name="book-count" />
                    <label htmlFor="book-count-option-1">
                        <div>애초에 책 읽는게 별로 내키진 않아요!</div>
                    </label>
                    <input id="book-count-option-2" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-2">
                        <div>좀 더 어른이 되고 싶어요</div>
                    </label>
                    <input id="book-count-option-3" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-3">
                        <div>궁금한게 너무 많아요! 지식을 얻고 싶어요.</div>
                    </label>
                    <input id="book-count-option-4" type="radio" name="book-count" />
                    <label htmlFor="book-count-option-4">
                        <div>그냥 책 읽는게 재밌어요!</div>
                    </label>
                </div>
            </div>
            <Link to="/aisurvey/aisurvey7">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurvey6;