import React from 'react';
import { useRef } from 'react';
import './NoticeList.scss';
import { Link } from 'react-router-dom';

function NoticeList() {
    // const noticeId = useRef([
    //     123
    // ]);
    return (
        <div id="notice-list">
            <h1>공지사항</h1>
            <div id="notice-list-horizontal-line"></div>
            {/* <ul>
                {
                    noticeId.current.map((id, index) => (
                        <Link to={`id/${id}`} key={index}>
                            <li>
                                <div>
                                    <h3>9월 래서 웹사이트 전체 공지 안내</h3>
                                    <div>2022.09.06</div>
                                </div>
                                <div>박우빈님</div>
                            </li>
                        </Link>
                    ))
                }
            </ul> */}
            <h1>공지가 없습니다.</h1>
        </div>
    );
}

export default NoticeList;