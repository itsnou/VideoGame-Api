const { Router } = require('express');
const {getVideoGames, gameDetail} = require('../controllers')
const router = Router();


router.get('/',async (req,res)=>{
    const {name} = req.query;
    let gamesTotal = await getVideoGames();
    if(name){
        let game = await gameDetail('GAME', name);
        if(game.length>0){
            let result=[];
            if(game.length>15){
                game.map((oneGame,index)=>{
                    if(index<15) result.push(oneGame);
                })
                return res.status(200).json(result);
            }
            return res.status(200).json(game);
        }else{
            return res.status(404).send({error: 'Game not found'})
        }
    }
    return res.json(gamesTotal);
});

module.exports=router;

