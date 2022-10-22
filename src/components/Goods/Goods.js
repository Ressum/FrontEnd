import GoodsData from './Goods.json';
import './Goods.scss';
import ShoppingBag from 'images/Goods/shopping-bag.svg';
import Profile from 'images/Goods/profile.svg';

function Goods() {
    return(
        <div id="goods">
            <div id="goods-header">
                <div id="goods-logo">
                    Rasham<br />
                    Goods<br />
                    Shop
                </div>
                <div id="goods-user-info">
                    <img id="goods-shopping-bag" src={ShoppingBag} />
                    <img id="goods-profile" src={Profile} />
                </div>
            </div>
            <div id="goods-title">Items</div>
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
        </div>
    );
}

export default Goods;