import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SideMenu from './components/SideMenu.js';
import Calendar from './Pages/Calendar';
import Home from './Pages/Home';
import Today from './Pages/Today';
import ToDoList from './Pages/ToDoList';

function App() {
  return (
    <Router>
      <SideMenu/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/todolist' element={<ToDoList/>}/>
        <Route path='/today' element={<Today/>}/>
      </Routes>
    </Router>
  );
}

export default App;
