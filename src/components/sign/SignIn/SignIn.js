import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.scss';
import kakao from 'images/SignIn/kakao.svg';
import { useEffect, useState } from 'react';
import { collection, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase_config";
import { useNavigate } from 'react-router-dom';

function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState();
    const navigate = useNavigate();
    let find = false;

    useEffect(() => {
        onSnapshot(collection(db, "User"), (snapshot) => {
            setUserData(snapshot._snapshot.docChanges)
        });
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        alert('로그인에 성공했습니다!');
        navigate('/main/home');
    }
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
                {/*<Link to="/main/LostPassword">비밀번호를 잊어버리셨나요?</Link>*/}
                <div id="login">
                    <button>로그인</button>
                    <div>
                        <div>래서가 처음이신가요?</div>
                        <Link to="/sign/signup">회원가입하기</Link>
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