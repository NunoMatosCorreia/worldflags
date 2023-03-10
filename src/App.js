
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import FlagList from './components/FlagList/FlagList';
import FlagDetails from './components/FlagList/FlagDetails/FlagDetails';
import {Routes, Route} from "react-router-dom";
import { FlagsContextProvider } from './context/FlagsContext';


function App() {
  return (
    <>
    <Navbar />
    <FlagsContextProvider>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/flags' element={<FlagList />} />
      <Route path='/flags/:flagName' element={<FlagDetails />} />
    </Routes>
    </FlagsContextProvider>
    </>
    
    
  );
}

export default App;
