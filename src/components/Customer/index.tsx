import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
// import TextField from "@mui/material/TextField";
import "./Customer.style.css";
import InputBox from "../Common/InputBox/index";
// import { KeyObjectType } from "node:crypto";

interface customerDetailsType {
  name?: string
  contact?: string
}
const Customer: React.FC = () => {
  const [customerDetails, setCustomerDetails] = React.useState<customerDetailsType>({});

  const onInputChange = (val: string, objKey?: string) => {
    const updatedDetails = {...customerDetails}
    updatedDetails[objKey as keyof customerDetailsType] = val
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
              label={"Contact"}
              value={customerDetails?.contact || ""}
              onChange={onInputChange}
              objKey={"contact"}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Customer;
