import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './GoodsDetail.scss';
import goods1 from 'images/Goods/goods1.svg';
import goods2 from 'images/Goods/goods2.svg';
import goods3 from 'images/Goods/goods3.svg';
import goods4 from 'images/Goods/goods4.svg';

function GoodsDetail({
    itemName = "item names",
    goodsPrice = 30000,
    goodsDescription = "ndsjnksnvadkvdbiodavdnalvdancaca\naskvnadlkalknvldanvdoavikadnlkcvnas\nvadlknvsalknvlaksdnvklsacnlsacsa\ncasnklcnadklvnlkcdankccnakscnsalncs\ncaslkcnadklvndalncvladnclakdnclasnc\nascklasnclkasdncldncdanclknadcda\ncadnklcdanklcdanlkcdanlcnadlkndaa"
}) {
    const {id} = useParams();
    const [goodsID, setGoodsID] = useState(null);
    const [dummyImg, setDummyImg] = useState();
    useEffect(() => {
        setGoodsID(id);
        const imgIndex = id % 4 - 1;
        setDummyImg(
            imgIndex === 0 ? goods1
            : imgIndex === 1 ? goods2
            : imgIndex === 2 ? goods3
            : goods4
        );
    }, []);

    return (
        <form id="goods-detail">
            <img src={dummyImg} id="goods-img" alt="goodsImg" />
            <div id="goods-detail-info">
                <div id="goods-detail-info--text">
                    <h1 id="goods-name">{itemName}</h1>
                    <h2 id="goods-price">{goodsPrice}₩</h2>
                    <div id="goods-info">{goodsDescription}</div>
                </div>
                <button id="goods-detail-info--purchase">걸제</button>
            </div>
        </form>
    );
}

export default GoodsDetail;