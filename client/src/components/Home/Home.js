import { StyledDiv } from "./styled";
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getGames, getTotalNum} from '../../actions/actions';
import Card from './Card';

const Home = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => state.games);
    const totalGames = useSelector(state => state.gamesTotal);
    const [page, setPage] = useState(0)
    let pages=[];
    
    useEffect(() => {
        dispatch(getTotalNum());
    }, [1]);

    const handleClick= (e)=>{
        setPage(e.target.value)
    }

    useEffect(() => {
        dispatch(getGames(page));
    }, [page]);

    if(games.length>0){
        let gamesAPI= 100;
        let gamesDB= gamesAPI-totalGames;

        let countPage= Math.ceil(totalGames/15);

        for(let i=0; i< countPage; i++){
            pages.push(i);
        }
    }

    
    return (  
        <StyledDiv>
            <ul className='list-page'>
            {
                pages.map(el=>{
                    return <li value={el} onClick={e=>handleClick(e)}>{el+1}</li>
                })
            }
            </ul>
            <div className='container--cards'>
                {
                    games && games.map((juego,i)=>{
                        return <Card key={i}
                        id={juego.id}
                        name={juego.name}
                        genres={juego.genres}
                        image={juego.image}
                        />
                    })
                }
            </div>
        </StyledDiv>
    );
}

export default Home;