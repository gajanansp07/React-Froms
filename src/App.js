import React from 'react';
import './App.css';
// import AxiosComponent from './UseAxios/AxiosComponent';
import AxiosPost from './UseAxios/AxiosPost';
function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <h1>Check header</h1>
        <div>Normal text</div>
      </div>
      {/* <AxiosComponent /> */}
      <AxiosPost />
      
    </div>
  );
}

export default App;
