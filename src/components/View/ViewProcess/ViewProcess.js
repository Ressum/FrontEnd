import './ViewProcess.scss';
import next from 'images/View/next.svg';

function ViewProcess() {
    return (
        <div id="view-process">
            <h1>초간편 신청 프로세스</h1>
            <div>
                <div>
                    <h2>맞춤형 책 찾기</h2>
                    <div>자녀에게 딱 맞는 책을 추천 해주는 추천 서비스가 준비되어 있어요!</div>
                </div>
                <img src={next} alt="next" />
                <div>
                    <h2>독서 시작!</h2>
                    <div>설문조사를 통해 추천된 책과 함께 래썸의 독서 공책이 배송 됩니다! (중고 도서 or 일반 책 선택지를 고를 수 있어요!)</div>
                </div>
                <img src={next} alt="next" />
                <div>
                    <h2>다양한 컨텐츠!</h2>
                    <div>동기부여,교육 컨텐츠를 즐겨봐요! 래썸엔 독서 마라톤, 독서록과 같은 서비스가 있어요</div>
                </div>
                <img src={next} alt="next" />
                <div>
                    <h2>고객 맞춤 후기</h2>
                    <div>한달간 이용했다면 래썸 후기를 작성할 수 있어요! 고객 맞춤형 래썸의 후기는 다음 서비스에 반영됩니다!</div>
                </div>
            </div>
        </div>
    );
}

export default ViewProcess;