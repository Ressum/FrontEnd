import React, { createContext, useState } from 'react';
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
import SignIn from 'components/Main/SignIn/SignIn';

const userInfo = {
  id: 0,
  pw: '',
  isLogin: false,
}

export const UserContext = createContext(userInfo);

function App() {
  const [loginUser, setLoginUser] = useState(localStorage.getItem('user'));
  // const refreshFunction = (data) => {
  //   setLoginUser(data);
  // };

  return (
    <Router>
      <UserContext.Provider value={{loginUser, setLoginUser}}>
        <Routes>
          <Route path="View" element={<View />} />
          <Route path="aisurvey/*" element={<AISurvey />} />
          <Route path="goods/*" element={<Goods />} />
          <Route path="main/*" element={<Main />} />
          <Route path='/' element={<Navigate to="main" />} />
          {/* {false ? null :
            <>
              <Route path="signin" element={<SignIn refreshFunction={refreshFunction} user={loginUser} />} />
              <Route path="signup" element={<SignUp />} />
            </>
          } */}
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
