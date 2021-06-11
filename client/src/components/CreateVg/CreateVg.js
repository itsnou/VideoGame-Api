import {useState,useEffect} from 'react';
import StyledDiv from './styled';
import {useSelector, useDispatch} from 'react-redux';
import {getGenres} from '../../actions/actions';
import {IMAGEN,imgDefault, GAMES_ID} from '../../utils/constants';
import axios from 'axios'


const CreateVg = () => {
    const [inputs, setInputs] = useState({
        name:'',
        description:'',
        released:'',
        rating:'',
        image: imgDefault,
        genres:[],
        platforms:[],
    });
    const plataformas= [
        {
            platform:{
                id:1,
                name:'PC'
            }
        },
        {
            platform:{
                id:2,
                name:'Apple MacIntosh'
            }
        },
        {
            platform:{
                id:3,
                name:'Xbox'
            }
        },
        {
            platform:{
                id:4,
                name:'Nintendo'
            }
        },
        {
            platform:{
                id:5,
                name:'PlayStation'
            }
        },
        {
            platform:{
                id:6,
                name:'Linux'
            }
        }
    ];
    const dispatch = useDispatch();
    const gamesGenres = useSelector(state=> state.gamesGenres);
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState({errors: false, create:false});
    const [typeGenre, setTypeGenre] = useState([]);
    
    useEffect(()=>{
        dispatch(getGenres());
    },[dispatch]);

    useEffect(()=>{
        if(typeGenre.length){
            let total = gamesGenres.reduce((acc,el)=>{
                if(typeGenre.includes(el.name) === true){
                    acc.push(el.id)
                }
                return acc;
            },[]);
            setInputs({...inputs, genres:total});
        }
    },[typeGenre]);

    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        let {name,description, platforms} = inputs
        if(!name || !description || !platforms){
            setErrors({error: !name? 'Falta el nombre' : !description? 'Falta la descripcion' : !platforms[0]?'Falta elegir 1 plataforma' : null})
        }
        else{
            try{
                await axios.post(GAMES_ID, inputs);
                setAlert({...alert, create:true});
            }catch(err){
                console.log(err);
            }
        }
    };
    
    const handleImage=(e)=>{
        setInputs({...inputs, image: e.target.value})
    };
    
    const handlePlatform=(e)=>{
        console.log(inputs);
        setInputs({...inputs, platforms: [...inputs.platforms,{platform: {name: e.target.value}}]});
    };

    const handleChange= (e)=>{
        setInputs({...inputs, [e.target.name]: e.target.value});
    };

    const handleGenres=(e)=>{
        if(inputs.genres.length<4){
            if(!typeGenre.includes(e.target.value)){
                setTypeGenre([...typeGenre, e.target.value]);
            }
        } else setTypeGenre([e.target.value])
    };



    return (
        <StyledDiv>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <h1>Crea tu VideoJuego</h1>
                </div>
                {/* errores */}
                {
                    alert.errors ? (
                        <div className='errors'>
                            <ul>
                                {
                                    Object.keys(errors).map(el=>(
                                        <li key={el} className='errors--text'>
                                            {el}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ) : null
                }
                <div className='container--image'>
                    <img src={inputs.image} alt='imagenloca'/>
                </div>
                <div className='imagen--select'>
                    <select onChange={e=>handleImage(e)}>
                        {IMAGEN &&
                            IMAGEN.map((el,i)=>(
                                <option key={i} value={el.imagen}>
                                    Imagen {i+1}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div className='formulario'>
                    <div className='form--label'>
                        <label key={1} className='form--label_title'>Nombre</label>
                    </div>
                    <input
                        className='input'
                        key={1}
                        name='name'
                        autoComplete='off'
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className='formulario'>
                    <div className='form--label'>
                        <label key={2} className='form--label_title'>Descripcion</label>
                    </div>
                    <textarea
                        className='input'
                        key={2}
                        name='description'
                        autoComplete='off'
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className='formulario'>
                    <div className='form--label'>
                        <label key={3} className='form--label_title'>Rating</label>
                    </div>
                    <input
                        className='input'
                        key={3}
                        name='rating'
                        autoComplete='off'
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className='formulario'>
                    <div className='form--label'>
                        <label key={4} className='form--label_title'>Fecha de lanzamiento</label>
                    </div>
                    <input
                        type='date'
                        className='input'
                        key={4}
                        name='released'
                        autoComplete='off'
                        onChange={e => handleChange(e)}
                    />
                </div>
                {/* PLATAFORMAS */}
                <div className='formulario--selectors'>
                    <div className='form--label'>
                        <label key={5} className='form--label_title'>Plataforma</label>
                    </div>
                    <select onChange={e => handlePlatform(e)}>
                        {plataformas &&
                            plataformas.map((p,i)=>(
                                <option key={i} value={p.platform.name}>{p.platform.name}</option>
                            ))
                        }
                    </select>
                </div>
                {/* GENEROS */}
                <div className='formulario--selectors'>
                    <div className='form--label'>
                        <label key={6} className='form--label_title'>Genero</label>
                    </div>
                    <select onChange={e => handleGenres(e)}>
                        {gamesGenres &&
                            gamesGenres.map((g,i)=>(
                                <option key={i} value={g.name}>{g.name}</option>
                            ))
                        }
                    </select>
                    <div className='div_type_container'>
                        {typeGenre &&
                            typeGenre.map((el, i) => (
                                <div key={i} className='div_type'>
                                    <label className='label'>{el}</label>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='btn-submit' type='submit'> Crear Juego </button>
                </div>
                {
                    alert.create ? (
                        <div className='create--confirm'>
                            <h3 className='message--create'>El juego fue creado!</h3>
                        </div>
                    ) : null
                }
            </form>
        </StyledDiv>
    );
}
 
export default CreateVg;