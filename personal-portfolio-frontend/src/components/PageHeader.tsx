import { Box, Divider, Typography } from "@mui/material"

export default function PageHeader({
  title,
  subtitle,
  headerAppend,
}: {
  title: string
  subtitle?: string
  headerAppend?: any
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, pb: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 3,
          alignItems: "end",
        }}
      >
        <Typography sx={{ fontSize: 36, mb: -1 }}>{title}</Typography>
        {headerAppend}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 0.5,
        }}
      >
        <Typography variant="h3" sx={{ fontSize: 18 }}>
          {subtitle}
        </Typography>
      </Box>
      <Divider />
    </Box>
  )
}
