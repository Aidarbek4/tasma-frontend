import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "./viewfilm.scss"

function ViewFim() {
    const [film, setFilm]=useState({
        title:"",
        description:"",
        year:"",
        duration:"",
        ageLimit:"",
        genre:"",
        posterUrl:"",
        videoUrl:""
    })

    useEffect(()=>{
        loadFilm()
    },[])

    const {id} = useParams();

    const loadFilm = async ()=>{
        const result = await axios.get(`http://localhost:8080/film/${id}`);
        setFilm(result.data);
    }

  return (
    <div className='viewfilm'>
        <div className="container">
            <div className="row">
                <div className="column">
                    <div className="card">
                        <div className="desc">
                            <div className="poster-wrapper">
                                <img src={film.posterUrl} alt="poster" />
                            </div>
                            <div className="info">
                                <h2>{film.title}</h2>
                                <p>{film.description}</p>
                                <span>{film.genre}</span>
                                <span>{film.year}</span>
                                <span>{film.duration}</span>
                            </div>                           
                        </div>
                        <div className="video" >
                            <iframe width="1200" height="600" src={film.videoUrl} frameborder="0"></iframe>
                        </div>
                    </div>
                    <Link to={"/"}>Back to Home
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewFim