import bell from 'images/bell.svg';
import { Link } from 'react-router-dom';
import './NoticeShopButton.scss';

function NoticeShopButton() {
    return (
        <div id="notice-shop-button">
            <img src={bell} alt="notice" />
            <Link to="/goods">SHOP</Link>
        </div>
    );
}

export default NoticeShopButton;