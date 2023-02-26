"use client"
import { Container } from "@mui/material"
import FloatingMenu from "@/components/FloatingMenu"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode
}) {
  return (
    <Container sx={{ pt: 2 }}>
      <FloatingMenu></FloatingMenu>
      {children}
    </Container>
  )
}
