import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { Toolbar, Button } from "@mui/material";
import FormLabel from "@mui/material/FormLabel";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
import Checkboxinput from "./Checkbox";
import AddRounded from "@mui/icons-material/AddRounded";
import AddArtist from "./AddArtist";

function AddSong() {
  const [song, setSong] = React.useState("");
  const [dor, setDor] = React.useState("");
  const [artwork, setArtwork] = React.useState("");
  const [artist, setArtist] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleSongChange = (event) => {
    setSong(event.target.value);
  };
  const handledorChange = (e) => {
    setDor(e.target.value);
  };
  return (
    <Paper
      elevation={4}
      sx={{
        bgcolor: "#f5f5f5",
        m: "auto",
        p: "2.5rem",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ fontFamily: "cursive", fontWeight: "600" }}
        >
          {" "}
          Add a new song{" "}
        </Typography>
      </Toolbar>

      <Box sx={{ my: 5, maxWidth: 600 }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            display: "flex",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <FormLabel sx={{ mr: 9 }}>Song Name</FormLabel>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            placeholder="add song name here"
            maxRows={4}
            value={song}
            onChange={handleSongChange}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            display: "flex",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <FormLabel sx={{ mr: 5 }}>Date of Release</FormLabel>
          <TextField
            id="outlined-multiline-flexible"
            multiline
            placeholder="add Date of Release"
            maxRows={4}
            value={dor}
            onChange={handledorChange}
          />
        </Box>
        <Box sx={{ display: "flex", m: 1 }}>
          <FormLabel sx={{ mr: 13 }}>Artwork</FormLabel>
          <Button
            variant="contained"
            component="label"
            startIcon={<DriveFolderUploadRoundedIcon />}
          >
            Upload image
            <input type="file" hidden />
          </Button>
        </Box>
        <Box sx={{ display: "flex", mx: 1, my: 3, alignItems: "center" }}>
          <FormLabel sx={{ mr: 15 }}>Artist</FormLabel>
          <Checkboxinput />
          <Button
            variant="outlined"
            onClick={handleOpen}
            startIcon={<AddRounded />}
            sx={{
              color: "black",
              borderColor: "black",
              ml: 2,
              width: "12rem",
              textTransform: "capitalize",

              "&:hover": {
                borderColor: "black",
              },
            }}
          >
            Add Artist
          </Button>
          <AddArtist
            open={open}
            handleOpen={handleOpen}
            handleClose={handleModalClose}
          />
        </Box>
        <Box sx={{ display: "flex",mx:1, mt: 5 }}>
          <Button
            variant="outlined"
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
            sx={{ bgcolor: "green", px: 4, "&:hover": { bgcolor: "green" } }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default AddSong;
