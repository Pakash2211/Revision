
import './App.css';
import { Route,Routes } from 'react-router-dom';
import {Formtable} from './components/form'
import{Home} from './components/home'
function App() {
  return (
    <div className="App">
      <Routes>
       <Route path = '/' element={<Home/>}></Route>
        <Route path = '/add-country' element={<Formtable/>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
