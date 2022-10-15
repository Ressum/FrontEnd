import './NoticeDetail.scss';
import noticeDetailImg from 'images/Notice/notice-detail-img.svg';

function NoticeDetail() {
    return (
        <div id="notice-detail">
            <h1>공지사항</h1>
            <div id="notice-detail-horizontal-line"></div>
            <div id="notice-detail-contents">
                <div id="notice-detail-header">
                    <h2 id="notice-detail-title">9월 래썸 웹사이트 전체 공지 안내</h2>
                    <div id="notice-detail-info">
                        <div><span id="notice-detail-writer">박우빈님</span> | <span id="notice-detail-date">2022.09.06</span></div>
                        <div>조회 <span id="notice-detail-views">3921</span> | 댓글 <span id="notice-detail-comments">62</span></div>
                    </div>
                </div>
                <div id="notice-detail-section">
                    <img src={noticeDetailImg} alt="noticeDetailImg" />
                    <div id="notice-detail-text">
                        dnsjfkndkjvdskvkslbndsnvbkdanckladnbvkjladnvldanvldanvadvnkdavkdav
                        advnkdjvndkjnvkjdnvdlsvkndsklvdsnkvdksvdsjlvbdkjlvbn kdjlnckdavcdaknvkdav
                        advdkjnvkjdsnvksfnvklfsnbkljbnckldankvnfskjvndacnadkjcnadklcnvadvnadv
                        adnvjkdanvkdankcsnclasmnkvbdaljvbdaljcbadjklbcdajklbvldjkbvjkldbvlkdv
                        adnbjkvdablvjdbjlkvcbadjlkcbasdbckadljbckjdbcjldbcldbcdcdacladc
                        adncjkdabvkdslbkvdsbjvkbdalcjbasjklcbadjkvbdalkjbckadbcadlcad
                        cnadjkvbdsljvbjfvbdklcbjadkbcjkldbvkjdsbvlkdbckljadlcascad
                        cdsvjkdsblvfbslvdbacbaslicdbjlkvbdsjklvbdlabcdajcdablcdbcdc
                        danvjkdsbvlkjdbvkldbkcjnadkjcndskjlvnsdfkjlcndkljvbsdljcbndakjvbndv
                        dancvjkdsbvkdsbcldkbckljadnckjadnckjldacnjkankcjadjcjkadlnbcljkadbcjkdac
                        adncjkdbvkldsbvjkldbljvasbjklcbvsdiufshblcbsdjfbsjklcbjkldcbnad
                        ‘cadnckjbad’cbdjkcbjhldbcjlasdbvdabcjhdsbcvhjlasdbcjlasbjlcbdjlkcasd
                        casnbjkcbdlvjdabcldbjck bsdjkvbjkadlbcklak
                    </div>
                </div>
                <div id="notice-detail-footer"></div>
            </div>
        </div>
    );
}

export default NoticeDetail;