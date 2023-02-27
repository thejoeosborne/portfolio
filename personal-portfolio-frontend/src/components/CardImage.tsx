"use client"
import { Card, Avatar, CardMedia } from "@mui/material"
import Image from "next/image"

export default function CardImage({
  src,
  width = "40%",
  height = "40%",
}: {
  src: string
  width?: string | number
  height?: string | number
}) {
  return (
    <Card
      raised
      sx={{
        margin: 1,
        width: width,
        height: height,
      }}
    >
      <Card sx={{ margin: 0.75 }}>
        <CardMedia
          component="img"
          image={src}
          alt="Personal headshot"
          sx={{ width: "100%", height: "100%" }}
        />
      </Card>
    </Card>
  )
}
