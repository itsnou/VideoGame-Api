import {StyleDiv}  from './styled';
import {useState} from 'react';
import {connect} from 'react-redux';
import {getSearch} from '../../actions/actions';

const Search = () => {
    const [name, setName] = useState('');


    const handleChange= (e)=>{
        setName(e.target.value);
    }

    const handleSubmit = (e)=>{
        if(name.length){
            getSearch(name);
        }
    }

    return (
        <StyleDiv>
            <div className='container'>
				<div className='search-title'>
					<h2 className='title'>Buscar un Juego</h2>
				</div>
                <div className='form'>
					<input
						className='input'
						type='text'
						autoComplete='off'
                        onChange={(e) => handleChange(e)}
					/>
                    <button className='btn-search' onClick={(e)=>handleSubmit(e)}>
                        Search
                    </button>
                </div>
			</div>
        </StyleDiv>
    );
}
 
export default connect(null, {getSearch})(Search)