import styled from 'styled-components';

export const StyleDiv = styled.div`
    display: flex;
    font-family: 'Press Start 2P';
	justify-content: center;
	margin: 130px 0px 60px 0px;
	.container {
		.search-title {
			display: flex;
			justify-content: center;
            margin:0;
			.title {
				color: white;
				text-shadow: 3px 2px 4px black;
			}
		}
        .form{
            display:flex;

            height:50px;
            .input {
                margin-right: 20px;
                border: 5px;
                border-radius: 3px;
                outline: 0;
                width:70%;
                font-family: 'Press Start 2P';
            }
            button{
                font-family: 'Press Start 2P';
                outline:none;
                color: black;
                background-color: white;
            }
        }
    }
}

	
`