import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import Home from "./pages/Home";

const theme = createTheme({
    typography: {
        title: { fontFamily: "Righteous, cursive" },
    },
    palette: {
        white: {
            main: "#FFFFFF",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}

export default App;
