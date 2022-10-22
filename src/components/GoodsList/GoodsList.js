import GoodsData from './GoodsList.json';
import './GoodsList.scss';

function GoodsList() {
    return(
        <>
            <div id="goods-list-title">Items</div>
            <ul id="goods-list">
                {
                    GoodsData.goodsList.map(goodsInfo => (
                        <li key={goodsInfo.goodsId}>
                            <img src={goodsInfo.thumbnailUrl} />
                            <h6>{goodsInfo.goodsName}</h6>
                            <div>{goodsInfo.goodsPrice}₩</div>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default GoodsList;