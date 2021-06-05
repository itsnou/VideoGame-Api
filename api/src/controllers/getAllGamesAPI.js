const axios = require('axios');
const {VIDEOGAMES_URL} = require('../utils/constants');
const {API_KEY} = process.env;

const getApi = async() =>{
    let callApi1 = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&page_size=40`);
    let callApi2 = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&page=2&page_size=40`);
    let callApi3 = await axios.get(`${VIDEOGAMES_URL}?key=${API_KEY}&page=3&page_size=20`);
    let games=[];


    callApi1.data.results.map(element=>{
        games.push({
            id: element.id,
            name: element.name,
            released: element.released,
            image: element.background_image,
            rating: element.rating,
            plataforms: element.parent_platforms,
            genres: element.genres,
        })
    })

    callApi2.data.results.map(element=>{
        games.push({
            id: element.id,
            name: element.name,
            released: element.released,
            image: element.background_image,
            rating: element.rating,
            plataforms: element.parent_platforms,
            genres: element.genres,
        })
    })

    callApi3.data.results.map(element=>{
        games.push({
            id: element.id,
            name: element.name,
            released: element.released,
            image: element.background_image,
            rating: element.rating,
            plataforms: element.parent_platforms,
            genres: element.genres,
        })
    })
    
    return games;
}

const getAllApi = getApi();

module.exports=getAllApi;