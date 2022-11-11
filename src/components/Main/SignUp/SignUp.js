import React from 'react';
import './SignUp.scss';
import male from 'images/SignUp/male.svg';
import female from 'images/SignUp/female.svg';
import search from 'images/search.svg';
import { useState } from 'react';
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase_config"
import { useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [birth, setBirth] = useState({
        year: '',
        month: '',
        day: ''
    });

    const onSubmit = e => {
        e.preventDefault();
        if (rePassword !== password) {
            alert("비밀번호가 일치하지 않습니다.");
        } else {
            const newUserRef = doc(collection(db, "User"));
            // later...
            setDoc(newUserRef, {
                email: email,
                password: password,
                gender: gender,
                address: detailAddress,
                zipCode: zipCode,
                birth: birth
            });
            alert('회원가입이 완료되었습니다!')
            navigate('/')
        }
    }

    return(
        <div id="sign-up">
            <form onSubmit={onSubmit}>
                <div id="input-form">
                    <div id="email-gender-container">
                        <div id="email-container">
                            <label htmlFor="email">이메일</label>
                            <input id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일" pattern='^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$' />
                        </div>
                        <div id="gender-container">
                            <div>성별</div>
                            <div id="gender-input">
                                <input type="radio" onChange={e => setGender('M')} name="gender" id="male" required />
                                <label htmlFor="male" className="gender-label">
                                    <img src={male} alt="male" />
                                </label>
                                <input type="radio" onChange={e => setGender('F')} name="gender" id="female" />
                                <label htmlFor="female" className="gender-label">
                                    <img src={female} alt="female" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div id="password-container">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" value={password} onChange={setPassword} id="password" placeholder="비밀번호" pattern='(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()_-+=[]{}~?:;`|/]).{8,16}$' required />
                    </div>
                    <div id="re-password-container">
                        <label htmlFor="re-password">비밀번호 재입력</label>
                        <input type="password" value={rePassword} onChange={setRePassword} id="re-password" placeholder="비밀번호" pattern='(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()_-+=[]{}~?:;`|/]).{8,16}$' required />
                    </div>
                    <div id="address-container">
                        <label htmlFor="address">주소</label>
                        <div>
                            <input id="address" value={zipCode} onChange={setZipCode} placeholder="우편번호" minLength={5} maxLength={30} required />
                            <a target="_blank" href="https://www.juso.go.kr/statis/infoMyArea.do">
                                <button type="button">
                                    <img src={search} alt="search" />
                                </button>
                            </a>
                        </div>
                        <input id="detail-address" value={detailAddress} onChange={setDetailAddress} placeholder="상세주소" minLength={3} maxLength={30} required />
                    </div>
                    <div id="birth-container">
                        <label>생년월일</label>
                        <div>
                            <div id="birth-year">
                                <input id="" value={birth.year} onChange={e => setBirth(state => ({...state, year: e.target.value}))} placeholder="" required />
                                <div>년</div>
                            </div>
                            <div id="birth-month">
                                <input id="" value={birth.month} onChange={e => setBirth(state => ({...state, month: e.target.value}))} placeholder="" required />
                                <div>월</div>
                            </div>
                            <div id="birth-day">
                                <input id="" value={birth.day} onChange={e => setBirth(state => ({...state, day: e.target.value}))} placeholder="" required />
                                <div>일</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sign-up-button">
                    <button>회원가입</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
