import {useState, useEffect} from 'react';
import {setGamesViews} from '../../actions/actions';
import {PAGINATES} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import List from './List';
import {StyledDiv} from './styled';

const Paginate = () => {
    const dispatch = useDispatch();
    const gamesViews = useSelector(state=> state.gamesViews);
    const [paged,setPaged] = useState({page: 1, max: 0, min: 0});
    const [paginated, setPaginated] = useState(0);
    let listArray = Array.from({length: paginated}, (e,i) => i+1);

    useEffect(()=>{
        dispatch(setGamesViews(paged))
    },[dispatch,paged])

    useEffect(() =>{
        setPaginated(Math.ceil(gamesViews.all.length / PAGINATES));
    },[gamesViews]);

    const handleClick = (e) =>{
        setPaged({
                page: e.target.value,
                max: PAGINATES * e.target.value,
                min: PAGINATES * e.target.value - PAGINATES
        })
    };

    return (  
        <StyledDiv>
        {
            <div className='container'>
                {
                    listArray.map((el,i)=>{
                        return <div key={i} className='list--container'>
                            <ul>
                                <List li={
                                    <li 
                                        key={i} 
                                        className={el === paged.page ? 'listed' : 'list'}
                                        value={el}
                                        onClick={(e)=>handleClick(e)}
                                    >
                                        {el}
                                    </li>
                                }/>
                                
                            </ul>
                        </div>
                    })
                }
            </div>
        }
        </StyledDiv>
    );
}
 
export default Paginate;