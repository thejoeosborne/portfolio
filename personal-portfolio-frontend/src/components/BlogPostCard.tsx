"use client"
import * as React from "react"
import {
  Box,
  Card,
  Link,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material"
import { HiOutlineCalendar, HiOutlineArrowSmRight } from "react-icons/hi"

export default function BlogPostCard({
  title,
  subtitle,
  date,
  url,
}: {
  title: string
  subtitle: string
  date: string
  url: string
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: 200,
        backgroundColor: "transparent",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
            }}
          >
            <HiOutlineCalendar />
            <Typography>{date}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "end",
              gap: 0.5,
              cursor: "pointer",
            }}
          >
            <Link
              href={url}
              underline="none"
              sx={{ display: "flex", flexDirection: "row", alignItems: "end" }}
              target="blank"
              color="primary.dark"
            >
              <Typography
                color="primary.dark"
                fontWeight="bold"
                sx={{ textDecoration: "none" }}
              >
                Read More
              </Typography>
              <HiOutlineArrowSmRight color="primary.dark" size={22} />
            </Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}
