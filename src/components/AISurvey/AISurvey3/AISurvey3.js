import { Link } from 'react-router-dom';
import './AISurvey3.scss';

function AISurvey3() {
    return (
        <form>
            <div className='aisurvey-3'>
                <div className='questions'>
                    <h1>관심이 가는 분야 혹은 과목을<br />골라볼까요?</h1>
                    <div>
                        개수 상관없이 다양하게 선택해 주세요
                    </div>
                </div>
                <div id="ai-survey-3">
                    <div>과학</div>
                    <div>의학</div>
                    <div>영상 제작</div>
                    <div>수학</div>
                    <div>코딩</div>
                    <div>미술</div>
                    <div>국어</div>
                    <div>문학</div>
                    <div>음악</div>
                    <div>사회</div>
                    <div>경제</div>
                    <div>요리</div>
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