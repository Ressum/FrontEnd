import { useNavigate } from 'react-router-dom';
import './ReservationPopUp.scss';
import read from 'images/Write/read.png';

function ReservationPopUp({setShowReservationPopUp}) {
    const navigate = useNavigate();

    return (
        <div id="sign-up-pop-up--bg">
            <img src={read} alt="cry" />
            <div id="sign-up-pop-up-container">
                <h2>사전예약이 <br />완료되었습니다!</h2>
                <button
                    id="sign-up-pop-up--check"
                    onClick={() => {
                        setShowReservationPopUp(false)
                        navigate('/')
                    }}
                >확인</button>
                <div id="sign-up-line"></div>
            </div>
        </div>
    )
}

export default ReservationPopUp;