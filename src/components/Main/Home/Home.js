import React, { useContext } from 'react';
import './Home.scss';
import cover_21941 from 'images/Home/cover_21941.png';
import profile from 'images/Home/profile.png';
import { useRef } from 'react';
import { UserContext } from 'App';

function Home() {
    const { loginUser } = useContext(UserContext);

    const contentsImagesSrc = useRef([
        cover_21941,
        cover_21941,
        cover_21941
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
                                    <h3><span>{loginUser}</span>님이 읽었어요</h3>
                                    <div><span>n</span>분 전</div>
                                </div>
                            </div>
                            <div className="content-section">
                                <img src={imagesSrc} alt="content-img" />
                                <div>
                                    <div className="paragraph-cover">
                                        독고씨의 이야기를 알게 되고나선 사실 인과응보다 싶었지만, 사람은 변하지 않는다는 진리 아닌 진리 같은 말을 깨주는 주인공이라서 나도 모르게 그의 변화를 응원했다.
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