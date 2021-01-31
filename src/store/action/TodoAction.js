import * as actionTypes from './actionType'
import axios from '../../axios-todo'

export const fetchTodoFailed = () => {
    return {
        type: actionTypes.FAILED_TODO
    }
}

export const getTodo = (todoList) =>{
  return{
    type: actionTypes.GET_TODO,
    list: todoList
    }
}  

export const postTodo = (id) =>{
    return {
        type: actionTypes.ADD_TODO,
        todoId: id
    }
}
const initGetTodo = () => {
    return {
        type: actionTypes.INIT_GET_TODO,
    }
}

export const initTodo = () => {
    return dispatch => {
        dispatch(initGetTodo())
        axios.get('/todoList.json')
        .then( response  => {
            const fetchedTodos = [];
                for ( let key in response.data ) {
                    fetchedTodos.push( {
                        ...response.data[key],
                        id: key
                    } );
                }
            dispatch(getTodo(fetchedTodos))
        })
        .catch(error => {
            dispatch(fetchTodoFailed())
        })
    }
}

export const addTodo = (todo) => {
    return dispatch =>{ 
        axios.post('/todoList.json', todo)
    .then(  response => {
        dispatch(postTodo(response.data.name))
        dispatch(initTodo())
     } )
    .catch(error => {
        dispatch(fetchTodoFailed())
    })
}
}

export const initRequest = () => {
    return {
        type: actionTypes.INIT_TODO_REQUEST,
    }
}

export const deleteTodoDone = () => {
    return {
        type: actionTypes.DELETE_TODO
    }
}

export const deleteTodo = (action) => {
    return dispatch =>{   
    dispatch(initRequest())
    axios.delete(`/todoList/${action}.json`)
    .then( response => {
       dispatch(deleteTodoDone())
       dispatch(initTodo())
    }).catch(error => {
        (fetchTodoFailed())
    })
    }
}

export const updateStatus = (obj) => {
    return dispatch => {
        axios.put(`/todoList/${obj.id}.json` , obj)
    .then( response => {
        dispatch(updateTodoStatus(response.data))
    }).catch(error => {
        (fetchTodoFailed())
    })

}
}

export const updateTodoStatus = (res) => {
     return {
        type: actionTypes.UPDATE_TODO_STATUS,
        obj: res
    }
   
}

export const search = (name) => {
    return dispatch => {
        {
            axios.get(`/todoList.json?orderBy="descreption"&equalTo="${name}"`).then(
                response => { 
                    const res = response.data
                    const loadedData = [];
                    for(const key in res) {
                      loadedData.push({
                        id: key,
                        descreption: res[key].descreption,
                        date: res[key].date,
                        status: res[key].status,
                      })
                    }
                   dispatch(searchRes(loadedData))
                }  )
        }
    }
}

export const searchRes = (res) => {
    return {
        type: actionTypes.SEARCH_TODO,
        obj: res
    }
}
