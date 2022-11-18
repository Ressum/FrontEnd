import { Link } from 'react-router-dom';
import './AISurvey3.scss';

function AISurvey3() {
    return (
        <form>
            <div className='aisurvey-3'>
                <div className='questions'>
                    <h1>관심이 가는 분야 혹은 과목을 골라볼까요?</h1>
                    <div>
                        개수 상관없이 다양하게 선택해 주세요
                    </div>
                </div>
                <div id="ai-survey-subject" className="option-select">
                    <input id="subject-options-1" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-1" className='subject-options'>과학</label>
                    <input id="subject-options-2" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-2" className='subject-options'>의학</label>
                    <input id="subject-options-3" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-3" className='subject-options'>영상 제작</label>
                    <input id="subject-options-4" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-4" className='subject-options'>수학</label>
                    <input id="subject-options-5" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-5" className='subject-options'>코딩</label>
                    <input id="subject-options-6" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-6" className='subject-options'>미술</label>
                    <input id="subject-options-7" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-7" className='subject-options'>국어</label>
                    <input id="subject-options-8" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-8" className='subject-options'>문학</label>
                    <input id="subject-options-9" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-9" className='subject-options'>음악</label>
                    <input id="subject-options-10" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-10" className='subject-options'>사회</label>
                    <input id="subject-options-11" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-11" className='subject-options'>경제</label>
                    <input id="subject-options-12" type="checkbox" name="subject-options" />
                    <label htmlFor="subject-options-12" className='subject-options'>요리</label>
                </div>
            </div>
            <Link to="/aisurvey/aisurvey4">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurvey3;