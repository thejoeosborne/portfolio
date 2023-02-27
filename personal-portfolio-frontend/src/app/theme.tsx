import { createTheme, ThemeProvider } from "@mui/material/styles"
import { CssBaseline, GlobalStyles } from "@mui/material"

const themeConfig = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ffe0ed",
      light: "#fff0f6",
      dark: "#f593bc",
    },
    secondary: {
      main: "#b2e4e1",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgba(255,254,255,1)",
          backgroundImage: `linear-gradient(180deg, rgba(255,254,255,1) 30%, rgba(255,224,237,1) 83%, rgba(255,195,216,1) 100%)`,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
        contained: {
          textTransform: "none",
          fontWeight: "bold",
          backgroundColor: "#f7bad3",
          color: "#4a4a4a",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#4a4a4a",
        },
      },
    },
  },
  typography: {
    fontFamily: [
      '"Inter"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

export const CustomTheme = ({ children }: { children?: React.ReactNode }) => {
  let theme = themeConfig
  return (
    <ThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </ThemeProvider>
  )
}
