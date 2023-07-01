import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.module.scss';
import { MainPage } from './Containers/MainPage';
import { ServicesPage } from './Containers/ServicesPage';
import { ContactsPage } from './Containers/ContactsPage';
import { ProjectsPage } from './Containers/ProjectsPage';
import { PortfolioPage } from './Containers/PortfolioPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/portfolio' element={<PortfolioPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
