"use client"
import { Container } from "@mui/material"
import FloatingMenu from "@/components/FloatingMenu"
import { CustomTheme } from "./theme"
import { ThemeProvider } from "@mui/material/styles"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode
}) {
  return (
    <CustomTheme>
      <Container sx={{ pt: 4, width: "55%" }}>
        <FloatingMenu></FloatingMenu>
        {children}
      </Container>
    </CustomTheme>
  )
}
