import React from 'react';
import photo from 'images/Write/photo.svg';
import search from 'images/search.svg';
import './Write.scss';
import { useState } from 'react';
import WritePopUp from './WritePopUp/WritePopUp';
import NotYet from './NotYet/NotYet';

const isNotYet = false;

function Write() {
    const [fileImage, setFileImage] = useState('');
    const saveFileImage = (event) => {
        setFileImage(URL.createObjectURL(event.target.files[0]));
    }
    const [showPopUp, setShowPopUp] = useState(false);

    const showDetailImage = () => {

    }
    const deleteImageFile = () => {
        setFileImage('');
    }

    return (
        <>
            {
                isNotYet ? <NotYet /> :
                    <div id="write">
                        <h1>글쓰기</h1>
                        <div id="write-horizontal-line"></div>
                        <div id="write-contents">
                            <div id="select-book">
                                <h2>책 선택하기</h2>
                                <div id="book-cover">
                                    오른쪽 위의 검색 아이콘으로 책을 선택해주세요!
                                    <button type="button" onClick={() => setShowPopUp(true)}>
                                        <img src={search} alt="search" />
                                    </button>
                                </div>
                            </div>
                            <div id="write-book">
                                <div id="write-book-wrap">
                                    <h2>독서록 쓰기</h2>
                                    <div id="write-book-form">
                                        <h4>제목</h4>
                                        <div className="write-book-line"></div>
                                        <input type="text" placeholder="글의 제목을 입력해주세요." />
                                        <h4>내용</h4>
                                        <div className="write-book-line"></div>
                                        <textarea placeholder="독서와 무관한 글 내용, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."></textarea>
                                    </div>
                                    <div className={fileImage ? "show-image-file" : null}>
                                        <div id="image-file" onClick={showDetailImage}>
                                            {fileImage && (
                                                <img alt="sample" src={fileImage} />
                                            )}
                                        </div>
                                    </div>
                                    <div id="write-book-footer">
                                        <div id="write-book-options">
                                            <div id="write-left-options">
                                                {
                                                    fileImage ? <button id="delete-image-file" onClick={deleteImageFile}>사진 삭제</button>
                                                    : 
                                                    <div id="write-left-image-input">
                                                        <label htmlFor='file'>
                                                            <img src={photo} alt="img-icon" />사진
                                                        </label>
                                                        <input type="file" id="file" accept='image/*' onChange={saveFileImage} />
                                                    </div>
                                                }
                                            </div>
                                            <div id="write-right-options">
                                                <input type="checkbox" id="public" />
                                                <label htmlFor="public">
                                                    글 비공개
                                                </label>
                                            </div>
                                        </div>
                                        <button id="write-book-upload">게시</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            showPopUp ? <WritePopUp setShowPopUp={setShowPopUp} /> : null
                        }
                    </div>
            }
        </>
    );
}

export default Write;