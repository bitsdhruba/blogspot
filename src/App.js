
import { Route, Routes } from 'react-router-dom';
import './App.css';
import  Home  from "./Pages/Home";
import Nav from './Components/Nav';
import Pagination from './Components/Pagination';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>
        <Pagination />
      </footer>
    </div>
  );
}

export default App;
