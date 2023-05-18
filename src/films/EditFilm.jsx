import { useEffect, useState } from 'react'
import './addfilm.scss'
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

function EditFilm() {

let navigate = useNavigate();

const {id} = useParams();

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

    const {title, description, year, duration, ageLimit, genre, videoUrl, posterUrl}=film;

    const onInputChange=(e)=>{
        setFilm({...film,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        loadFilm();
    },[])

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/film/${id}`, film);
        navigate("/");
    }

    const loadFilm = async ()=>{
        const result = await axios.get(`http://localhost:8080/film/${id}`);
        setFilm(result.data);
    }

  return (
    <div className='addfilm'>
        <div className="container">
            <div className="row">
                <div className="column">
                    <h2 className="addfilm__title">Edit Film</h2><form onSubmit={(e)=>onSubmit(e)}>
                    <div className="addfilm__form">
                        <label htmlFor="Title" >Title
                    

                        <input type={"text" } placeholder="Enter the film's title" name="title" value={title} onChange={(e)=>onInputChange(e)}/></label>

                        <label htmlFor="Description" >Description
                        <input type={"text" } placeholder="Enter the film's description" name="description" value={description} onChange={(e)=>onInputChange(e)}/></label>

                        <label htmlFor="Genre" >Genre
                        <input type={"text" } placeholder="Enter the film's genre" name="genre" value={genre} onChange={(e)=>onInputChange(e)}/></label>

                        <label htmlFor="AgeLimit" >Age limit
                        <input type={"text" } placeholder="Enter the film's age limit" name="ageLimit" value={ageLimit} onChange={(e)=>onInputChange(e)}/></label>

                        <label htmlFor="Duration" >Duration
                        <input type={"text" } placeholder="Enter the film's duration" name="duration" value={duration} onChange={(e)=>onInputChange(e)}/></label>

                        <label htmlFor="Year" >Year
                        <input type={"text" } placeholder="Enter the film's year" name="year" value={year} onChange={(e)=>onInputChange(e)}/></label>

                        <label htmlFor="PosterUrl" >Poster Url
                        <input type={"text" } placeholder="Enter the film's poster url" name="posterUrl" value={posterUrl} onChange={(e)=>onInputChange(e)}/></label>

                        <label htmlFor="VideoUrl" >Video Url
                        <input type={"text" } placeholder="Enter the film's video url" name="videoUrl" value={videoUrl} onChange={(e)=>onInputChange(e)}/></label>

                    </div>
                    <button className='addfilm__btn' type="submit">Submit</button>
                    <Link to="/" className='addfilm__btn' type="submit">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditFilm