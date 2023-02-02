
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import FlagList from './components/FlagList/FlagList';
import {Routes, Route} from "react-router-dom";
import { FlagsContextProvider } from './context/Flagcontext';


function App() {
  return (
    <>
    <Navbar />
    <FlagsContextProvider>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/flags' element={<FlagList />} />
    </Routes>
    </FlagsContextProvider>
    </>
    
    
  );
}

export default App;
