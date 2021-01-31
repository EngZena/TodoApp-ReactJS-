import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import classes from './homePage.module.css'
import DatePicker from '../../component/shared/Calender/DatePicker';
import { connect } from 'react-redux';
import * as actions from '../../store/action/TodoAction';
import Todo from '../Todo/Todo';

export const HomePage = (props) => {

    const [name, setName] = useState('Me');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    const { onGetTodo } = props
    useEffect(() => {
        onGetTodo()

        return () => {

        }
    }, [onGetTodo])
    let menu = (<React.Fragment></React.Fragment>)
    if (!props.loading) {
        const list = props.todo && props.todo.filter(i => i.date === selectedDate.toString().substring(0, 15))
        menu = (
            <React.Fragment>
                {list && list.map((item, index) => {
                    return (
                        <Todo
                            key={index}
                            id={item.id}
                            resource={'homepage'}
                            descreption={item.descreption}
                            time={item.time}
                            date={item.date}
                            onChange={() => { }}
                            handleChangeStatus={() => { }}
                            status={item.status}
                        >
                        </Todo>
                    )

                })}

            </React.Fragment>
        )

    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    return (
        <React.Fragment>
            <div>


                <Avatar className={classes.pink}
                    style={{ backgroundColor: 'rgb(233, 14, 178)' }} >
                    {name ? name.slice(0, 1) : '?'}</Avatar>
                <h2>Hey, {name ? name : 'you'}</h2>
                <h4>Are you ready to complete your tasks?</h4>
                <div >
                    <div className={classes.datePicker}>
                        <TextField
                            id="name"
                            value={name}
                            onChange={handleChangeName}
                            label="your name"
                            helperText="write your name"
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.datePicker}>

                        <DatePicker
                            selectedDate={selectedDate}
                            handleDateChange={handleDateChange}
                        />
                    </div>
                </div>
                {menu}
            </div>

        </React.Fragment>
    )
}
const mapStateToProps = state => {
    return {
        loading: state.loading,
        todo: state.todoList,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onGetTodo: () => dispatch(actions.initTodo()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
