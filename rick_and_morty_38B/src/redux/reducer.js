import {GET_MOVIES} from "./actions";
import {DELETE_CHARACTER} from "./actions";
import {GET_CHAR} from "./actions";
import {COPY} from "./actions";
import {ADD_FAV} from "./actions";
import {RM_FAV} from "./actions";
//declaramos un estado inicial el cual siempre sera un objeto
const initialState= {
	movies:[],
	copy:[],
	fav:[],
    user:[]
}

//reducer siempre va a recibir un estado y una accion
const rootReducer = (state= initialState, action) =>{
//dentro de rootReducer va nuesto switch con acciones
		switch(action.type){
		case GET_MOVIES:
            return {...state, movies: action.payload, copy: action.payload};
		case DELETE_CHARACTER:
			// return {...state,  user: action.payload};
			return {...state, 
				movies: state.movies.filter((char)=> char.id !==action.payload),
				copy: state.movies.filter((char)=> char.id !==action.payload)};
		case GET_CHAR:
			//dejar lleno movies
		return {...state, movies: state.copy.filter((char)=> char.id === action.payload)};
		case COPY:
			//dejar lleno movies
		return {...state, movies: state.copy};
		case ADD_FAV:
			return { 
				...state,
				fav:  [...state.fav, state.copy.find((char)=> char.id === action.payload)] 
			}				
		case RM_FAV:
			console.log(action.payload)
		return { 
			...state,
			fav: state.fav.filter((char)=> char.id !== action.payload)
		}				
	

					

			default:		
		return {...state};
	}
};
//exportamos para poder usarlo en la store
export default rootReducer;