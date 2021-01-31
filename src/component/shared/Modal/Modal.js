import 'date-fns';
import { Modal } from '@material-ui/core';
import React, { useState } from 'react'
import classes from './Modal.module.css';
import Button from '@material-ui/core/Button';
import DatePicker from '../Calender/DatePicker';
import TextField from '@material-ui/core/TextField';

export const SimpleModal = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [descreption, setDescreption] = useState('');

  const handleChangeDesc = (desc) => {
    setDescreption(desc)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }
const emptyModel = () =>{
  setSelectedDate(new Date())
  setDescreption('')
}

  const handleSubmit = () => {

    const obj = {
      date: selectedDate.toString().substring(0,15),
      descreption: descreption,
      status: false
    }
    props.handleAddTodo(obj);
    emptyModel()
  }

  const body = (
    <div className={classes.body}>
      <h2 id="simple-modal-title">Add New Todo</h2>
      <p id="simple-modal-description">
        Fill the description and the date
          </p>
          
      <DatePicker
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
      />
      <br />
      <TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows={4}
        variant="outlined"
        value={descreption}
        onChange={(event) => handleChangeDesc(event.target.value)}
        className={classes.Desc}
      />
<br />
<div className={classes.mr} >
      <Button variant="contained" onClick={handleSubmit} color="primary" >
        Submit
      </Button>

</div>

    </div>
  );

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={classes.Modal}
    >
      {body}
    </Modal>
  )
}

export default SimpleModal;
