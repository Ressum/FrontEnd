import ExtraHeader from 'components/ExtraHeader/ExtraHeader';
import { Navigate, Route, Routes } from 'react-router-dom';
import './AISurvey.scss';
import AISurvey1 from './AISurvey1/AISurvey1';
import AISurvey2 from './AISurvey2/AISurvey2';
import AISurvey3 from './AISurvey3/AISurvey3';
import AISurvey4 from './AISurvey4/AISurvey4';
import AISurvey5 from './AISurvey5/AISurvey5';
import AISurvey6 from './AISurvey6/AISurvey6';
import AISurvey7 from './AISurvey7/AISurvey7';
import AISurvey8 from './AISurvey8/AISurvey8';
import AISurvey9 from './AISurvey9/AISurvey9';
import AISurvey10 from './AISurvey10/AISurvey10';

function AISurvey() {
    return(
        <div id="ai-survey">
            <ExtraHeader />
            <Routes>
                <Route path="aisurvey1" element={ <AISurvey1 /> } />
                <Route path="aisurvey2" element={ <AISurvey2 /> } />
                <Route path="aisurvey3" element={ <AISurvey3 /> } />
                <Route path="aisurvey4" element={ <AISurvey4 /> } />
                <Route path="aisurvey5" element={ <AISurvey5 /> } />
                <Route path="aisurvey6" element={ <AISurvey6 /> } />
                <Route path="aisurvey7" element={ <AISurvey7 /> } />
                <Route path="aisurvey8" element={ <AISurvey8 /> } />
                <Route path="aisurvey9" element={ <AISurvey9 /> } />
                <Route path="aisurvey10" element={ <AISurvey10 /> } />
                <Route path="/" element={<Navigate to="aisurvey1" />} />
            </Routes>
        </div>
    );
}

export default AISurvey;