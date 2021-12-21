import {BoardAction, BoardState, REGISTER_BOARD, SET_ERROR, SET_LOADING, SET_SUBMITTED} from "../types";


const initialState: BoardState = {
    loading: false,
    error: '',
    submitted: false
}

export default (state = initialState, action: BoardAction) => {
    switch (action.type) {
        case REGISTER_BOARD:
            return {
                ...state,
                submitted: true
            }
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_SUBMITTED:
            return {
                ...state,
                submitted: action.payload
            }
        default:
            return state
    }
}
