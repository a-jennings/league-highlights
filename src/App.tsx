import { createContext, useState } from "react";
import { ThemeProvider } from "@mui/material";
import { NavigationBar } from "components/NavigationBar/NavigationBar";
import { theme } from "theme";
import { Route, Routes } from "react-router-dom";
import { LCK_PAGE, LCS_PAGE, LEC_PAGE, LPL_PAGE } from "routes";

const navLinks = [
  {
    label: "LEC",
    link: LEC_PAGE,
  },
  {
    label: "LCK",
    link: LCK_PAGE,
  },
  {
    label: "LPL",
    link: LPL_PAGE,
  },
  {
    label: "LCS",
    link: LCS_PAGE,
  },
];

function App() {
  const [spoilerMode, setSpoilerMode] = useState(false);

  const AppContext = createContext({
    spoilerMode: false,
    setSpoilerMode: (value: boolean) => {
      setSpoilerMode(value);
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{ spoilerMode, setSpoilerMode }}>
        <AppContext.Consumer>
          {(app) => (
            <>
              <NavigationBar navLinks={navLinks} appState={app} />
              <Routes>
                <Route element={<>Home page</>} path="/" />
                <Route element={<>LEC</>} path={LEC_PAGE} />
                <Route element={<>LCK</>} path={LCK_PAGE} />
                <Route element={<>LPL</>} path={LPL_PAGE} />
                <Route element={<>LCS</>} path={LCS_PAGE} />
              </Routes>
            </>
          )}
        </AppContext.Consumer>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default App;
