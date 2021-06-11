import {StyledDiv} from './styled';
import {Link} from 'react-router-dom';
import Search from '../Search/Search'

const Nav = () => {

    return ( 
        <StyledDiv>
            <div className='container-logo'>
                <Link to='/' className='logo'>
                    <h2>Game Over</h2>
                </Link>
            </div>
            <Search/>
            <div className='botonera'>
                <Link to='/home' className='btn-inicio'>
                    <h2>Inicio</h2>
                </Link>
                <Link to='/create' className='btn-createGame'>
                    <h2>Crear Juego!</h2>
                </Link>
            </div>
        </StyledDiv>
    );
}

export default Nav;

