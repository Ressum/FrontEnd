import './ViewQuestion.scss';
import plus from 'images/View/plus.svg';

function ViewQuestion() {
    return (
        <div id="view-question">
            <h1>자주 묻는 질문</h1>
            <ul>
                <li>
                    <input type="checkbox" id="view-question-1" />
                    <label htmlFor='view-question-1'>
                        <h2>래썸이란 무엇인가요?</h2>
                        <img src={plus} alt="plus" />
                    </label>
                    <div>
                        래썸은 자녀 맞춤형 독서 교육 서비스입니다.
                    </div>
                </li>
                <li>
                    <input type="checkbox" id="view-question-2" />
                    <label htmlFor='view-question-2'>
                        <h2>왜 래썸인가요?</h2>
                        <img src={plus} alt="plus" />
                    </label>
                    <div>
                    독서는 모든 학습의 기초가 됩니다. 수능 만점자의 90%가 어릴적부터 독서를 해왔다는 사실, 아셨나요? 하지만, 어른도 어려운 독서입니다. 자녀 맞춤형 독서 교육 서비스 래썸과 함께 독서 습관을 만들어봐요.
                    </div>
                </li>
                <li>
                    <input type="checkbox" id="view-question-3" />
                    <label htmlFor='view-question-3'>
                        <h2>래썸은 어떤 교육을 지향하나요?</h2>
                        <img src={plus} alt="plus" />
                    </label>
                    <div>
                    교육의 뜻은 자녀에게 있어야합니다. 래썸은 자녀 맞춤형 서비스로 자녀가 주체가 되는 교육을 추구합니다.
                    </div>
                </li>
                <li>
                    <input type="checkbox" id="view-question-4" />
                    <label htmlFor='view-question-4'>
                        <h2>래썸 구독료는 얼마인가요?</h2>
                        <img src={plus} alt="plus" />
                    </label>
                    <div>
                    래썸 서비스는 맞춤형 책과 함께 고객에게 날아갑니다! 래썸 서비스는 월 2만원으로 이용가능합니다.
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ViewQuestion;