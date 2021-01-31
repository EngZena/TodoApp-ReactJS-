import React, { useEffect,useState } from 'react'
import classes from './Todo.module.css'
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

export const Todo = (props) => {
    const [checked, setChecked] = useState(false);
    const {status} = props;
    useEffect(() => {
        if (status) {
            setChecked(true)
        } else if(!status) {
            setChecked(false)
        }

    }, [checked,status])

    const handleChangeStatus = async (props, event) => {
        const status = event.target.checked;
        await setChecked(status);
        props.handleChangeStatus(props);
    }

    return (
        <div className={classes.container}>
            <div className={classes.mr}>
              {props.resource === 'todoList' ?  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => props.deleteTodo(props.id)}
                >  Delete</Button> : null}
            </div>
            <div className={classes.mr}>
                <Checkbox
                    checked={checked}
                    onChange={(event) => handleChangeStatus(props, event)}
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <label> {props.descreption} </label>
                <p>{props.time}</p>
                <p>{props.date}</p>
            </div>

        </div>
    )
}

export default Todo