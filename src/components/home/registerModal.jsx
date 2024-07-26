import React, { useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Form from "./loginModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  width: "55%",
  borderRadius: "20px",
};
export default function RegisterModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{ textTransform: "none", flexDirection: "row" }}
      >
        <span className="text-blue-400">Create an account.</span>
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="w-[120rem] flex justify-center ml-0"
      >
        <Box sx={style}>
          <Form />
        </Box>
      </Modal>
    </div>
  );
}
