import React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderSection from './components/section/HeaderSection';
import MainSection from './components/section/MainSection';
import FooterSection from './components/section/FooterSection';

import MainView from './components/view/MainView';
import VideoView from './components/view/VideoView';
import ChannelView from './components/view/ChannelView';
import SearchView from './components/view/SearchView';

const App = () => (
  <BrowserRouter>
    <HeaderSection />
    <MainSection>
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/video/:id' element={<VideoView />} />
        <Route path='/channel/:id' element={<ChannelView />} />
        <Route path='/search/:searchTerm' element={<SearchView />} />
      </Routes>
    </MainSection>
    <FooterSection />
  </BrowserRouter>
);

export default App