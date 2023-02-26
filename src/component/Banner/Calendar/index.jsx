import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { color } from '@mui/system';

export default function DatePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: 'Check-in', end: 'Check-out' }}
    >
      <DateRangePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} sx={{
      "& fieldset": { border: 'none' },
    }} />
            <Box sx={{ mx: 2, color: "#000" }}>-</Box>
            <TextField {...endProps}  sx={{
      "& fieldset": { border: 'none' },
    }}/>
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}