import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    159,
    6.0,
    24,
    4.0
  ),
  createData(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    237,
    9.0,
    37,
    4.3
  ),
  createData(
    "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    262,
    16.0,
    24,
    4.0
  ),
  createData(
    "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    305,
    3.7,
    67,
    4.3
  ),
  createData(
    "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
    356,
    16.0,
    49,
    3.9
  ),
];

function TopSongs() {
  const navigate = useNavigate();
  const handleAddSong = (e) => {
    navigate("/add-song");
  };
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ color: "white", fontFamily: "cursive" }}
          >
            Top 10 Songs
          </Typography>
        </Toolbar>

        <Button
          variant="contained"
          onClick={handleAddSong}
          startIcon={<AddRoundedIcon />}
          sx={{
            borderRadius: "1rem",
            color: "green",
            bgcolor: "#f5f5f5",
            my: 2,
            textTranform: "capitalize",
            "&:hover": {
              bgcolor: "white",
              borderWidth: "2",
              fontWeight: "500",
            },
          }}
        >
          ADD Song
        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ my: 5 }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Artwork</StyledTableCell>
              <StyledTableCell>Song</StyledTableCell>
              <StyledTableCell>Date of Release</StyledTableCell>
              <StyledTableCell>Artists</StyledTableCell>
              <StyledTableCell>Rating</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  <img
                    height={200}
                    width={200}
                    src={`${row.name}?w=264&fit=crop&auto=format`}
                    srcSet={`${row.name}?w=264fit=crop&auto=format&dpr=2 2x`}
                    loading="lazy"
                  />
                  {/* // {row.name} */}
                </StyledTableCell>
                <StyledTableCell>{row.calories}</StyledTableCell>
                <StyledTableCell>{row.fat}</StyledTableCell>
                <StyledTableCell>{row.carbs}</StyledTableCell>
                <StyledTableCell>
                  {" "}
                  <Rating
                    name="half-rating"
                    defaultValue={row.protein}
                    precision={0.1}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TopSongs;
