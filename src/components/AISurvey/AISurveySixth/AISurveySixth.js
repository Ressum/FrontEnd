import { Link } from 'react-router-dom';
import './AISurveySixth.scss';

function AISurveySixth() {
    return (
        <form>
            <div>
                <div>
                    <h1>그것 참<br />멋진데요?</h1>
                    <div>
                        이때까지 읽었던 책중,<br />
                        가장 재미있었던 책의 제목은 뭔가요?
                    </div>
                </div>
                <div id="ai-book-title">
                    <input placeholder='책 제목을 말씀해주세요!' />
                    <div id="ai-division-line"></div>
                    <div>딱히 생각나는 책이 없다면, 이 항목을 넘어가주세요!</div>
                </div>
            </div>
            <Link to="/main/aisurveyresult">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurveySixth;