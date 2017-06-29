import { FETCH_WEATHER } from '../actions/index';


export default function (state = [], action) {
    switch(action.type) {
    case FETCH_WEATHER:
        return [action.payload.data, ...state]; //concatenates action.payload.data and state.  have to return new item, not mutate state
    }
    console.log('Action received: ', action);
    return state;
}