import React from 'react';

const Create = ({gamesGenres, plataformas, handleSubmit, handlePlatform, handleChange, handleGenres, Plataformas, IMAGEN, Errors, Alerts, imagen, handleImage}) => {
    return (  
        <>
            <div className='title'>
                <h1>CREA TU JUEGO</h1>
            </div>
            <form className='formulario' onSubmit={e=> handleSubmit(e)}>
            {
                Alerts.errors ? (
                    <div className='errors'>
                        <ul>
                            {Object.values(Errors).map(el=>(
                                <li key={el} className='text--error'>
                                    {el}
                                </li>
                            ))}
                        </ul>
                    </div>
                ): null
            }
                <div className='select--image'>
                    <div className='image'>
                        <img className='img' src={imagen} alt={imagen}/>
                    </div>
                </div>
                <div>
                    <select onChange={(e)=> handleImage(e)}>
                        {
                            IMAGEN &&
                                IMAGEN.map((el,i)=>(
                                    <option key={i} value={el.image}>
                                        Model {i+1}
                                    </option>
                                ))
                        }
                    </select>
                </div>
                <label name="name">Nombre del Juego</label>
                <input type='text' name="name" placeholder='Ej: Half-Life 3'/>
                <label name='description'>Descripcion</label>
                <textarea type='text' name='description' placeholder='Ej: Juego que solo vive en nuestros corazones'/>
                <label name='date'>Fecha de Lanzamiento</label>
                <input type="date" data-date-format="DD MMMM YYYY" value='2066-06-06'/>
                <label className='genre'>Selecciona los generos a los que pertenece</label>
                {
                    gamesGenres && gamesGenres.map((el,i)=>{
                        return (
                            <div>
                                <label>{el.name}</label>
                                <input type='checkbox' key={i} value={el.name}/>
                            </div>
                    )})
                }
                <label className='platform'>Plataformas en las que esta disponible</label>
                {
                    plataformas && plataformas.map((el,i)=>{
                        return (
                            <div>
                                <label>{el}</label>
                                <input type='checkbox' key={i} value={el}/>
                            </div>
                    )})
                }
                <button type='submit'>
                    Crear
                </button>
            </form>
        </>
    );
}
 
export default Create;