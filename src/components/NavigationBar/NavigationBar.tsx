import React, { ReactElement } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useStyles } from "./NavigationBar.styles";
import { useSetState } from "hooks/useSetState";

type NavigationBarState = {
  currentTab: number;
};

export function NavigationBar(): ReactElement {
  const classes = useStyles;
  const [state, setState] = useSetState<NavigationBarState>({
    currentTab: 1,
  });

  const handleChange = (_event: React.SyntheticEvent, value: number) => {
    setState({
      currentTab: value,
    });
  };

  return (
    <Box sx={classes.container}>
      <Box display="flex" alignItems="center" p={1.25}>
        <img src="logo.png" alt="logo" style={classes.logo} />
        <Typography sx={classes.mainText}>League Highlights</Typography>
      </Box>
      <Tabs
        value={state.currentTab}
        onChange={handleChange}
        sx={classes.tabContainer}
      >
        <Tab label="LEC" sx={classes.tab} />
        <Tab label="LCK" sx={classes.tab} />
        <Tab label="LPL" sx={classes.tab} />
        <Tab label="LCS" sx={classes.tab} />
      </Tabs>
    </Box>
  );
}
