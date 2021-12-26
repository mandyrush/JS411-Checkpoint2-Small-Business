import { combineReducers } from 'redux';

const listings = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BUSINESS':
            return [...state, action.value];
        case 'REMOVE_BUSINESS':
            let newState = [...state];
            newState.splice(action.value, 1);
            return newState;
        default:
            return state;
    }
};

export default combineReducers({ listings });