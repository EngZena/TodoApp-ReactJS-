import React from 'react'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
  import DateFnsUtils from '@date-io/date-fns';
export const DatePicker = (props) => {
    return(
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
        margin="normal"
        id="date-picker-dialog"
        label="Date picker dialog"
        format="MM/dd/yyyy"
        value={props.selectedDate}
        onChange={props.handleDateChange}

        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      </MuiPickersUtilsProvider>
    )
}

export default DatePicker;

