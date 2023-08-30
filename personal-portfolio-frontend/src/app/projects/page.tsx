"use client"
import * as React from "react"
import { Box } from "@mui/material"
import PageHeader from "@/components/PageHeader"
import ProjectCard from "@/components/ProjectCard"
import { AiFillGithub } from "react-icons/ai"
import { HiOutlineGlobeAlt } from "react-icons/hi"

export default function Resume() {
  return (
    <>
      <PageHeader
        title="Projects"
        subtitle="Personal projects that I'm proud of."
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <ProjectCard
          title="Home Slice"
          subtitle="Hyper accuracte mortgage calculator for real estate in Utah. Also has a market overview that pulls live data from every active lisitng on the market."
          url="https://www.homesliceapp.ai"
          buttonIcon={<HiOutlineGlobeAlt size={16} />}
          buttonText="View Website"
        />
        <ProjectCard
          title="Python Emailer"
          subtitle="Functions I built in Python to send emails with or without attachments. I use this tool anytime I need to send automated emails."
          url="https://github.com/thejoeosborne/python-emailer"
          buttonIcon={<AiFillGithub size={16} />}
          buttonText="View GitHub"
        />
        <ProjectCard
          title="joeosborne.me"
          subtitle="Source code for this website :)"
          url="https://github.com/thejoeosborne/portfolio/tree/main/personal-portfolio-frontend"
          buttonIcon={<AiFillGithub size={16} />}
          buttonText="View GitHub"
        />
      </Box>
    </>
  )
}
