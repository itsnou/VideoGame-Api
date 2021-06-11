import {PAGINATES} from './constants';
export const getViews = (array, min, max) => {
	if (!min && !max) {
		return array.slice(0, PAGINATES);
	}
	return array.slice(min, max);
};

export const getGenres = (type, array) => {
	if (type === 'All') return array;
	let newArray = array.filter((el, i) =>
		el.genres.length
			? el.genres[0].name === type
				? true
				: el.genres.length > 1 ?
					el.genres[1].name === type ?
					true
					: el.genres.length > 2 ?
					el.genres[2].name === type ?
					true
					: el.genres.length > 3 ?
					el.genres[3].name === type ?
					true
					: el.genres.length > 4 ? 
					el.genres[4].name === type ?
					true
					: false
				: false
				: false
				: false
				: false
			: false
	);
	return newArray;
};

export const getOrderType = (order, array) => {
	switch (order) {
		case 'API':
			return array.filter((el) => typeof el.id === 'number');

		case 'DB':
			return array.filter((el) => el.id.toString().length > 35);

		case 'All':
			return array;

		default:
			return array;
	}
};

export const getGamesOrder = (order, array) =>{
	switch(order){
		case 'A-Z':
			return array.sort((a,b)=>{
				if(a.name > b.name){
					return 1;
				}else{
					return -1;
				}
			});
		
		case 'Z-A':
			return array.sort((a, b) => {
				if (a.name < b.name) {
					return 1;
				} else {
					return -1;
				}
			});

		case 'Mayor Rating':
			return array.sort((a, b) => {
				if (a.rating < b.rating) {
					return 1;
				} else {
					return -1;
				}
			});

		case 'Menor Rating':
			return array.sort((a, b) => {
				if (a.rating > b.rating) {
					return 1;
				} else {
					return -1;
				}
			});

		default:
			return array;
	}
}

export const Validate = (inputs) => {
	let errors = {};
	let reg = /^\d+$/;
	if (!inputs.name) {
		errors.name = 'Nombre es requerido';
	}
	
	if (!inputs.genres) {
		errors.genres = 'Generos son requeridos';
	}
	if (!inputs.platforms) {
		errors.platforms = 'Elije al menos una plataforma';
	}
	return errors;
};
