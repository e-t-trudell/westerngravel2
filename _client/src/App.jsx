// import {useState} from 'react';
// import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
// import styles.css from '../scss';


import Main from './views/Main';
// import AggregateList from './components/AggregateList';
// import ConcreteList from './components/ConcreteList';
// import Detail from './components/Detail';
// import Update from './components/Update';
// import PersonForm from './components/PersonForm';
// import PersonList from './components/PersonList';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' default element={<Main/>}/>
            {/* <Route  path="/aggregates" element={<AggregateList/>}/>
            <Route  path="/concretes" element={<ConcreteList/>}/> */}
          {/*<Route path="/people/edit/:id" element={<Update/>} /> */}

          {/* <Route path='/home' element={<PersonForm/>}/> */}
          {/* <Route path='/home' element={<PersonList/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
