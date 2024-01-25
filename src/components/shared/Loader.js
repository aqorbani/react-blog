import { Grid } from "@mui/material";
import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <Grid item xs={12} display="flex" justifyContent="center" color="#eee">
      <RotatingLines
        visible={true}
        height={50}
        width={50}
        color="#538231"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Grid>
  );
};

export default Loader;
