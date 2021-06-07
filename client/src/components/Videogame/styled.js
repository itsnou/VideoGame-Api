import styled from 'styled-components';


export const StyledDiv = styled.div`
    display:flex;
    justify-content:center;
    .card{
        text-align:center;
        color:white;
        font-family:'Press Start 2P';
        dl{
            line-height:12px;
        }
        img{
            width: 100%;
            height: 500px;
        }
        .descript-rating{
            font-size: 10px;
            letter-spacing:1px;
        }
        .plat-genres{
            display:flex;
            justify-content:space-around;
            margin-bottom:20px;
            li{
                margin:10px;
            }
        }
    }
`
