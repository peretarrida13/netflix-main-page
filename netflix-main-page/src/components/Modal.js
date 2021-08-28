import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

export const Modal = ({ movie, setModalVisibility }) =>{
    const imgUrl = 'https://image.tmdb.org/t/p/original';
    const percentForU = Math.floor(Math.random() * 100);
    console.log(movie.first_air_date);

    return(
        <div className='modalPresentation' role='presentation'>
            <div className='modalWrap'>
                <div className='movieModal'>
                    <AiFillCloseCircle onClick={() => setModalVisibility(false)} className='closeModalIcon'/>
                    <img src={imgUrl + movie.backdrop_path} className='modalPoster'/>  

                    <div className='movieDescriptionDiv'>
                        <p className='releaseDate'>
                            <span className='userPercent'>{percentForU}% for you</span>
                            <strong>   First aired on: </strong>
                            {movie.release_date ? movie.release_date : movie.first_air_date}
                        </p>
                        <p className='title'>{movie.title ? movie.title : movie.name}</p>
                        <p className='overview'>{movie.overview}</p>
                        <p className='rating'><strong>Vote Average: </strong>{movie.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}