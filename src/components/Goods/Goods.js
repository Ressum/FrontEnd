import { Route, Routes } from 'react-router-dom';

import './Goods.scss';
import GoodsDetail from '../GoodsDetail/GoodsDetail';
import GoodsList from '../GoodsList/GoodsList';
import ShoppingBag from 'images/Goods/shopping-bag.svg';
import Profile from 'images/Goods/profile.svg';

function Goods() {
    return (
        <div id="goods">
            <div id="goods-header">
                <div id="goods-logo">
                    Rasham<br />
                    Goods<br />
                    Shop
                </div>
                <div id="goods-user-info">
                    <img id="goods-shopping-bag" src={ShoppingBag} alt="shoppingBag" />
                    <img id="goods-profile" src={Profile} alt="profile" />
                </div>
            </div>
            <Routes>
                <Route path="/" element={<GoodsList />} />
                <Route path="id/*" element={<GoodsDetail />} />
            </Routes>
        </div>
    );
}

export default Goods;