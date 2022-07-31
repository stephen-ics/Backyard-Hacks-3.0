import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import Dashboard from './pages/Dashboard'
import Completed from './pages/Completed'
import PlantProfile from './pages/PlantProfile'
import SearchProfile from './pages/SearchProfile'
import PlantDay from './pages/PlantDay'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/search' exact element={<Search />}></Route>
          <Route path='/search/:id' exact element={<SearchProfile />}></Route>
          <Route path='/dashboard' exact element={<Dashboard />}></Route>
          <Route path='/dashboard/:id' exact element = {<PlantProfile/>}></Route>
          <Route path='/dashboard/:id/:id2' exact element = {<PlantDay />}></Route>
          <Route path='/completed' exact element={<Completed/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
