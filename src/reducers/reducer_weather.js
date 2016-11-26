import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
           // return state.concate([ action.playload.data ]); dole je ES6
           return [ action.payload.data, ...state];
    }
    return state;
}
