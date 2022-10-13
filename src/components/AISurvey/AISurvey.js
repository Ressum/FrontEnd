import ExtraHeader from 'components/ExtraHeader/ExtraHeader';
import { Navigate, Route, Routes } from 'react-router-dom';
import './AISurvey.scss';
import AISurveyFifth from './AISurveyFifth/AISurveyFifth';
import AISurveyFirst from './AISurveyFirst/AISurveyFirst';
import AISurveyFourth from './AISurveyFourth/AISurveyFourth';
import AISurveySecond from './AISurveySecond/AISurveySecond';
import AISurveySixth from './AISurveySixth/AISurveySixth';
import AISurveyThird from './AISurveyThird/AISurveyThird';

function AISurvey() {
    return(
        <div id="ai-survey">
            <ExtraHeader />
            <Routes>
                <Route path="aisurvey1" element={ <AISurveyFirst/> } />
                <Route path="aisurvey2" element={ <AISurveySecond/> } />
                <Route path="aisurvey3" element={ <AISurveyThird/> } />
                <Route path="aisurvey4" element={ <AISurveyFourth/> } />
                <Route path="aisurvey5" element={ <AISurveyFifth/> } />
                <Route path="aisurvey6" element={ <AISurveySixth/> } />
                <Route path="/" element={<Navigate to="aisurvey1" />} />
            </Routes>
        </div>
    );
}

export default AISurvey;