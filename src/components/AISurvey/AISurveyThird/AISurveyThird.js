import './AISurveyThird.scss';

function AISurveyThird() {
    return (
        <form>
            <div>
                <div>
                    <h1>분량이 어떤 책을<br />선호하시나요?</h1>
                    <div>
                        (정확한 페이지 수 기입)<br />
                        (정확한 페이지 수 기입) 중에<br />
                        골라주세요
                    </div>
                </div>
                <div id="ai-survey-third">
                </div>
            </div>
            <button>다음</button>
        </form>
    );
}

export default AISurveyThird;