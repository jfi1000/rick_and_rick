export const GET_MOVIES ="GET_MOVIES";
export const DELETE_CHARACTER ="DELETE_CHARACTER";
export const GET_CHAR ="GET_CHAR";
export const COPY ="COPY";
export const ADD_FAV ="ADD_FAV";
export const RM_FAV ="RM_FAV";

export const getMovies=()=>{
	return function(dispatch){
		fetch("https://rickandmortyapi.com/api/character")
		.then((response)=>response.json())
		.then((data)=>dispatch({type: GET_MOVIES, payload:data.results}));
	}
}

export const deletedChar=(id)=>{
	return {type: DELETE_CHARACTER, payload:id};
}


export const getChar=(id)=>{
	return {type: GET_CHAR, payload:id};
}

export const copy=()=>{
	return {type: COPY};
}

export const addFav=(id)=>{
	return {type: ADD_FAV,payload:id};
}

export const rmFav=(id)=>{
	return {type: RM_FAV,payload:id};
}

