"use client"
import * as React from "react"
import {
  Box,
  Card,
  Link,
  CardContent,
  CardHeader,
  Typography,
  Button,
} from "@mui/material"
import { HiOutlineCalendar, HiOutlineArrowSmRight } from "react-icons/hi"
import { AiFillGithub } from "react-icons/ai"

export default function ProjectCard({
  title,
  subtitle,
  buttonIcon,
  buttonText,
  url,
}: {
  title: string
  subtitle: string
  buttonIcon: React.ReactNode
  buttonText: string
  url?: string
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: 200,
        backgroundColor: "transparent",
        //filter: "blur(1px)",
        display: "flex",
        flexDirection: "column",
      }}
      title="Web SCraping"
    >
      <CardHeader
        disableTypography
        sx={{ fontWeight: "bold", fontSize: 26, mb: -3 }}
        title={title}
      ></CardHeader>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", maxWidth: 700 }}>
          <Typography fontSize={18}>{subtitle}</Typography>
        </Box>
        <Link
          href={url}
          target="blank"
          sx={{ display: "flex" }}
          underline="none"
        >
          <Button
            startIcon={buttonIcon}
            sx={{ color: "primary.dark" }}
            variant="outlined"
          >
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
