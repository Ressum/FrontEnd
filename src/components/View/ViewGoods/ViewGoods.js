import './ViewGoods.scss';
import goods1 from 'images/View/goods1.svg';
import goods2 from 'images/View/goods2.svg';
import goods3 from 'images/View/goods3.svg';
import goods4 from 'images/View/goods4.svg';
import goods5 from 'images/View/goods5.svg';
import goods6 from 'images/View/goods6.svg';

function ViewGoods() {
    return (
        <div id="view-goods">
            <h1>
                랫썸 굿즈샵을 통해서<br />
                귀엽고 이쁜 아이템들을 구경하세요!
            </h1>
            <div>
                <div>
                    <h3>items</h3>
                    <h2>
                        Rasham<br />
                        Goods Shop
                    </h2>
                </div>
                <ul>
                    <li>
                        <img src={goods1} alt="goods1" />
                    </li>
                    <li>
                        <img src={goods2} alt="goods2" />
                    </li>
                    <li>
                        <img src={goods3} alt="goods3" />
                    </li>
                    <li>
                        <img src={goods4} alt="goods4" />
                    </li>
                    <li>
                        <img src={goods5} alt="goods5" />
                    </li>
                    <li>
                        <img src={goods6} alt="goods6" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ViewGoods;