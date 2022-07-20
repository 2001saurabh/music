import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import { FormLabel } from "@mui/material";

export default function DateInput() {
  const [value, setValue] = React.useState(new Date());

  return (
    <Box sx={{ display: "flex", alignItems: "center", }}>
      <FormLabel sx={{ color: "black"  }}>Date of Birth</FormLabel>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          disableFuture
          openTo="year"
          views={["year", "month", "day"]}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} sx={{ width: "25ch",mx:4 }} />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
}
