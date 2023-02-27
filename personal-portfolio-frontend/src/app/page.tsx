"use client"
import { Box, Typography, IconButton } from "@mui/material"
import CardImage from "@/components/CardImage"
import { RxLinkedinLogo } from "react-icons/rx"
import { AiFillGithub } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"

export default function Home() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
        }}
      >
        <Box
          maxWidth={500}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Typography variant="h3" fontSize={72}>
            Hi, I'm Joe.
          </Typography>
          <Typography variant="h3" fontSize={26}>
            I'm a software engineer with early stage startup experience.
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              gap: 2,
            }}
          >
            <IconButton
              href={"https://www.linkedin.com/in/joe-osborne-profile/"}
              target="blank"
            >
              <RxLinkedinLogo />
            </IconButton>
            <IconButton
              href={"https://github.com/thejoeosborne"}
              target="blank"
            >
              <AiFillGithub size={28} />
            </IconButton>
            <IconButton href={"mailto:joerosborne@gmail.com"} target="blank">
              <HiOutlineMail size={28} />
            </IconButton>
          </Box>
        </Box>
        <CardImage
          src="https://ucarecdn.com/54210c9e-39ac-447e-b167-193369fa2b15/headshotCopy.jpeg"
          width="50%"
          height="50%"
        />
      </Box>
    </Box>
  )
}
