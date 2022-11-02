import './ViewContents.scss';
import book1 from 'images/View/book1.svg';
import book2 from 'images/View/book2.svg';
import book3 from 'images/View/book3.svg';
import book4 from 'images/View/book4.svg';
import introduce1 from 'images/View/introduce1.svg';
import introduce2 from 'images/View/introduce2.svg';
import introduceMain from 'images/View/introduce-main.svg';
import bookReport from 'images/View/book-report.svg';
import eventBanner from 'images/View/event-banner.svg';

function ViewContents() {
    return (
        <div id="view-contents">
            <div id="view-beginning">
                <div>
                    <h1>
                        래썸만의 책 추천 서비스를<br />
                        이용해보세요!
                    </h1>
                    <h2>나에게 딱 맞춘 책을 추천 받을 수 있어요</h2>
                    <div>
                        <div>
                            <div id="view-beginning-title">
                                <h2>
                                    좋아요,<br />
                                    얼마 안 남았어요!
                                </h2>
                                <h3>
                                    한 달에 평소 책을 얼마나<br />
                                    읽으시나요?
                                </h3>
                            </div>
                            <ul>
                                <li>
                                    <img src={book1} alt='book1' />
                                    <div>설명</div>
                                </li>
                                <li>
                                    <img src={book2} alt='book2' />
                                    <div>설명</div>
                                </li>
                                <li>
                                    <img src={book3} alt='book3' />
                                    <div>설명</div>
                                </li>
                                <li>
                                    <img src={book4} alt='book4' />
                                    <div>설명</div>
                                </li>
                            </ul>
                        </div>
                        <button>다음</button>
                    </div>
                </div>
            </div>
            <div id="view-introduce">
                <img src={introduce1} alt="introduce1" />
                <div id="introduce1-explanation">
                    책과 책의 연결로 천천히,<br />
                    확실하게 폭넓은 분야를 익혀보아요
                </div>
                <div id="introduce2-explanation">
                    <div>
                        문해력, 어휘력 걱정이 되시나요?
                    </div>
                    <div>
                        래썸 공책의 단계학습으로<br />
                        보다 효과적인 독서를 해봐요!
                    </div>
                </div>
                <img src={introduce2} alt="introduce2" />
                <img src={introduceMain} alt="introduceMain" />
            </div>
            <div id="view-book-report">
                <div>
                    <h1>
                        랫썸에서 책을 읽고 독서록을 나눠보아요!
                    </h1>
                    <h2>
                        다른 친구들의 독서록을 보며 다양한 시각을 가질 수 있어요.
                    </h2>
                    <div>
                        <img src={bookReport} alt="bookReport" />
                        <div>
                            <h3>
                                ㅇㄴ마ㅓ푸아너퓨ㅜ아ㅓㅠ파유파마ㅏㅁ뉴차ㅓㄴㅁ차ㅓㄴ무차ㅓㄴ무ㅏ처눔천머춘문머춘ㅁ추ㄴㅁㅇㅇㄴㅁㅇㄴㅇㄴㅇㄴ
                                ㄴㅇㄴㅁㅇㄴㅁㅁㄴㅊ문챔ㄴ퍼ㅏㅊㅁ유ㅜ팡ㅍ잋ㅇ뭐츄미ㅓㅍ ㅠㅇ퓨이ㅠㅍㅁ이ㅠㅊㅁㅇㄴ취ㅑㅁㄴ챰나ㅗㅇ럊보랴ㅕ
                                포파ㅠ마엄ㄴ춘맟니ㅏㅁㅊㄴㅁㄴㅁㅊㅁ너ㅏ츄ㅏㅓㅁ뉴차ㅓㅁㅇ춤우차유ㅣㅓㄷ뷰러차ㅗ머ㅏㅇ촘ㅇ나촤어ㅗ파엎차ㅓㅇ
                                ㅁ추ㅠㅏㅓ우ㅠ퍼ㅏ우ㅏ처ㅜㅁㄴㅇ치ㅏㄴㅁ추ㅏㅓㅁㄴ추ㅠㅏㅁ어ㅠ추ㅏㅁ유ㅜㅏㅁ유퓸아ㅓ풍마ㅓ풍마ㅜ참어ㅜ차머누
                                참누차ㅓㄴ무천ㅁ처ㅜㄴ마처나ㅓ춘마추ㄴㅁ차ㅓㅁ누ㅠ파ㅓ유파ㅓㅠ파ㅓ유라로ㅑ져오차ㅓㅁ누차ㅓ누ㅠ퍼ㅏㄴ유퍼ㅏ유
                                ㅜ차문차ㅣㄴ무치ㅏㅜㅇ풍마ㅣㅜㅊ피ㅏㄴ무치ㅏ느ㅜ치ㅁㄴ츄ㅏㅓㅁ뉴파ㅓ유퍼유론ㅁ애춘마ㅓ츄어ㅏ퓸아ㅓㅠ나머ㅜ치
                            </h3>
                            <div>
                                <div id="view-vertical-line"></div>
                                <div>
                                    <h1>불편한 편의점</h1>
                                    <h2>김호연 (지은이) 지음<br />
                                        조선출판사 출판</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="view-event">
                <h1>보다 재밌는 독서를 해볼까요?</h1>
                <h2>독서 마라톤, 이벤트 대화 등 다양한 컨텐츠를 마음껏 이용해보아요!</h2>
                <img src={eventBanner} alt="eventBanner" />
            </div>
        </div>
    );
}

export default ViewContents;