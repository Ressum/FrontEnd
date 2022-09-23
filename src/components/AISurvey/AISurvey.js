import ExtraHeader from 'components/ExtraHeader/ExtraHeader';
import { Navigate, Route, Routes } from 'react-router-dom';
import './AISurvey.scss';
import AISurveyFirst from './AISurveyFirst/AISurveyFirst';
import AISurveySecond from './AISurveySecond/AISurveySecond';
import AISurveyThird from './AISurveyThird/AISurveyThird';

function AISurvey() {
    return(
        <div id="ai-survey">
            <ExtraHeader />
            <Routes>
                <Route path="aisurvey1" element={ <AISurveyFirst/> } />
                <Route path="aisurvey2" element={ <AISurveySecond/> } />
                <Route path="aisurvey3" element={ <AISurveyThird/> } />
                <Route path="/" element={<Navigate to="aisurvey1" />} />
            </Routes>
        </div>
    );
}

export default AISurvey;