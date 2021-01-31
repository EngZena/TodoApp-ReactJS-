import * as actionTypes from "../action/actionType";

const initialState = {
    todoList: {},
    error: false, 
    loading: true,

}



export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INIT_GET_TODO:
        return {
            ...state,
            loading: true
        }
        case actionTypes.INIT_TODO_REQUEST: {
            return {
                ...state,
                loading: true
            }
        } 
        case actionTypes.GET_TODO:
            {
            return {
                ...state,
                todoList: action.list,
                loading: false
                
            }}
        case actionTypes.ADD_TODO:
            return {
                ...state,
                id: action.id
            }
        case actionTypes.DELETE_TODO:
            return {
                ...state,
                todoList: action.todoList
            }
        case actionTypes.UPDATE_TODO_STATUS:
            const arr = state.todoList.filter(i => i.id !== action.obj.id)
            arr.push(action.obj)
            return {
                ...state,
                todoList: arr
            }
        case actionTypes.SEARCH_TODO:
            return {
                ...state,
                 todoList: action.obj
                }
        case actionTypes.FAILED_TODO:
        default: return state

    }
}

