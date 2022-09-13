import { useRef } from "react";

import './MyPage.scss';
import myProfileImg from 'images/my-profile-img.svg';
import bookReportImg from 'images/Event/book-report-image.svg';
import readBookImg from 'images/Event/read-book-image.svg';
import joinedEventImg from 'images/Event/joined-event-image.svg';

function MyPage() {
    const bookReportsId = useRef([
        123123,
        234123,
        345123,
        456123,
        567123
    ]);
    const readBooksId = useRef([
        123123,
        234123,
        345123,
        456123,
        567123,
        678123
    ]);
    const joinedEventsId = useRef([
        123123,
        234123,
        345123,
        456123
    ]);
    return (
        <div id="my-page">
            <div id="my-page-header">
                <img src={myProfileImg} alt="profile" />
                <div>
                    <h2><span>Shamir</span>님</h2>
                    <div>오늘은 날씨가 좋네요!</div>
                </div>
            </div>
            <div id="fix-logout-button">
                <div>내 정보 수정</div>
                <div>로그아웃</div>
            </div>
            <div id="book-reports">
                <h2>내가 쓴 독서록</h2>
                <div className="my-page-line"></div>
                <ul>
                    {
                        bookReportsId.current.map((id, index) => (
                            <li key={index}>
                                <img src={bookReportImg} alt="bookReportImg" />
                                <h4>감명깊게 읽었던 책</h4>
                                <div>불편한 편의점 - 2022.09.03</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div id="read-books">
                <h2>내가 읽은 책</h2>
                <div className="my-page-line"></div>
                <ul>
                    {
                        readBooksId.current.map((id, index) => (
                            <li key={index}>
                                <img src={readBookImg} alt="readBookImg" />
                                <div>
                                    <h4>불편한 편의점</h4>
                                    <div>김호연 (지은이) 지음, 조선출판사 출판</div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div id="joined-events">
                <h2>내가 참여한 이벤트</h2>
                <div className="my-page-line"></div>
                <ul>
                    {
                        joinedEventsId.current.map((id, index) => (
                            <li key={index}>
                                <img src={joinedEventImg} alt="joinedEventImg" />
                                <h4>잊지마 출석체크</h4>
                                <div>2022.09.01 ~ 2022.09.30</div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default MyPage;