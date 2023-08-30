"use client"
import * as React from "react"
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material"
import PageHeader from "@/components/PageHeader"
import { HiOutlineCalendar, HiOutlineArrowSmRight } from "react-icons/hi"
import Link from "next/link"
import BlogPostCard from "@/components/BlogPostCard"

export default function Resume() {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="A peek into things that go on in my head."
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <BlogPostCard
          title="3 Barriers to Entry in Real Estate and How I Overcame Them"
          subtitle="and how I got insanely lucky at age 20."
          date="August 30, 2023"
          url="https://medium.com/@joerosborne/3-barriers-to-entry-in-real-estate-and-how-i-overcame-them-8ffbff7dbf04"
        />
        <BlogPostCard
          title="Web scraping is an art, not a science"
          subtitle="Refining web scraping skills and processes requires a degree of artistry, not just raw programming knowledge."
          date="March 4, 2023"
          url="https://medium.com/@joerosborne/web-scraping-is-an-art-not-a-science-ae2bf16a6521"
        />
      </Box>
    </>
  )
}
