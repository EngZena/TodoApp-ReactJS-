import React, { useState, useEffect } from 'react'
import Todo from '../Todo/Todo'
import classes from './TodoList.module.css'
import Button from '@material-ui/core/Button';
import SimpleModal from '../../component/shared/Modal/Modal';
import * as actions from '../../store/action/TodoAction'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

export const TodoList = (props) => {

    const [open, setOpen] = useState(false);
    const [searchTodo, setSearchTodo] = useState('');
    const handleChangeStatus = (obj) => {
        obj.status ?
            obj = { ...obj, status: false } :
            obj = { ...obj, status: true }
        props.onUpdateTodoStatus(obj);
    };

    const { onGetTodo } = props

    useEffect(() => {
        onGetTodo()
        if (localStorage.getItem('search')) {
            const searchInput = localStorage.getItem('search')
            setSearchTodo(searchInput)
        }
        return () => {
        }
    }, [onGetTodo, searchTodo])

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };
    const handleAddTodo = (todo) => {
        handleClose();
        props.onAddTodo(todo);
    }

    const handleDelete = (id) => {
        props.onDeleteTodo(id)
    }

    let menu = (<React.Fragment></React.Fragment>)

    if (!props.loading) {
        menu = (
            <React.Fragment>
                {props.todo && props.todo.map((item, index) => {
                    return (
                        <Todo
                            key={index}
                            id={item.id}
                            resource={'todoList'}
                            descreption={item.descreption}
                            time={item.time}
                            date={item.date}
                            deleteTodo={handleDelete}
                            handleChangeStatus={handleChangeStatus}
                            status={item.status}
                        >
                        </Todo>
                    )
                })}
            </React.Fragment>
        )
    }

    const handleSearch = (event) => {
        let inputValue = event.target.value
        setSearchTodo(inputValue)
        setTimeout(() => {
            if (inputValue !== '') {
               props.onSearchTodo(inputValue) 
            } else {
                props.onGetTodo()
            }
        }, 5000)
    }


    return (
        <div >
            <div>
                <div className={classes.search}>

                    <div className={classes.searchBox}>
                        <TextField
                            id="search"
                            label="Search.."
                            variant="outlined"
                            onChange={(event) => handleSearch(event)}
                            value={searchTodo}
                        />
                       
                    </div>
                </div>
                <Button variant="contained"
                    onClick={handleOpen}
                    className={classes.btn}
                >
                    Add New Todo
            </Button>
            </div>

            {menu}


            <SimpleModal
                open={open}
                handleClose={handleClose}
                handleAddTodo={handleAddTodo}
            />

        </div>)
}

const mapStateToProp = state => {
    return {
        todo: state.todoList,
        loading: state.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (todoObj) => dispatch(actions.addTodo(todoObj)),
        onUpdateTodoStatus: (todoObj) => dispatch(actions.updateStatus(todoObj)),
        onGetTodo: () => dispatch(actions.initTodo()),
        onDeleteTodo: (id) => dispatch(actions.deleteTodo(id)),
        onSearchTodo: (name) => dispatch(actions.search(name))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)( React.memo(TodoList))