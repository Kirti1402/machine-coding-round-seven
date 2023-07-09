import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import {Routes,Route} from "react-router-dom"
import Continents from './Component/Continents';
import Country from './Component/Country';
import PlaceToVisit from './Component/PlaceToVisit';

function App() {
  return (
    <div className="App">

     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/continents" element={<Continents/>} />
      <Route path="/country" element={<Country/>} />
      <Route path="/placesToVisit" element={<PlaceToVisit/>} />
     </Routes>
    </div>
  );
}

export default App;
