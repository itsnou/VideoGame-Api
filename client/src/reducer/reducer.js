const initialState = {
	games: [],
	gameDetail: [],
    gamesGenres: [],
    gamesTotal:undefined,
	gamesViews: {
		all: [],
		now: [],
	},
	gamesFilter: 'All',
	gamesFrom: 'All',
};

const gamesReducer = (state=initialState, {type,payload}) => {
    switch(type){
        case 'GET_GAMES':
            return{
                ...state,
                games: payload,
            };
        
        case 'GAME_DETAIL':
            return{
                ...state,
                gameDetail:payload
            }
        
        case 'GENRES_GAMES':
            return{
                ...state,
                genres:payload
            }
        
        case 'GET_TOTAL':
            return{
                ...state,
                gamesTotal: payload
            }
        
        // case 'SET_GENRE':
        //     state.gamesViews.all = GetGamesType(
        //         payload,
        //         GetGameFrom(state.gamesFrom, state.games)
        //     );
        //     return{
        //         ...state,
        //         gamesViews:{
        //             ...state,gamesViews,
        //             now: GetGamesViews(state.gamesViews.all)
        //         },
        //         gameFilter:payload
        //     }

        default:
            return state;
    }
}

export default gamesReducer;