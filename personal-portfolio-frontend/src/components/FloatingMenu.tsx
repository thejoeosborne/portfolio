import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import { Button } from "@mui/material"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import {
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineWrenchScrewdriver,
  HiOutlinePencilSquare,
  HiOutlineDocumentText,
} from "react-icons/hi2"
import { RiFilePaper2Line } from "react-icons/ri"

export default function FloatingMenu() {
  return (
    <Box
      width="100%"
      sx={{
        borderRadius: 99,
        ml: -0.5,
        mr: -0.5,
        pb: 4,
      }}
    >
      <AppBar
        position="static"
        sx={{
          borderRadius: 99,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <Button
              startIcon={<HiOutlineHome />}
              href={"/"}
              variant="contained"
            >
              Home
            </Button>
            <Button
              href={"/blog"}
              startIcon={<HiOutlineNewspaper />}
              variant="contained"
            >
              Blog
            </Button>
            <Button
              startIcon={<HiOutlineWrenchScrewdriver />}
              variant="contained"
              href={"/projects"}
            >
              Projects
            </Button>
            <Button
              startIcon={<HiOutlineDocumentText />}
              href={"/resume"}
              variant="contained"
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
