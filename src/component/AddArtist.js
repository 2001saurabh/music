import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DateInput from "./Date";
import {
  Card,
  IconButton,
  Divider,
  FormLabel,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const style = {
  position: "absolute",
  justifyContent: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50rem",
  minHeight: "30rem",
  borderRadius: 2,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};
export default function BasicModal({ handleClose, open }) {
  const [artist, setArtist] = useState("");
  const handleArtistChange = (event) => {
    setArtist(event.target.value);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card elevation={0} sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{
              color: "black",
              position: "absolute",
              left: "3%",
              top: "3%",
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              // position: "fixed",
              alignItems: "center",
              justifyContent: "center",
              width: "90%",
              height: "3rem",
              display: "flex",
            }}
          >
            <Typography variant="h6">Add a new artist</Typography>
          </Box>
          <Divider sx={{ my: 1 }} />
          <Box sx={{ py: 8, mx: 5, height: "70vh" }}>
            {/* <Typography
              variant="h5"
              sx={{ p: 2, fontWeight: "500", fontSize: "1.75rem" }}
            >
              Add a new artits
            </Typography> */}
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { my: 1.5, mx: 5, width: "25ch" },
                display: "flex",
                alignItems: "center",
              }}
              noValidate
              autoComplete="off"
            >
              <FormLabel sx={{ color: "black" }}>Artist Name</FormLabel>
              <TextField
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                value={artist}
                onChange={handleArtistChange}
              />
            </Box>
            <Box component="form" noValidate autoComplete="off">
              <DateInput />
            </Box>
            <Box
              component="form"
              sx={{
                my: 1.5,
                mx: 4,
                display: "flex",
                alignItems: "center",
              }}
              noValidate
              autoComplete="off"
            >
              <FormLabel sx={{ color: "black" }}>Bio</FormLabel>
              <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: "30ch", height: "6rem", marginLeft: "4.5rem" }}
              />
            </Box>

            <Box sx={{ position: "absolute", bottom: "5%", right: "5%" }}>
              <Button
                variant="outlined"
                onClick={handleClose}
                sx={{
                  color: "black",
                  borderColor: "black",
                  mr: 2,

                  "&:hover": {
                    borderColor: "black",
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "green",
                  px: 4,
                  "&:hover": { bgcolor: "green" },
                }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Card>
      </Modal>
    </div>
  );
}
