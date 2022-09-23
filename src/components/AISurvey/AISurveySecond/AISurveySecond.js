import './AISurveySecond.scss';
import book1 from 'images/AISurvey/book1.svg';
import book2 from 'images/AISurvey/book2.svg';
import book3 from 'images/AISurvey/book3.svg';
import book4 from 'images/AISurvey/book4.svg';

function AISurveySecond() {
    return (
        <form>
            <div>
                <div>
                    <h1>좋아요,<br />얼마 안 남았어요!</h1>
                    <div>
                        한 달에 평소 책을 얼마나<br />
                        읽으시나요?
                    </div>
                </div>
                <div id="ai-read-books">
                    <div>
                        <img src={book1} alt='book1' />
                        <div>설명</div>
                    </div>
                    <div>
                        <img src={book2} alt='book2' />
                        <div>설명</div>
                    </div>
                    <div>
                        <img src={book3} alt='book3' />
                        <div>설명</div>
                    </div>
                    <div>
                        <img src={book4} alt='book4' />
                        <div>설명</div>
                    </div>
                </div>
            </div>
            <button>다음</button>
        </form>
    );
}

export default AISurveySecond;