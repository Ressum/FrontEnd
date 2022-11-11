import { Link } from 'react-router-dom';
import './SignIn.scss';
import kakao from 'images/SignIn/kakao.svg';
import { useState } from 'react';

const onSubmit = e => {
    e.preventDefault();

}

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div id="sign-in">
            <form onSubmit={onSubmit}>
                <div id="input-form">
                    <div>
                        <label htmlFor="sign-in-email">이메일</label>
                        <input id="sign-in-email" value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일을 입력해주세요." />
                    </div>
                    <div>
                        <label htmlFor="sign-in-password">비밀번호</label>
                        <input type="password" id="sign-in-password" value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호를 입력해주세요." />
                    </div>
                </div>
                <Link to="/main/LostPassword">비밀번호를 잊어버리셨나요?</Link>
                <div id="login">
                    <button>로그인</button>
                    <div>
                        <div>래서가 처음이신가요?</div>
                        <Link to="/main/signup">회원가입하기</Link>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="horizontal-line"></div>
                        <div id="continue-with">continue with</div>
                        <div className="horizontal-line"></div>
                    </div>
                    <div id="with-options">
                        <div id="with-kakao">
                            <img src={kakao} alt="kakao" />
                            <div>카카오로 로그인</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;