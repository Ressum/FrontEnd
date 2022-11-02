import GoodsData from './GoodsList.json';
import './GoodsList.scss';
import goods1 from 'images/Goods/goods1.svg';
import goods2 from 'images/Goods/goods2.svg';
import goods3 from 'images/Goods/goods3.svg';
import goods4 from 'images/Goods/goods4.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GoodsList() {
    const [dummyImgs, setDummyImgs] = useState([]);
    useEffect(() => { // 임시 코드
        const imgArr = [];
        for (let i = 0; i < GoodsData.goodsList.length; i++) {
            const imgIndex = i % 4;
            imgArr.push(imgIndex === 0 ? goods1
                        : imgIndex === 1 ? goods2
                        : imgIndex === 2 ? goods3
                        : goods4);
        }
        setDummyImgs(imgArr);
    }, []);

    return (
        <>
            <div id="goods-list-title">Items</div>
            <ul id="goods-list">
                {
                    GoodsData.goodsList.map((goodsInfo, i) => (
                        <Link to={`id/${goodsInfo.goodsId}`}>
                            <li key={goodsInfo.goodsId}>
                                <img src={dummyImgs[i]} alt="goodsThumbnail" />
                                <h6>{goodsInfo.goodsName}</h6>
                                <div>{goodsInfo.goodsPrice}₩</div>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </>
    );
}

export default GoodsList;