import React from 'react';
import './Home.scss';
import cover_21941 from 'images/Home/cover_21941.svg';
import cover_21942 from 'images/Home/cover_21942.svg';
import cover_21943 from 'images/Home/cover_21943.svg';
import cover_21944 from 'images/Home/cover_21944.svg';
import profile from 'images/Home/profile.svg';
import { useRef } from 'react';

function Home() {
    const contentsImagesSrc = useRef([
        cover_21941,
        cover_21942,
        cover_21943,
        cover_21944,
        cover_21944,
        cover_21943,
        cover_21943
    ])
    
    return (
        <div id="home">
            <ul id="contents">
                {
                    contentsImagesSrc.current.map((imagesSrc, index) => (
                        <li className="content" key={index}>
                            <div className="content-header">
                                <img src={profile} alt="profile" />
                                <div>
                                    <h3><span>사밀</span>님이 읽었어요</h3>
                                    <div><span>n</span>분 전</div>
                                </div>
                            </div>
                            <div className="content-section">
                                <img src={imagesSrc} alt="content-img" />
                                <div>
                                    <div className="paragraph-cover">
                                        ㅇㄴ마ㅓ푸아너퓨ㅜ아ㅓㅠ파유파마ㅏㅁ뉴차ㅓㄴㅁ차ㅓㄴ무차ㅓㄴ무ㅏ처눔천머춘문머춘ㅁ추ㄴㅁㅇㅇㄴㅁㅇㄴㅇㄴㅇㄴ
                                    </div>
                                    <div className="division-line"></div>
                                    <div className="book-info">
                                        <div className="title">
                                            불편한 편의점
                                        </div>
                                        <div className="author">
                                            <span>김호현</span> 지음
                                        </div>
                                        <div className="publish">
                                            <span>조선출판사</span> 출판
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Home;