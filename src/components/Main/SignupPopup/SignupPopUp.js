import React from 'react';
import './SignupPopUp.scss';

function SignupPopUp({ setShowPopUp }) {
    return (
        <div id="signup-pop-up-bg">
            <div id="Signup-pop-up">
                <h1>회원가입이 완료되었습니다!</h1>
                <div id="main-pop-up-line"></div>
            </div>
        </div>
    )
}

export default SignupPopUp;