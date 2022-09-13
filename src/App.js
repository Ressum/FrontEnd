import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import './index.scss';
import Main from "./components/Main/Main";
import View from 'components/View/View';
import AISurvey from 'components/AISurvey/AISurvey';
import Goods from 'components/Goods/Goods';
import BottomBar from 'components/Main/BottomBar/BottomBar';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="View" element={<View />} />
          <Route path="aisurvey" element={<AISurvey />} />
          <Route path="goods" element={<Goods />} />
          <Route path="main/*" element={<Main />} />
          <Route path='/' element={<Navigate to="main"/>} />
        </Routes>
      </Router>
      <BottomBar />
    </>
  );
}

export default App;
