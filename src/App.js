import './App.css';
import React, { use, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import BasicInfo from './components/BasicInfo';
import AdditionalQuestions from './components/AdditionalQuestions';
import EnteredDetails from './components/EnteredDetails';
import ThankYouPage from './components/ThankYouPage';
import { About} from './components/About';

const getDataFromLocalStorage = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key)) || {};
  } catch {
    return {};
  }
};


function App() {

  const [basicData, setBasicData] = useState(getDataFromLocalStorage('data'));
  const [questionData, setQuestionData] = useState(getDataFromLocalStorage('questiondata'));

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basicData));
  },[basicData]);

  useEffect(() => {
    localStorage.setItem('questiondata', JSON.stringify(questionData));
  }, [questionData]);

  const handleBasicInfoSubmit = (name, email, contact) => {
    setBasicData ({ name, email, contact })
  }

  const handleQuestionsSubmit = (profession, interest, reference) => {
    setQuestionData({ profession, interest, reference })
  }

  return (
    <Router>
      <Routes>
        <Route 
          path='/' 
          element={<BasicInfo addBasicData={handleBasicInfoSubmit} />} 
        />
        <Route 
           path='/questions' 
           element={<AdditionalQuestions addQuestionData={handleQuestionsSubmit} />} 
        />
        <Route 
           path='/details' 
           element={<EnteredDetails data={basicData} questionData={questionData} />}
        />
        <Route 
           path='/thanks' 
           element={<ThankYouPage />} 
        />
        <Route 
          path='/about'
          element={<About />}
        />
      </Routes>
    </Router>
  );
}

export default App;
