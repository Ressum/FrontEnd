import { Link } from 'react-router-dom';
import './AISurveyFourth.scss';

function AISurveyFourth() {
    return (
        <form>
            <div>
                <div>
                    <h1>난이도가 어떤 책을<br />선호하시나요?</h1>
                    <div>
                        (난이도 정확하게 기입)<br />
                        (난이도 정확하게 기입) 중에 <br />
                        골라주세요
                    </div>
                </div>
                <div id="ai-survey-fourth">
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

export default AISurveyFourth;