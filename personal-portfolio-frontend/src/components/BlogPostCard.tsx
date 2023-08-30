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
        height: 175,
        flexShrink: 0,
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
        }}
      >
        <CardHeader
          disableTypography
          sx={{ fontWeight: "bold", fontSize: 26, mb: -3 }}
          title={title}
        >
          {" "}
        </CardHeader>
        <Box sx={{ display: "flex", px: "16px" }}>
          <Typography fontSize={18}>{subtitle}</Typography>
        </Box>
      </Box>
      <CardContent sx={{ display: "flex", paddingBottom: 0 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
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
                flexDirection: "column",
                gap: 0.5,
                cursor: "pointer",
              }}
            >
              <Link
                href={url}
                underline="none"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
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
        </Box>
      </CardContent>
    </Card>
  )
}
