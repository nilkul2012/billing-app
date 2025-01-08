import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
import "./Customer.style.css";
import InputBox from "../InputBox/index";

const Customer: React.FC = () => {
  const [customerDetails, setCustomerDetails] = React.useState({});

  const onInputChange = (val: string, objKey: string) => {
    const updatedDetails = {...customerDetails}
    updatedDetails[objKey] = val
    setCustomerDetails(updatedDetails)
  }
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={10} offset={1}>
          <Paper className="layout">
            <h1 className="title">Customer Details...</h1>
            <InputBox
              label={"Name"}
              value={customerDetails?.name || ""}
              onChange={onInputChange}
              objKey={"name"}
            />
            <InputBox
              label={"Name"}
              value={customerDetails?.name || ""}
              onChange={onInputChange}
              objKey={"na"}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customer;
