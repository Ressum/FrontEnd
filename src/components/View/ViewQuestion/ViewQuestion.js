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
                        래썸이란 ㅁ누ㅠ펀유ㅓㅏㅍ아ㅓㅍ윰퓨만맟무너ㅏㅍㅇ뮾
                        ㅁㄴ치ㅜ뭎아ㅜ차ㅓ무차ㅓ무차ㅓㅁ누ㅏㅊㅁ눛ㅁㄴ추ㅏㅁㄴㅊㅁ
                        ㄴ춤나ㅓ추마너추ㅏㅁ우차ㅓㅁ우차ㅓㅁ우참우차ㅓㅁㅇ추ㅏㅓㅁ
                        ㅊㅁ처ㅏㅁ우차ㅓ무파우파ㅓㅇ무ㅏㅓㅁ우창ㅁㅊㅁ
                        ㅊㅁ춰ㅏㅁ우차ㅓㅁ웇파ㅓㅁ우참웇ㅁ엋ㅇ무ㅏㅊㅁ우ㅏㅊㅁㅇ
                        ㅁ워ㅏ춤아춤아춤아춤아ㅜㅊㅁ아ㅜㅊ마추ㅏㅁ니ㅏ무ㅏㅣㄴㅁㅊ
                        ㅁ누ㅏㅊ푸마ㅣ추미ㅏ췸취ㅏㅁㄴ추ㅏㅣㄴㅁ춤니ㅜ차뉜미추님ㅁ
                        ㅁ나ㅣ푸밍나ㅜ피ㅏㅁㄴ퓌ㅏ무피ㅏㅁ뉘ㅏㅁ니ㅏ미ㅏㄴ
                    </div>
                </li>
                <li>
                    <input type="checkbox" id="view-question-2" />
                    <label htmlFor='view-question-2'>
                        <h2>왜 래썸인가요?</h2>
                        <img src={plus} alt="plus" />
                    </label>
                    <div>

                    </div>
                </li>
                <li>
                    <input type="checkbox" id="view-question-3" />
                    <label htmlFor='view-question-3'>
                        <h2>래썸은 어떤 교육을 지향하나요?</h2>
                        <img src={plus} alt="plus" />
                    </label>
                    <div>

                    </div>
                </li>
                <li>
                    <input type="checkbox" id="view-question-4" />
                    <label htmlFor='view-question-4'>
                        <h2>래썸 구독료는 얼마인가요?</h2>
                        <img src={plus} alt="plus" />
                    </label>
                    <div>

                    </div>
                </li>
                <li>
                    <input type="checkbox" id="view-question-5" />
                    <label htmlFor='view-question-5'>
                        <h2>구독을 해지하려면 어떻게 해야 할까요?</h2>
                        <img src={plus} alt="plus" />
                    </label>
                    <div>

                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ViewQuestion;