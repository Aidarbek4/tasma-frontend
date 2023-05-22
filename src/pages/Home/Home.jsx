import { useEffect, useState } from "react"
import "./home.scss"
import axios from "axios"
import { Link } from "react-router-dom";

function Home() {
    const [films, setFilms] = useState([]);

    useEffect(()=>{
        loadFilms();
    },[]);

    const loadFilms= async ()=>{
        const result = await axios.get("http://localhost:8080/films");
        setFilms(result.data)
    }

    const deleteFilm = async (id)=>{
        await axios.delete(`http://localhost:8080/film/${id}`);
        loadFilms();
    }

  return (
    <div className='home'>
        <div className="home__container">
            <div className="home__inner">
                <h2 className="home__title">Films List</h2>
                <div className="home__films">

                    {
                        films.map((film, index)=>(
                            <div className="home__film" key={index+film.title}>
                                <div className="home__film-poster-wrapper">
                                    <img src={film.posterUrl} alt="poster" className="home__film-poster" />
                                </div>
                                <div className="home__film-info">
                                    <h4 className="home__film-title">{film.title}</h4>

                                    <div className="home__film-buttons">
                                        <Link to={`/view_film/${film.id}`} className="home__film-btn">Read More</Link>
                                        <Link to={ `/edit_film/${film.id}`} className="home__film-btn">Edit</Link>
                                        <button className="home__film-btn" onClick={()=>deleteFilm(film.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home