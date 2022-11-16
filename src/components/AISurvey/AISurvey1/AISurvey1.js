import { Link } from 'react-router-dom';
import './AISurvey1.scss';

function AISurvey1() {
    return (
        <form>
            <div className="aisurvey-1">
                <div className='questions'>
                    <h1>안녕하세요, 사밀이님!</h1>
                    <div>
                        래썸 AI가 사밀이님의
                        편한 독서를 도와드려요!
                    </div>
                </div>
                <div id="ai-survey-user-info">
                    <div id="ai-survey-user-info__1">
                        <h2>성별은 무엇인가요?</h2>
                        <div>
                            <input type="radio" name="ai-gender" id="ai-male" required />
                            <label htmlFor="ai-male" className="ai-gender">
                                남성
                            </label>
                            <input type="radio" name="ai-gender" id="ai-female" />
                            <label htmlFor="ai-female" className="ai-gender">
                                여성
                            </label>
                        </div>
                    </div>
                    <div id="ai-survey-user-info__2">
                        <h2>나이는요?</h2>
                        <div><input />세</div>
                    </div>
                </div>
            </div>
            <Link to="/aisurvey/aisurvey2">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurvey1;