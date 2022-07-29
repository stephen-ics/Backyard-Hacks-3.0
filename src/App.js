import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/about' exact element={<About />}></Route>
          <Route path='/page1' exact element={<Page1 />}></Route>
          <Route path='/page2' exact element={<Page2 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
