import React, { useState, useContext } from 'react';
import { endPoints } from './filmsEndPoints';
import axios from 'axios';


const FilmsContext = React.createContext();


const FilmsProvider = ({ children }) => {
    const [netflix, setNetflix] = useState([]);
    const [trending, setTrending] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [actionMovies, setActionMovies] = useState([]);
    const [comedyMovies, setComedyMovies] = useState([]);
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [romanceMovies, setRomanceMovies] = useState([]);
    const [documentaries, setDocumentaries] = useState([]);

    async function fetchNetflix (){
        const res = await axios.get(endPoints.netflixOriginals);
        await setNetflix(res.data.results);

        return (res.data.results);
    }

    async function fetchTrending (){
        const res = await axios.get(endPoints.trending);
        await setTrending(res.data.results);

        return (res.data.results); 
    }

    async function fetchTopRated (){
        const res = await axios.get(endPoints.topRated);
        await setTopRated(res.data.results);

        return (res.data.results);
    }

    async function fetchActionMovies (){
        const res = await axios.get(endPoints.actionMovies);
        await setActionMovies(res.data.results);

        return (res.data.results);
    }

    async function fetchComedyMovies (){
        const res = await axios.get(endPoints.comedyMovies);
        await setComedyMovies(res.data.results);

        return (res.data.results);
    }

    async function fetchHorrorMovies (){
        const res = await axios.get(endPoints.horrorMovies);
        await setHorrorMovies(res.data.results);

        return (res.data.results);
    }

    async function fetchRomanceMovies (){
        const res = await axios.get(endPoints.romanceMovies);
        await setRomanceMovies(res.data.results);

        return (res.data.results);
    }

    async function fetchDocumentaries (){
        const res = await axios.get(endPoints.documentaries);
        await setDocumentaries(res.data.results);

        return (res.data.results);
    }

    return(
        <FilmsContext.Provider
            value= {{
                fetchNetflix,
                netflix,
                setNetflix,

                fetchTrending,
                trending,
                setTrending,

                fetchTopRated,
                topRated,
                setTopRated,

                fetchActionMovies,
                actionMovies,
                setActionMovies,

                fetchComedyMovies,
                comedyMovies,
                setComedyMovies,
                
                fetchHorrorMovies,
                horrorMovies,
                setHorrorMovies,

                fetchRomanceMovies,
                romanceMovies,
                setRomanceMovies,

                fetchDocumentaries,
                documentaries,
                setDocumentaries,
            }} 
        >
            {children}
        </FilmsContext.Provider>
    )
}

export const useFilmContext = () => {
    return useContext(FilmsContext);
}

export { FilmsContext, FilmsProvider };