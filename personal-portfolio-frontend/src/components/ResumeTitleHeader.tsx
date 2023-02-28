"use client"
import * as React from "react"
import { Box, Typography } from "@mui/material"
import PageHeader from "@/components/PageHeader"
import { HiArrowSmRight } from "react-icons/hi"

export default function ResumeTitleHeader({
  jobTitle,
  startDate,
  endDate,
}: {
  jobTitle: string
  startDate: string
  endDate: string
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        gap: 2,
      }}
    >
      <Typography fontSize={18} fontWeight={"bold"} fontStyle={"italic"}>
        {jobTitle}
      </Typography>
      <Typography fontSize={14} fontStyle={"italic"}>
        {startDate} - {endDate}
      </Typography>
    </Box>
  )
}
