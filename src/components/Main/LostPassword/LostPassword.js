import { Link } from 'react-router-dom';
import './LostPassword.scss';

function LostPassword() {
    return(
        <div id="sign-in">
            <form>
                <div id="input-form">
                    <div className='email'>
                        <label htmlFor="email">가입할 때 쓴 이메일을 입력해주세요.</label>
                        <input id="email" placeholder="이메일" />
                    </div>
                </div>
                <div id="logins">
                    <button>확인</button>
                </div>
            </form>
        </div>
    );
}

export default LostPassword;