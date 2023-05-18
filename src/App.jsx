import './App.scss';
import AddFilm from './films/AddFilm';
import EditFilm from './films/EditFilm';
import ViewFim from './films/ViewFim';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
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
      </Routes>
    </div>
  );
}

export default App;
