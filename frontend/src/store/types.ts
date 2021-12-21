export const SET_USER = 'SET_USER'
export const SIGN_OUT = 'SIGN_OUt'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const NEED_VERIFICATION = 'NEED_VERIFICATION'
export const SET_SUCCESS = 'SET_SUCCESS'
export const SET_SUBMITTED = 'SET_SUBMITTED'

export const REGISTER_BOARD = 'REGISTER_BOARD'

export interface User {
    firstName: string
    email: string
    id: string
    createdAt: any
}

export interface AuthState {
    user: User | null
    authenticated: boolean
    loading: boolean
    error: string
    needVerification: boolean
    success: string
}

export interface SignUpData {
    firstName: string
    email: string
    password: string
}

export interface SignInData {
    email: string
    password: string
}

// Actions
interface SetUserAction {
    type: typeof SET_USER
    payload: User
}

interface SetLoadingAction {
    type: typeof SET_LOADING
    payload: boolean
}

interface SignOutAction {
    type: typeof SIGN_OUT
}

interface SetErrorAction {
    type: typeof SET_ERROR
    payload: string
}

interface NeedVerificationAction {
    type: typeof NEED_VERIFICATION
}

interface SetSuccessAction {
    type: typeof SET_SUCCESS
    payload: string
}

export type AuthAction = SetUserAction | SetLoadingAction | SignOutAction | SetErrorAction | NeedVerificationAction |
    SetSuccessAction;

// board actions
export interface Board {
    title: string,
    content: string,
    author: string,
    createdAt: any
}

export interface BoardState{
    error: string,
    submitted: boolean
}

export interface registerData{
    title: string,
    content: string,
}

interface setSubmittedAction {
    type: typeof SET_SUBMITTED
    payload: boolean
}

export type BoardAction = SetErrorAction | SetLoadingAction | setSubmittedAction
