import { useRef } from 'react';
import './Notice.scss';
import bell from 'images/bell.svg';
import { Link } from 'react-router-dom';

function Notice() {
    const noticeId = useRef([
        123,
        124,
        125,
        126,
        127,
        128
    ]);
    return (
        <div id="notice">
            <h1>공지사항</h1>
            <div id="notice-horizontal-line"></div>
            <ul>
                {
                    noticeId.current.map((id, index) => (
                        <li key={index}>
                            <div>
                                <h3>9월 래서 웹사이트 전체 공지 안내</h3>
                                <div>2022.09.06</div>
                            </div>
                            <div>박우빈님</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Notice;