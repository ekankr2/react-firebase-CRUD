import {ThunkAction} from "redux-thunk";

import firebase from "firebase/compat/app";
import {
    AuthAction,
    Board,
    BoardAction,
    registerData,
    SET_ERROR,
    SET_LOADING,
    SET_SUBMITTED,
    User
} from "../types";
import {RootState} from "../index";

export const registerBoard = (data: registerData, user: User, onError: () => void): ThunkAction<void, RootState, null, BoardAction> => {
    return async dispatch => {
        try {
            const boardData: Board = {
                title: data.title,
                content: data.content,
                author: user.id,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            dispatch(setLoading(true))
            await firebase.firestore().collection('board').add(boardData);
            dispatch(submitLoading())
        } catch (err: any) {
            console.log(err)
            onError();
            dispatch(setError(err.message))
        }
    }
}

// Set error
export const setError = (msg: string): ThunkAction<void, RootState, null, BoardAction> => {
    return dispatch => {
        dispatch({
            type: SET_ERROR,
            payload: msg
        });
    }
}

// Set loading
export const setLoading = (value: boolean): ThunkAction<void, RootState, null, AuthAction> => {
    return dispatch => {
        dispatch({
            type: SET_LOADING,
            payload: value
        });
    }
}

// Set submitted
export const setSubmitted = (success: boolean): ThunkAction<void, RootState, null, BoardAction> => {
    return dispatch => {
        dispatch({
            type: SET_SUBMITTED,
            payload: success
        });
    }
}

export const submitLoading = (): ThunkAction<void, RootState, null, BoardAction> => {
    return dispatch => {
        dispatch({
            type: SET_SUBMITTED,
            payload: true
        });
        dispatch({
            type: SET_LOADING,
            payload: false
        });
        dispatch({
            type: SET_SUBMITTED,
            payload: false
        });
    }
}
