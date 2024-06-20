import './App.css';
import { Navbar } from './Layout/HeaderAndFooter/Navbar';
import { Footer } from './Layout/HeaderAndFooter/Footer';
import { Homepage } from './Layout/Homepage/Homepage';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

