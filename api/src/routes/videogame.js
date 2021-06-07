const { Router } = require('express');
const {Videogame} = require('../db');
const {gameDetail} = require('../controllers')
const router = Router();

router.get('/:id', async (req,res)=>{
    const {id} = req.params;
    if(id){
        let game = await gameDetail('ID', id);
        console.log(game.length)
        game.length
            ? res.json(game[0])
            : res.status(404).json({error: 'Game not found'})
    }
});

router.post('/', async (req,res)=>{
    const{name, description, released, rating, genres,platforms} = req.body;
    if(!name || !description || !platforms ){
        return res.status(400).json({error: 'it is necessary to add more parameters'});
    }else{
        let genre=[];
        genres.map(el=>{
            genre.push({id: el.id, name:el.name})
        })
        const createGame= await Videogame.create({
            name, 
            description,
            released, 
            rating, 
            platforms
        });
    
        await createGame.setGenres(genre);
        return res.send(createGame);
    }

})

module.exports=router;