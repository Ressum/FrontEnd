import { Link } from 'react-router-dom';

import './ViewFirstPage.scss';
import main from 'images/View/main.svg';

function ViewFirstPage() {
    return (
        <div id="view-first-page">
            <Link to="/">LOGIN</Link>
            <div>
                <h1>Ressum!</h1>
                <img src={main} alt="main" />
                <div>래썸, 독서 교육의 새로운 시작.</div>
            </div>
        </div>
    );
}

export default ViewFirstPage;