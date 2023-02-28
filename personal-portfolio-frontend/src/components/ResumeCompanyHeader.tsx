"use client"
import * as React from "react"
import { Box, Typography } from "@mui/material"
import PageHeader from "@/components/PageHeader"
import { HiArrowSmRight } from "react-icons/hi"
import ResumeLogo from "./ResumeLogo"

export default function ResumeCompanyHeader({
  companyName,
  startYear,
  endYear,
  src,
}: {
  companyName: string
  startYear: string
  endYear: string
  src: string
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
      }}
    >
      <ResumeLogo src={src} width={40} height={40} raised={false} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "baseline",
          gap: 2,
        }}
      >
        <Typography variant="h2" fontSize={24} fontWeight={"bold"}>
          {companyName}
        </Typography>
        <Typography>
          {startYear} - {endYear}
        </Typography>
      </Box>
    </Box>
  )
}
