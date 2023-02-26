import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"

export default function FloatingMenu() {
  return (
    <Box
      width="100%"
      sx={{ flexGrow: 1, borderRadius: 99, ml: -0.5, mr: -0.5, pb: 2 }}
    >
      <AppBar position="static" sx={{ borderRadius: 99 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
