import './App.css';
import { Routes, Route} from "react-router-dom";
import Landing from './landingpage/Landing';
import Testimony from './components/Testimony';
import Privacy from './components/Privacy';

function App() {
  return (

    
    <>
    {/* <Privacy /> */}
    {/* <Landing /> */}
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='testimony' element={<Testimony />} />
      <Route path="privacy-policy" element={<Privacy />} />
    </Routes>

    </>
 
  );
}

export default App;
