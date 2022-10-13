import { useRef } from 'react';
import './WritePopUp.scss';

function WritePopUp({ setShowPopUp }) {
    const jsonForm = useRef({
        bookInfos: [
            {
                bookTitle: '페인트 (2018)',
                bookAuthor: '',
                bookPublish: '',
                bookRegistration: '',
                bookRegistrant: '',
            },
            {
                bookTitle: '페인트 (2018)',
                bookAuthor: '',
                bookPublish: '',
                bookRegistration: '',
                bookRegistrant: '',
            },
            {
                bookTitle: '페인트 (2018)',
                bookAuthor: '',
                bookPublish: '',
                bookRegistration: '',
                bookRegistrant: '',
            },
            {
                bookTitle: '페인트 (2018)',
                bookAuthor: '',
                bookPublish: '',
                bookRegistration: '',
                bookRegistrant: '',
            },
        ]
    })
    return (
        <div id="write-pop-up-bg">
            <div id="write-pop-up">
                <div id="write-search-box">
                    <div id="search">
                        <div id="book-search">
                            도서명<input />
                        </div>
                        <div id="publish-search">
                            출판사<input />
                        </div>
                    </div>
                    <button>검색</button>
                </div>
                <div id="book-results-box">
                    <div id="book-results-number">전체 <span>26</span>건</div>
                    <div id="book-results-line"></div>
                    <ul id="book-results">
                        {
                            jsonForm.current.bookInfos.map((bookInfo, index) => (
                                <li className="book-result">
                                    <div className="book-result-order">{index+1}</div>
                                    <div>
                                        <h2 className="book-title">{bookInfo.bookTitle}</h2>
                                        <h3 className="book-author">저자: {bookInfo.bookAuthor} <span></span></h3>
                                        <h3 className="book-publish">출판산: {bookInfo.bookPublish} <span></span></h3>
                                        <h3 className="book-registration">등록일: {bookInfo.bookRegistration} <span></span></h3>
                                        <h3 className="book-registrant">등록인: {bookInfo.bookRegistrant} <span></span></h3>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WritePopUp;