import {BoardAction, BoardState} from "../types";


const initialState: BoardState = {
    boardList: [],
    board: null
}

export default (state = initialState, action: BoardAction) => {
    switch (action.type) {
        default:
            return state
    }
}
