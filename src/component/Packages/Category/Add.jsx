import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Add() {
  const [title, setTitle] = React.useState("");
  const [img, setImage] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("error");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeImage = (e) => {
    setImage(e.target.value);
  };
  const addCategory = async () => {
    try {
      const res = await axios.post("http://localhost:8003/categories", {
        title,
        img,
      });
      setMessage(res.data.message);
    } catch (error) {
      console.log("err", error);
    }
  };
  return (
    <div>
      <Button onClick={handleOpen}>+Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Category
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              onChange={changeTitle}
            />
            <TextField
              id="standard-basic"
              label="Image"
              variant="standard"
              onChange={changeImage}
            />
          </Box>
          <Button onClick={addCategory}>Add</Button>
        </Box>
      </Modal>
    </div>
  );
}
