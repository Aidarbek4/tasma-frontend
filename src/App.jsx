import './App.scss';
import AddFilm from './components/films/AddFilm/AddFilm';
import EditFilm from './components/films/EditFilm/EditFilm';
import ViewFim from './components/films/ViewFilm/ViewFim';
import Navbar from './layout/Navbar/Navbar';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/add_film" element={<AddFilm/>}/>
        <Route exact path="/edit_film/:id" element={<EditFilm/>}/>
        <Route exact path="/view_film/:id" element={<ViewFim/>} />
        <Route exact path="/admin_panel" element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
