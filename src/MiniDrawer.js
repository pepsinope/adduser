import './style.css';
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh"
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>

    </div>
  );
}


