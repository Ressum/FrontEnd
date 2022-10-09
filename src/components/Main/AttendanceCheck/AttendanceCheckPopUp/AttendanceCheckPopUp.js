import './AttendanceCheckPopUp.scss';

function AttendanceCheckPopUp({ setShowPopUp }) {
    return (
        <div id="attendance-check-pop-up-bg">
            <div id="attendance-check-pop-up">
                <div id="attendance-check-alert">
                    <h2>알림</h2>
                    <div>출석체크가 완료되었습니다.</div>
                </div>
                <button id="attendance-check-button" onClick={() => setShowPopUp(false)}>확인</button>
            </div>
        </div>
    )
}

export default AttendanceCheckPopUp;