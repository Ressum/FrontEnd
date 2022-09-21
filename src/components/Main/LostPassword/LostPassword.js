import { Link } from 'react-router-dom';
import './LostPassword.scss';

function LostPassword() {
    return(
        <div id="sign-in">
            <form>
                <div id="input-form">
                    <div>
                        <label htmlFor="email">이메일</label>
                        <input id="email" placeholder="이메일을 입력해주세요." />
                    </div>
                    <div>
                        <label htmlFor="password">비밀번호</label>
                        <input id="password" placeholder="비밀번호를 입력해주세요." />
                    </div>
                </div>
                <Link to="none">비밀번호를 잊어버리셨나요?</Link>
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
                </div>
            </form>
        </div>
    );
}

export default LostPassword;