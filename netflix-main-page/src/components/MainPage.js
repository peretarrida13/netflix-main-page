import React, { useEffect, useState } from 'react';
import {
    moreInfoBtn,  
    playBTN,
    rowTitle,
    sectionDiv,
} from '../styles/Styles';
import { useFilmContext } from '../fetching/FilmFetching';
import { BsPlayFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { Row } from './Row';
import { MainPageNavbar } from './MainPageNavbar';
import { useHistory } from 'react-router-dom';
import { Modal } from './Modal';

export const MainPage = () =>{
    const { fetchNetflix, netflix, fetchTrending, trending, fetchTopRated, topRated, fetchActionMovies, actionMovies, fetchComedyMovies, comedyMovies, fetchHorrorMovies, horrorMovies, fetchRomanceMovies, romanceMovies, fetchDocumentaries, documentaries } = useFilmContext();
    const  imgURL = 'https://image.tmdb.org/t/p/original';
    var randFilm = Math.floor(Math.random() * 20); 
    const history = useHistory();
    const [activeMovie, setActiveMovie] = useState({});
    const [showModal, setShowModal] = useState(false);
    
    useEffect(() => {
        fetchTrending();
        fetchNetflix();
        fetchTopRated();
        fetchActionMovies();
        fetchComedyMovies();
        fetchHorrorMovies();
        fetchRomanceMovies();
        fetchDocumentaries();
    }, []);

    const split = (str) =>{
        var res = '';
        if(str.length > 150){
            res = str.substr(0, 149) +  '...';
            return res;
        } else{
            return str;
        }
    }

    if(netflix.length === 0 || trending.length === 0 || topRated.length === 0 || actionMovies.length === 0 || comedyMovies.length === 0 || horrorMovies.length === 0 || romanceMovies.length === 0 || documentaries.length === 0){
        return(
            <div>
                <h1>Error fetching data</h1>
            </div>
        )
    }

    const scrollLeft = () =>{
        if(document.getElementById('netflixOriginals').scrollLeft === 0){
            document.getElementById('netflixOriginals').scrollLeft=3097;
            
        }else{
            document.getElementById('netflixOriginals').scrollLeft-=(window.innerWidth-80);
        }
    }

    const scrollRight = () =>{

        if(document.getElementById('netflixOriginals').scrollLeft === 3097){
            document.getElementById('netflixOriginals').scrollLeft=0;
        }else{
            document.getElementById('netflixOriginals').scrollLeft+=(window.innerWidth-80);
        }
    }

    const handleModal = (movie) => {
        setActiveMovie(movie);
        setShowModal(true);

        console.log(activeMovie, showModal);
    }

    return(
        <div> 
            <MainPageNavbar/>
            <div>
                <div>
                    <img src={imgURL + netflix[randFilm].backdrop_path} alt='big Poster' className='bigFilm'/>
                    <div className='bigPoster-text'>
                        <h1 className='movieTitle'>{netflix[randFilm].name}</h1>
                        <button style={playBTN}><BsPlayFill/> Play</button>
                        <button style={moreInfoBtn}><AiOutlineInfoCircle/> More Information</button>
                        <p>{split(netflix[randFilm].overview)}</p> 
                    </div>
                </div>
            </div>
            <div className='bannerFade'/>
            <div style={sectionDiv}>
                <section>
                    <h2 style={rowTitle}>NETFLIX ORIGINALS</h2>
                    <div id='netflixOriginals' className='netflixOriginalDiv'>
                        {
                            netflix.map((film) =>{
                                return(
                                   <div className='rowBigFilm' key={netflix.id}>
                                       <img src={imgURL + film.poster_path} alt={film.name} className='imgNetflixRow' onClick={() => handleModal(film)}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    { showModal && <Modal movie={activeMovie} setModalVisibility={setShowModal}/>}
                    <div className='leftArrowDiv'><RiArrowLeftSLine className='leftArrow' onClick={scrollLeft}/></div>
                    <div className='rightArrowDiv'><RiArrowRightSLine className='rightArrow' onClick={scrollRight}/></div>
                </section>
                
                <Row category={trending} title={'Trending Now'} id={'trendingNow'}/>
                <div className='topRated'>
                    <Row category={topRated} title={'Top Rated'} id={'topRated'} className='topRated'/>    
                    
                </div>   
                <div className='actionMovies'>
                    <Row category={actionMovies} title={'Action Movies'} id={'actionMovies'}/>      
                </div>      
                <div className='comedyMovies'>
                    <Row category={comedyMovies} title={'Comedy Movies'} id={'comedyMovies'}/>
                </div>
                <div className='horrorMovies'>
                    <Row category={horrorMovies} title={'Horror Movies'} id={'horrorMovies'}/>
                </div>
                <div className='romanceMovies'>
                    <Row category={romanceMovies} title={'Romance Movies'} id={'romanceMovies'}/>
                </div>
                <div className='documentaries'>
                    <Row category={documentaries} title={'Documentaries'} id={'documentaries'}/>
                </div>
            </div>
        </div>
    );
}