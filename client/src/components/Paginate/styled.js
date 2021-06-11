import styled from 'styled-components';

export const StyledDiv = styled.div`
	display: flex;
	justify-content: center;

	.list--container{
		color:white;
		font-family:'Press Start 2P';
		display:inline-block;
		ul{
			list-style:none;
			width:20px;
			padding:10px;
			text-align:center;
			text-shadow: 2px 1px red,
						 -1px -1px green;
			:hover{
				color:blue;
				background:white;
			}
		}
	}

`;

