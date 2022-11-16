import { useNavigate } from 'react-router-dom';
import './ReservationPopUp.scss';

function ReservationPopUp({setShowReservationPopUp}) {
    const navigate = useNavigate();

    return (
        <div id="sign-up-pop-up--bg">
            <div id="sign-up-pop-up--container">
                <h1>사전예약이 완료되었습니다!</h1>
                <button
                    id="sign-up-pop-up--check"
                    onClick={() => {
                        setShowReservationPopUp(false)
                        navigate('/')
                    }}
                >확인</button>
            </div>
        </div>
    )
}

export default ReservationPopUp;