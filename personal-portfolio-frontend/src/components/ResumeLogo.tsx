"use client"
import { Card, CardMedia } from "@mui/material"

export default function CardImage({
  src,
  width = "40%",
  height = "40%",
  raised = true,
}: {
  src: string
  width?: string | number
  height?: string | number
  raised?: boolean
}) {
  return (
    <Card
      sx={{
        margin: 1,
        width: width,
        height: height,
      }}
    >
      <CardMedia
        component="img"
        image={src}
        alt="Personal headshot"
        sx={{ width: "100%", height: "100%" }}
      />
    </Card>
  )
}
