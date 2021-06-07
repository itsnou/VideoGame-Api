
const Card = ({name,description,image,genres,rating,platforms}) => {

    return (
        <div className='card'>
            <h1>{name}</h1>
            <img src={image} alt={name}/>
            <div className='descript-rating'>
                <dl>Descripcion: {description}</dl>
                <p>Rating: {rating}</p>
            </div>
            <div className='plat-genres'>
                <div className='genres'>
                    <p>Generos: </p>
                        {
                            genres && genres.map((el,i)=>{
                                return <li key={i}>{el.name}</li>
                            })
                        }
                </div>
                <div className='plat'>
                    <p>Plataformas: </p>
                        {
                            platforms && platforms.map((el,i)=>{
                                return <li key={i}>{el.platform.name}</li>
                            })
                        }
                </div>
            </div>

        </div>
    );
}
 
export default Card;