import axios from 'axios';
import {GAMES_URL, GAMES_TOTAL, GAMES_NAME, GAMES_GENRES, GAMES_ID} from '../utils/constants';

//cargar juegos
export const getGames = (num) => async (dispatch)=>{
    try{
        const games = await axios.get(`${GAMES_URL}?num=${num}`);
        dispatch({type: 'GET_GAMES', payload: games.data})
    }catch(err){
        console.log(err);
    };
};

//Numero Total de juegos
export const getTotalNum = () => async(dispatch)=>{
    try{
        const games = await axios.get(GAMES_TOTAL)
        dispatch({type: 'GET_TOTAL', payload:games.data})
    }catch(err){
        console.log(err)
    };
}

//cargar por genero
export const getGenres = () => async (dispatch)=>{
    try{
        const genres = await axios.get(GAMES_GENRES);
        dispatch({type: 'GENRES_GAMES', payload: genres.data})
    }catch(err){
        console.log(err);
    };
};


//cargar detalles de un juego al hacerle click
export const getDetail = (id) => async (dispatch) =>{
    try{
        const game = await axios.get(GAMES_ID+id);
        dispatch({type: 'GAME_DETAIL', payload: game.data})
    }catch(err){
        console.log(err);
        dispatch({type: 'GAME_DETAIL', payload: []});
    };
};

//cargar juego o juegos
export const getSearch = (name) => async (dispatch) =>{
    try{
        const search = await axios.get(GAMES_NAME + name);
        dispatch({type: 'GAME_SEARCH', payload: search.data})
    }catch(err){
        console.log(err);
        dispatch({type: 'GAME_SEARCH', payload:[]});
    };
};

//paginacion pretendida
export const pagination = (page) => (dispatch) =>{
    dispatch({
        type: 'PAGINATION_VIEWS',
        payload: {
            page:page.page,
            max: page.max,
            min: page.min
        }
    });
};

export const setGamesGenres= (genre) => (dispatch) =>{
    dispatch({type: 'SET_GENRE', payload: genre})
};

export const setGamesOrder = (order) => (dispatch)=>{
    dispatch({type: 'GAMES_ORDER', payload: order})
};

export const setGamesTypes = (type) => (dispatch) =>{
    dispatch({type: 'GAMES_TYPE' , payload: type})
};

export const clearDetail = () => (dispatch) =>{
    dispatch({type: 'CLEAR_DETAIL'});
};