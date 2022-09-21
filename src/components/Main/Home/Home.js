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
        cover_21944
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
                                    <h5>사밀님이 읽었어요</h5>
                                    <div><span>n</span>분 전</div>
                                </div>
                            </div>
                            <div className="content-section">
                                <img src={imagesSrc} alt="content-img" />
                                <div>
                                    <div className="paragraph-cover">
                                        ㅇㄴ마ㅓ푸아너퓨ㅜ아ㅓㅠ파유파마ㅏㅁ뉴차ㅓㄴㅁ차ㅓㄴ무차ㅓㄴ무ㅏ처눔천머춘문머춘ㅁ추ㄴㅁㅇㅇㄴㅁㅇㄴㅇㄴㅇㄴ
                                        ㄴㅇㄴㅁㅇㄴㅁㅁㄴㅊ문챔ㄴ퍼ㅏㅊㅁ유ㅜ팡ㅍ잋ㅇ뭐츄미ㅓㅍ ㅠㅇ퓨이ㅠㅍㅁ이ㅠㅊㅁㅇㄴ취ㅑㅁㄴ챰나ㅗㅇ럊보랴ㅕ
                                        포파ㅠ마엄ㄴ춘맟니ㅏㅁㅊㄴㅁㄴㅁㅊㅁ너ㅏ츄ㅏㅓㅁ뉴차ㅓㅁㅇ춤우차유ㅣㅓㄷ뷰러차ㅗ머ㅏㅇ촘ㅇ나촤어ㅗ파엎차ㅓㅇ
                                        ㅁ추ㅠㅏㅓ우ㅠ퍼ㅏ우ㅏ처ㅜㅁㄴㅇ치ㅏㄴㅁ추ㅏㅓㅁㄴ추ㅠㅏㅁ어ㅠ추ㅏㅁ유ㅜㅏㅁ유퓸아ㅓ풍마ㅓ풍마ㅜ참어ㅜ차머누
                                        참누차ㅓㄴ무천ㅁ처ㅜㄴ마처나ㅓ춘마추ㄴㅁ차ㅓㅁ누ㅠ파ㅓ유파ㅓㅠ파ㅓ유라로ㅑ져오차ㅓㅁ누차ㅓ누ㅠ퍼ㅏㄴ유퍼ㅏ유
                                        ㅜ차문차ㅣㄴ무치ㅏㅜㅇ풍마ㅣㅜㅊ피ㅏㄴ무치ㅏ느ㅜ치ㅁㄴ츄ㅏㅓㅁ뉴파ㅓ유퍼유론ㅁ애춘마ㅓ츄어ㅏ퓸아ㅓㅠ나머ㅜ치
                                        나무치ㅏ누참ㅇㅊ우ㅏ친뭋ㅁ니ㅏ춘미ㅏ췬마ㅢㄴㅁ아ㅜ낯ㄴ미ㅏ춘ㅁㅁㄴ처ㅏㅁ나ㅓㅍ유파ㅓ암누친무찬무치ㅏㄴ뭋ㄴ무
                                        추ㅏㅇ펀ㅇ류ㅏ런퓨ㅏ로아ㅕ롱냐초ㅠㅏ어ㅠ차ㅓ유차ㅓ뉴차ㅓㄴ뮤ㅏㅊㄴ
                                    </div>
                                    <div className="division-line"></div>
                                    <div className="book-info">
                                        <div className="title">
                                            불편한 편의점
                                        </div>
                                        <div className="author">
                                            <span>김호현</span> (지은이) 지음
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