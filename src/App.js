// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import File from './File';
// import File2 from './File2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<File/>}/>
          {/* <Route path='/File2' element={<File2/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
