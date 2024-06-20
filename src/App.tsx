import React from 'react';
import './App.css';
import { Navbar } from './Layout/HeaderAndFooter/Navbar';
import { ExploreTopBooks } from './Layout/Homepage/ExploreTopBooks';
import { Carousel } from './Layout/Homepage/Carousel';
import { Heros } from './Layout/Homepage/Heros';
import { LibrrayServices } from './Layout/Homepage/LibraryServices';
import { Footer } from './Layout/HeaderAndFooter/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibrrayServices/>
      <Footer/>
    </div>
  );
}

export default App;
