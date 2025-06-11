"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AddIcCall } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { name: "Pricing", uri: "/pricing" },
  { name: "Learning Hub", uri: "/learning-hub" },
  { name: "Support", uri: "#footer" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          AUTOSQUAD
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link href={item.uri}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        color: "#000",
        bgcolor: "#fff",
      }}
    >
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#fff", color: "#000" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LEFT SECTION: Menu Icon + Logo + Nav Items */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={40} height={40} />
              <Typography
                variant="h6"
                component="span"
                sx={{ fontWeight: "bold" }}
              >
                Squad
              </Typography>
            </Link>

            {/* Nav Items */}
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
              {navItems.map((item, idx) => (
                <Button
                  key={idx}
                  sx={{ color: "#000000", textTransform: "none" }}
                >
                  <Link href={item.uri}>{item.name}</Link>
                </Button>
              ))}
            </Box>
          </Box>

          {/* RIGHT SECTION: Call Icon (Desktop Only) */}
          <Box sx={{ display: "flex" }}>
            <Button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window().open("email@glma.vd");
                }
              }}
              variant="contained"
              sx={{
                bgcolor: "#b0460d",
                color: "#fff",
                textTransform: "none",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: { xs: "none", sm: "flex" },
              }}
            >
              <AddIcCall />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}
