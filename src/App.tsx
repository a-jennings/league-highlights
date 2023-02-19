import { ThemeProvider } from "@mui/material";
import { NavigationBar } from "components/NavigationBar/NavigationBar";
import { theme } from "theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
    </ThemeProvider>
  );
}

export default App;
