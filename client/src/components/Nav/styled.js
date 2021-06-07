import styled from 'styled-components';


export const StyledDiv = styled.div`
    display:flex;
    padding-top:10px;
    justify-content:space-between;
    opacity: 0.9;
    .container-logo{
        display:flex;
        padding:2px;
        margin-left:30px;
        text-shadow: 2px 3px white;
        .logo{
            text-decoration:none;
            font-family: 'Press Start 2P', cursive;
            color:white;
            padding:3px;
            border-radius: 3px;
            border: 1px solid white;
            padding:0 10px 0 10px;
            color:red;
            letter-spacing: .17em;
        }
    }

    .botonera{
        display:flex;
        font-family: 'Press Start 2P', cursive;
        .btn-inicio{
            text-decoration:none;
            color:red;
            margin: 0 20px 0 40px;
            border-radius: 3px;
            border: 1px solid red;
            padding:0 10px 0 10px;
            h2{
                letter-spacing: .17em;
                text-shadow: 2px 3px white;
            }
        }
        .btn-createGame{
            text-decoration:none;
            color:white;
            margin: 0 20px 0 40px;
            border-radius: 3px;
            border: 1px solid red;
            animation: mymove 5s infinite;
            padding:0 10px 0 10px;
            h2{
                letter-spacing: .17em;
                text-shadow: 2px 3px white;
            }
        }
        
    }

    @keyframes mymove {
        from {color: red;}
        to {color: blue;}
    }
`