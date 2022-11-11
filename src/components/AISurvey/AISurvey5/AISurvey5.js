import { Link } from 'react-router-dom';
import './AISurvey5.scss';

function AISurvey5() {
    return (
        <form>
            <div className='aisurvey-5'>
                <div className='questions'>
                    <h1>지금 이 순간, 떠오르는 책을 적어봐요!</h1>
                    <div>
                        깊게 고민하지 않아도 괜찮아요!
                    </div>
                </div>
                <div id="ai-book-title">
                    <input placeholder='띄어쓰기를 포함한 정확한 책 제목을 말씀해주세요!' />
                    <div id="ai-division-line"></div>
                    <div>딱히 생각나는 책이 없다면, 이 항목을 넘어가주세요!</div>
                </div>
            </div>
            <Link to="/aisurvey/aisurvey6">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurvey5;