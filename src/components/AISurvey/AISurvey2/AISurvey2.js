import './AISurvey2.scss';
import { Link } from 'react-router-dom';

function AISurvey2() {
    return (
        <form>
            <div className='aisurvey-2'>
                <div className='questions'>
                    <h1>한 달에 책을 몇권정도<br />읽으시나요?</h1>
                    <div>
                        집중해서 모두 읽은 책을 생각해봐요
                    </div>
                </div>
                <div id="ai-read-books">
                    <div>
                        <div>한달에 책 1권 읽을까 말까 해요</div>
                    </div>
                    <div>
                        <div>한달에 책 2권은 읽죠!</div>
                    </div>
                    <div>
                        <div>한달에 책 3권 정도 읽어요</div>
                    </div>
                    <div>
                        <div>한달에 책 4권 이상 읽어요</div>
                    </div>
                </div>
            </div>
            <Link to="/aisurvey/aisurvey3">
                <button>
                    다음
                </button>
            </Link>
        </form>
    );
}

export default AISurvey2;