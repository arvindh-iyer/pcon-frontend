// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";

// export const Navbar = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const navItems = ["Home", "About", "Services", "Contact"]; // Add your navigation items here

//   const appBarContent = (
//     <Toolbar>
//       {navItems.map((item) => (
//         <div key={item} style={{ margin: "0 10px" }}>
//           {item}
//         </div>
//       ))}
//       <button
//         edge="start"
//         color="inherit"
//         aria-label="menu"
//         onClick={toggleDrawer(true)}
//       ></button>
//     </Toolbar>
//   );

//   const drawerContent = (
//     <List>
//       {navItems.map((item) => (
//         <ListItem button key={item}>
//           <ListItemText primary={item} />
//         </ListItem>
//       ))}
//     </List>
//   );

//   return (
//     <>
//       <AppBar position="static">{appBarContent}</AppBar>
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// };

import {
  AppBar,
  Button,
  Drawer,
  Grid,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const [open, setOpen] = useState(0);

  const options = ["Home", "Events", "Achievements", "Reviews", "Members"];

  function toggle() {
    setOpen(!open);
  }
  const isMd = useMediaQuery("(min-width:600px)");
  return (
    <AppBar
      sx={{
        height: "10vh",
        backgroundColor: "#e3d7c1",
        opacity: 0.45,
        border: "InactiveBorder",
        position: "sticky",
      }}
    >
      {isMd ? (
        <Grid container sx={{ height: "100%" }}>
          {options.map((item) => (
            <Grid
              item
              xs={1.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button sx={{ fontSize: "1.2rem", color: "black", opacity: 1 }}>
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Stack direction="row-reverse" sx={{ height: "100%" }}>
          <IconButton
            onClick={toggle}
            sx={{
              height: "100%",
              display: "flex",
              width: "20vw",
            }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Drawer open={open} onClose={toggle} sx={{ opacity: 1 }}>
            {options.map((item) => (
              <Button
                sx={{
                  fontSize: "1.2rem",
                  color: "black",
                  opacity: 0.45,
                  height: "15vw",
                }}
              >
                {item}
              </Button>
            ))}
          </Drawer>
        </Stack>
      )}
    </AppBar>
  );
};
