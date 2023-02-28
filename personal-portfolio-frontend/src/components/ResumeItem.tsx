"use client"
import * as React from "react"
import { Box, Typography } from "@mui/material"
import PageHeader from "@/components/PageHeader"
import { HiArrowSmRight } from "react-icons/hi"

export default function ResumeItem({ text }: { text: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
      }}
    >
      <HiArrowSmRight />
      <Typography>{text}</Typography>
    </Box>
  )
}
