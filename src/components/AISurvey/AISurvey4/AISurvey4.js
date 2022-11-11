import { Link } from 'react-router-dom';
import './AISurvey4.scss';

function AISurvey4() {
    return (
        <form>
            <div className='aisurvey-4'>
                <div className='questions'>
                    <h1>책 두께는 어느정도가 좋나요?</h1>
                    <div>
                        주로 읽는 두께거나 가장 집중이 잘되는 두께로 골라봐요!
                    </div>
                </div>
                <div id="ai-survey-book-amount">
                    <input id="book-amount-option-1" type="radio" required name="book-amount" />
                    <label htmlFor="book-amount-option-1">
                        <div>금방 읽을 수 있는 얇은 책이요! </div>
                    </label>
                    <input id="book-amount-option-2" type="radio" name="book-amount" />
                    <label htmlFor="book-amount-option-2">
                        <div>어느정도 두께가 있는 책이 좋아요!</div>
                    </label>
                    <input id="book-amount-option-3" type="radio" name="book-amount" />
                    <label htmlFor="book-amount-option-3">
                        <div>일반적인 성인책 두께를 읽어요!</div>
                    </label>
                    <input id="book-amount-option-4" type="radio" name="book-amount" />
                    <label htmlFor="book-amount-option-4">
                        <div>어떤 두께라도 상관 없어요!</div>
                    </label>
                </div>
            </div>
            <Link to="/aisurvey/aisurvey5">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurvey4;