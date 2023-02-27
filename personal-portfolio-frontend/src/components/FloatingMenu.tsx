"use client"
import * as React from "react"
import { Button, Box, AppBar, Toolbar } from "@mui/material"
import {
  HiOutlineHome,
  HiOutlineNewspaper,
  HiOutlineWrenchScrewdriver,
  HiOutlineDocumentText,
} from "react-icons/hi2"

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
