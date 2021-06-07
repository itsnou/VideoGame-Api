import styled from 'styled-components';


export const StyledDiv = styled.div`

    .container--cards{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        color:white;
        .link{
            text-decoration:none;
            color:inherit;
            width:300px;
            height:275px;
            .cards{
                display:block;
                margin-top:10px;
                margin-left: 10px;
                font-size:10px;
                border:1px solid white;
                border-radius:5px;
                width: 300px;
                height: 275px;
                text-align:center;
                font-family: 'Press Start 2P', cursive;
                img{
                    width: 200px;
                    height: 150px;
                }
                .genres{
                    display:grid;
                    grid-template-columns: 1fr 1fr;
                    p{
                        color:orange;
                    }
                }
            }
        }
    }
    .list-page{
        display:flex;
        text-decoration:none;
        list-style:none;

        li{
            color:white;
            margin-left:20px;
        }
    }
`