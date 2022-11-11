import React from 'react';
import './Payment.scss';
import bookImg from 'images/Payment/book.svg';

function Payment() {
    return(
        <div id="payment">
            <h1>주문 / 결제</h1>
            <div id="payment-line"></div>
            <form>
                <div id="purchaser-info">
                    <h2>구매자 정보</h2>
                    <ul>
                        <li>
                            <h3>이름</h3>
                            <div></div>
                        </li>
                        <li>
                            <h3>이메일</h3>
                            <div></div>
                        </li>
                        <li>
                            <h3>휴대폰 번호</h3>
                            <div></div>
                        </li>
                    </ul>
                </div>
                <div id="receiver-info">
                    <h2>받는 사람 정보</h2>
                    <ul>
                        <li>
                            <h3>이름</h3>
                            <div></div>
                        </li>
                        <li>
                            <h3>배송 주소</h3>
                            <div></div>
                        </li>
                        <li>
                            <h3>연락처</h3>
                            <div></div>
                        </li>
                    </ul>
                </div>
                <div id="purchase-book-type">
                    <label id="common-book">
                        <div>
                            <div>
                                <h3>일반 책 구매</h3>
                                <div>20000₩</div>
                            </div>
                            <input type="radio" name="book-type" />
                        </div>
                        <img src={bookImg} alt="book" />
                    </label>
                    <label id="used-book">
                        <div>
                            <div>
                                <h3>중고 책 구매</h3>
                                <div>13000₩</div>
                            </div>
                            <input type="radio" name="book-type" />
                        </div>
                        <img src={bookImg} alt="book" />
                    </label>
                </div>
                <div id="payment-info">
                    <h2>결제 정보</h2>
                    <ul>
                        <li>
                            <h3>총상품가격</h3>
                            <div></div>
                        </li>
                        <li>
                            <h3>할인 쿠폰</h3>
                            <div></div>
                        </li>
                        <li>
                            <h3>배송비</h3>
                            <div></div>
                        </li>
                        <li>
                            <h3>래썸캐시</h3>
                            <div></div>
                        </li>
                        <li>
                            <h3>총 결제금액</h3>
                            <div></div>
                        </li>
                        <li>
                            <h3>결제방법</h3>
                            <div></div>
                        </li>
                    </ul>
                </div>
                <button>결제</button>
            </form>
        </div>
    );
}

export default Payment;