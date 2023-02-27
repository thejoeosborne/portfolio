"use client"
import { Container } from "@mui/material"
import FloatingMenu from "@/components/FloatingMenu"
import { CustomTheme } from "./theme"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode
}) {
  return (
    <body>
      <CustomTheme>
        <Container sx={{ pt: 4, width: "55%" }}>
          <FloatingMenu></FloatingMenu>
          {children}
        </Container>
      </CustomTheme>
    </body>
  )
}
