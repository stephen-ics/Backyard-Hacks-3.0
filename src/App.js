import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import Dashboard from './pages/Dashboard'
import Completed from './pages/Completed'
import SearchProfile from './pages/SearchProfile'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/search' exact element={<Search />}></Route>
          <Route path='/search/:id' exact element={<SearchProfile />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/completed' exact element={<Completed/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
