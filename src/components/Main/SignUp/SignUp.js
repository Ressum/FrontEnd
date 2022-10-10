import './SignUp.scss';
import male from 'images/SignUp/male.svg';
import female from 'images/SignUp/female.svg';
import search from 'images/search.svg';

function SignUp() {
    return(
        <div id="sign-up">
            <form>
                <div id="input-form">
                    <div id="email-gender-container">
                        <div id="email-container">
                            <label htmlFor="email">이메일</label>
                            <input id="email" placeholder="이메일" pattern='^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$' />
                        </div>
                        <div id="gender-container">
                            <div>성별</div>
                            <div id="gender-input">
                                <input type="radio" name="gender" id="male" required />
                                <label htmlFor="male" className="gender-label">
                                    <img src={male} alt="male" />
                                </label>
                                <input type="radio" name="gender" id="female" />
                                <label htmlFor="female" className="gender-label">
                                    <img src={female} alt="female" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div id="password-container">
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" id="password" placeholder="비밀번호" pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()_-+=[]{}~?:;`|/]).{8,16}$' required />
                    </div>
                    <div id="re-password-container">
                        <label htmlFor="re-password">비밀번호 재입력</label>
                        <input type="password" id="re-password" placeholder="비밀번호" pattern='^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()_-+=[]{}~?:;`|/]).{8,16}$' required />
                    </div>
                    <div id="address-container">
                        <label htmlFor="address">주소</label>
                        <div>
                            <input id="address" placeholder="우편번호" minLength={5} maxLength={30} required />
                            <a target="_blank" href="https://www.juso.go.kr/statis/infoMyArea.do">
                                <button type="button">
                                    <img src={search} alt="search" />
                                </button>
                            </a>
                        </div>
                        <input id="detail-address" placeholder="상세주소" minLength={3} maxLength={30} required />
                    </div>
                    <div id="birth-container">
                        <label>생년월일</label>
                        <div>
                            <div id="birth-year">
                                <input id="" placeholder="" required />
                                <div>년</div>
                            </div>
                            <div id="birth-month">
                                <input id="" placeholder="" required />
                                <div>월</div>
                            </div>
                            <div id="birth-day">
                                <input id="" placeholder="" required />
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
