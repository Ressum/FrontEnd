import GoodsData from './Goods.json';

function Goods() {
    return(
        <div id="goods">
            <div id="goods-header">
                <div id="goods-logo"></div>
                <div id="goods-user-info">
                    <div id="goods-shopping-bag"></div>
                    <div id="goods-profile"></div>
                </div>
            </div>
            <div id="goods-title">Items</div>
            <ul id="goods-list">
                {
                    GoodsData.goodsList.map(goodsInfo => (
                        <li key={goodsInfo.goodsId}>
                            <img src={goodsInfo.thumbnailUrl} />
                            <h6>{goodsInfo.goodsName}</h6>
                            <div>{goodsInfo.goodsPrice}</div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Goods;