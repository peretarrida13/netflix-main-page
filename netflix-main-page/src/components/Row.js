import React, { useState } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import {
    trendingTitle, 
} from '../styles/Styles';
import { Modal } from './Modal';

export const Row = ({ category, title, id }) =>{
    const [movieSelected, setMovieSelected] = useState({});
    const [modalVisibility, setModalVisibility] = useState(false);
    const imgURL = 'https://image.tmdb.org/t/p/original';

    const scrollLeftSmallRows = () =>{
        if(document.getElementById(id).scrollLeft === 0){
            document.getElementById(id).scrollLeft=4086;
            
        }else{
            document.getElementById(id).scrollLeft-=(window.innerWidth-80);
        }
        
    }

    const scrollRightSmallRows = () =>{
        console.log(document.getElementById(id).scrollLeft);
        if(document.getElementById(id).scrollLeft === 4086){
            document.getElementById(id).scrollLeft=0;
        }else{
            document.getElementById(id).scrollLeft+=(window.innerWidth-80);
        }
    }


    const handleModal = (movie) => {
        setMovieSelected(movie);
        setModalVisibility(true);
        console.log(movieSelected, modalVisibility);
    }


    return(
        <section>
            <h2 style={trendingTitle}>{title}</h2>
            <div id={id} className='smallImgDiv'>    
                {
                    category.map((film) =>{
                        return (   
                            <img src={imgURL + film.backdrop_path} alt={film.name} className='smallImgStyle' key={film.id} onClick={() =>handleModal(film)} />
                        );
                    })
                }
            </div>
            
            <div className='smallLeftArrowDiv'><RiArrowLeftSLine className='leftArrow' onClick={scrollLeftSmallRows}/></div>
            <div className='smallRightArrowDiv'><RiArrowRightSLine className='rightArrow' onClick={scrollRightSmallRows}/></div>

            {modalVisibility && <Modal movie={movieSelected} setModalVisibility={setModalVisibility}/>}
        </section>
    )
}