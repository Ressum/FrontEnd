import extraHeader from 'images/ExtraHeader/extra-header.svg';
import { Link } from 'react-router-dom';
import './ExtraHeader.scss';

function ExtraHeader() {
    return (
        <div id="extra-header">
            <Link to="/">
                <img src={extraHeader} alt="extraHeader" />
            </Link>
        </div>
    )
}

export default ExtraHeader;