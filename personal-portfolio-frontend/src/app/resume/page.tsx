"use client"
import * as React from "react"
import { Box, Typography } from "@mui/material"
import PageHeader from "@/components/PageHeader"
import { HiArrowSmRight } from "react-icons/hi"
import ResumeCompanyHeader from "@/components/ResumeCompanyHeader"
import ResumeTitleHeader from "@/components/ResumeTitleHeader"
import ResumeItem from "@/components/ResumeItem"

export default function Resume() {
  return (
    <>
      <PageHeader
        title="Resume"
        subtitle="My most recent professional history."
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <ResumeCompanyHeader
            src="https://media.licdn.com/dms/image/D560BAQGZM6ddJVt6Iw/company-logo_100_100/0/1681504020852?e=1694044800&v=beta&t=jzPXN0ZavKK1uskS2uUY3gaHjEQDCElHyhfOOrMeQ88"
            companyName="Particl"
            startYear="2021"
            endYear="Present"
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, ml: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <ResumeTitleHeader
                jobTitle="Software Engineer"
                startDate="Feb 2022"
                endDate="Present"
              />
              <ResumeItem text="Built back-end systems for web applications in Python and SQL using AWS Lambda, DynamoDB, and PostgreSQL." />
              <ResumeItem text="Architected pipeline for activation of 80,000 web scrapers ingesting 15 GB of data daily using AWS Step Functions, Batch, and Lambda." />
              <ResumeItem text="Implemented public facing API resources and methods viewed by thousands of users with AWS API Gateway." />
              <ResumeItem text="Designed front-end features using Next.js, React, and TypeScript." />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <ResumeTitleHeader
                jobTitle="Account Executive"
                startDate="July 2021"
                endDate="Feb 2022"
              />
              <ResumeItem text="Implemented and managed integrations of sales software including Salesforce, Outreach, ZoomInfo, Clearbit, Apollo, PartnerStack." />
              <ResumeItem text="#1 salesperson at the company closing over $100,000 in annual contracts in my first 2 quarters." />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <ResumeCompanyHeader
            src="https://media.licdn.com/dms/image/C4D0BAQG_yP8EE2jxAg/company-logo_100_100/0/1604418400730?e=1694044800&v=beta&t=V9DUztLNxffdQoxtyOb96f_opCN2RfbNH1MVp1nZsHc"
            companyName="BambooHR"
            startYear="2020"
            endYear="2021"
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, ml: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <ResumeTitleHeader
                jobTitle="Sales Development Representative"
                startDate="Nov 2020"
                endDate="July 2021"
              />
              <ResumeItem text="Averaged 150+ calls per day to generate high quality demos for the account executive team." />
              <ResumeItem text="Consistently hit quotas with over 60 appointments set per month." />
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <ResumeCompanyHeader
            src="https://media.licdn.com/dms/image/C4E0BAQHaWJMkOjnssA/company-logo_100_100/0/1614965958560?e=1694044800&v=beta&t=xUoCnrPoz2R_Sto5kcWy0Xqrl_oyOP099AVAoNk5aqw"
            companyName="Dexi.io"
            startYear="2019"
            endYear="2020"
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, ml: 3 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <ResumeTitleHeader
                jobTitle="Technical Account Manager"
                startDate="Aug 2019"
                endDate="Nov 2020"
              />
              <ResumeItem text="Designed and oversaw custom web crawling systems with JavaScript, Regex, and XPath." />
              <ResumeItem text="Managed data delivery process for $1.2 million of company accounts." />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
