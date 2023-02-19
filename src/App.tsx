import { ThemeProvider } from "@mui/material";
import { NavigationBar } from "components/NavigationBar/NavigationBar";
import { theme } from "theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const navLinks = [
  {
    label: "LEC",
    link: "/LEC",
  },
  {
    label: "LCK",
    link: "/LCK",
  },
  {
    label: "LPL",
    link: "/LPL",
  },
  {
    label: "LCS",
    link: "/LCS",
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar navLinks={navLinks} />
      <Routes>
        <Route element={<>Home page</>} path="/" />
        <Route element={<>LEC</>} path="/LEC" />
        <Route element={<>LCK</>} path="/LCK" />
        <Route element={<>LPL</>} path="/LPL" />
        <Route element={<>LCS</>} path="/LCS" />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
