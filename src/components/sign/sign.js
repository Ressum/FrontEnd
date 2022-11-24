import React, { useContext } from 'react';
import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import { useState } from 'react';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import LostPassword from './LostPassword/LostPassword';
import { UserContext } from 'App';

function Main() {
    const { loginUser, setLoginUser } = useContext(UserContext);
    const refreshFunction = (data) => {
        setLoginUser(data);
    };

    return (
        <div>
            <Routes>
                {false ? null :
                    <>
                        <Route path="signin" element={<SignIn refreshFunction={refreshFunction} user={loginUser} />} />
                        <Route path="signup" element={<SignUp />} />
                    </>
                }
                <Route path="lostpassword" element={<LostPassword />} />
            </Routes>
        </div>
    );
}

export default Main;