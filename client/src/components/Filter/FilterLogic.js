import {useDispatch,useSelector} from 'react-redux';
import { useEffect} from 'react';
import Filter from './Filter';
import {setGamesGenres} from '../../actions/actions';

const FilterLogic = () => {
    const dispatch=useDispatch();
    const [generos, setGenre] = useState('')
    const type = useSelector(state=> state.games)

    useEffect(()=>{
        dispatch(setGamesGenres(generos))
    },[handleGenres])

    const handleGenres = (e) =>{
        setGenre(e.target.value);
    };

    return (
        <Filter handleGenres={handleGenres}/>
    );
}
 
export default FilterLogic;