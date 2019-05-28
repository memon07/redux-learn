import * as actionTypes from '../action/actionTypes'

const initialState = {
    result: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                result:state.result.concat({id:new Date(),val:action.result})
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.result.filter(e => e.id !== action.r_id)
            return {
                ...state,
                result:updatedArray
            }
        default:
            return state;
    } 
};

export default reducer;