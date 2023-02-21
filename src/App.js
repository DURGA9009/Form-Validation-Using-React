import React from 'react';
import JoinForm from './components/JoinForm';
import './App.scss';
window.Buffer = window.Buffer || require("buffer").Buffer;

function App() {
  return (
    <div className="main-container d-table position-absolute m-auto">
      <JoinForm />
    </div>
  );
}

export default App;
