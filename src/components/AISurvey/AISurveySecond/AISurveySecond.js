import './AISurveySecond.scss';

function AISurveySecond() {
    return (
        <form>
            <div>
                <div>
                    <h1>좋아하는 과목은<br />어떻게 되시나요?</h1>
                    <div>
                        국어, 수학, 사회<br />
                        과학, 영어, 역사 중에<br />
                        골라주세요
                    </div>
                </div>
                <div id="ai-survey-second">
                </div>
            </div>
            <button>다음</button>
        </form>
    );
}

export default AISurveySecond;