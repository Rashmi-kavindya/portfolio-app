import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </Router>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App';

// ReactDOM.render(
//   <Router>
//     <Routes>
//       <Route path = '/' element = {<App/>}/>
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );
