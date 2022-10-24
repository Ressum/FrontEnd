import './Notice.scss';
import { Route, Routes } from 'react-router-dom';
import NoticeList from '../NoticeList/NoticeList';
import NoticeDetail from '../NoticeDetail/NoticeDetail';

function Notice() {
    return (
        <Routes>
            <Route path="/" element={<NoticeList />} />
            <Route path="/id/*" element={<NoticeDetail />} />
        </Routes>
    );
}

export default Notice;