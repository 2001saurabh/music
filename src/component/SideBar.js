import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import PropTypes from "prop-types";
import { Slide, useScrollTrigger, Button } from "@mui/material";
import TopSongs from "./TopSongs";
import TopArtist from "./TopArtist";
import AddSong from "./AddSong";

const drawerWidth = 290;
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const sideMenu = [
  {
    text: "Home",
    icon: <HomeRoundedIcon />,
  },
  {
    text: "Your Library",
    icon: <LibraryMusicRoundedIcon />,
  },
  {
    text: "Create Playlist",
    icon: <AddBoxRoundedIcon />,
  },
  {
    text: "Liked Songs",
    icon: <FavoriteRoundedIcon />,
  },
];
export default function SideBar(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  
  const handleListItemClick = (e, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: "Black" }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
            display: "flex",
            alignItems: "flex-end",
            backgroundColor: "black",
          }}
        >
          {/* sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor:"black"  }} */}
          <Toolbar>
            <Button
              variant="outlined"
              startIcon={<AccountCircleRoundedIcon />}
              sx={{
                color: "white",
                borderColor: "green",
                borderRadius: "1rem",
                fontSize: "12px",
                textTransform: "lowercase",
                "&:hover": {
                  borderColor: "green",
                  borderWidth: "2px",
                },
              }}
            >
              Saurabh
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          minHeight: "100vh",
          flexShrink: 0,
          backgroundColor: "black",
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
          },
        }}
      >
        <Toolbar />
        <Box
          sx={{
            overflow: "auto",
            backgroundColor: "black",
            color: "whitesmoke",
            padding: "0 auto",
          }}
        >
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              disablePadding
              sx={{
                color: "green",
                fontWeight: 600,
                fontFamily: "cursive",
                margin: "auto",
              }}
            >
              Musically
            </Typography>
          </Toolbar>

          <List>
            {sideMenu.map((item, index) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  selected={selectedIndex === index}
                  onClick={(e) => handleListItemClick(e, index)}
                  sx={{
                    color: selectedIndex == index ? "white" : "gray",
                    "&:active": {
                      color: "white",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{ color: "gray", "&:active": { color: "white" } }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ backgroundColor: "#121212" }} />
          <List>
            {["Install App"].map((text, index) => (
              <ListItem key={text} disablePadding disableGutters={true}>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "whiteSmoke" }}>
                    <DownloadForOfflineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#181918" }}
      >
        <Toolbar />
        {props.song}
        {props.artist}
        {props.addsong}
        
      </Box>
    </Box>
  );
}
