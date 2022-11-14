import { useNavigate } from 'react-router-dom';
import './SignUpPopUp.scss';

function SignUpPopUp({setShowSignUpPopUp}) {
    const navigate = useNavigate();

    return (
        <div id="sign-up-pop-up--bg">
            <div id="sign-up-pop-up--container">
                <h1>회원가입 완료됨</h1>
                <button
                    id="sign-up-pop-up--check"
                    onClick={() => {
                        setShowSignUpPopUp(false)
                        navigate('/')
                    }}
                >확인</button>
            </div>
        </div>
    )
}

export default SignUpPopUp;