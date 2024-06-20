import React from 'react';
import './App.css';
import { Navbar } from './Layout/HeaderAndFooter/Navbar';
import { ExploreTopBooks } from './Layout/Homepage/ExploreTopBooks';
import { Carousel } from './Layout/Homepage/Carousel';
import { Heros } from './Layout/Homepage/Heros';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
    </div>
  );
}

export default App;
