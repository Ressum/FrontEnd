import extraHeader from 'images/ExtraHeader/extra-header.svg';
import './ExtraHeader.scss';

function ExtraHeader() {
    return (
        <div id="extra-header">
            <img src={extraHeader} alt="extraHeader" />
        </div>
    )
}

export default ExtraHeader;