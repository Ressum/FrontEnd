import { Link } from 'react-router-dom';
import bell from 'images/bell.svg';
import photo from 'images/Write/photo.svg';
import './Write.scss';

function Write() {
    return (
        <div id="write">
            <h1>글쓰기</h1>
            <div id="write-horizontal-line"></div>
            <div id="write-contents">
                <div id="select-book">
                    <h2>책 선택하기</h2>
                    <div id="book-cover">
                        오른쪽 위의 검색 아이콘으로 책을 선택해주세요!
                    </div>
                </div>
                <div id="write-book">
                    <div>
                        <h2>독서록 쓰기</h2>
                        <div>
                            <h4>제목</h4>
                            <div className="write-book-line"></div>
                            <input type="text" placeholder="글의 제목을 입력해주세요." />
                            <h4>내용</h4>
                            <div className="write-book-line"></div>
                            <textarea placeholder="독서와 무관한 글 내용, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."></textarea>
                        </div>
                        <div>
                            <div>
                                <div>
                                    <img src={photo} alt="img-icon" />사진
                                </div>
                                <div>
                                    <input type="checkbox" id="public" />
                                    <label htmlFor="public">
                                        <div></div>
                                        글공개
                                    </label>
                                </div>
                            </div>
                        <button>게시</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="write-shop-button">
                <img src={bell} alt="notice" />
                <Link to="/goods">SHOP</Link>
            </div>
        </div>
    );
}

export default Write;