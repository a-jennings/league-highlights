import React, { ReactElement } from "react";
import {
  Box,
  FormControlLabel,
  lighten,
  Switch,
  Typography,
  useTheme,
} from "@mui/material";
import { useStyles } from "./NavigationBar.styles";
import { NavigationOption, AppState } from "types";
import { Link, useLocation } from "react-router-dom";

type NavigationBarProps = {
  navLinks: Array<NavigationOption>;
  appState: AppState;
};

export function NavigationBar(props: NavigationBarProps): ReactElement {
  const classes = useStyles;
  const { navLinks, appState } = props;
  const theme = useTheme();
  const location = useLocation();
  const { spoilerMode, setSpoilerMode } = appState;

  return (
    <Box sx={classes.container}>
      <Box display="flex" alignItems="center">
        <Link to="/" style={classes.link}>
          <Box display="flex" alignItems="center" p={1.25} pl={2.5}>
            <img src="logo.png" alt="logo" style={classes.logo} />
            <Typography sx={classes.mainText}>League Highlights</Typography>
          </Box>
        </Link>

        {navLinks.map((option) => (
          <Link to={option.link} style={classes.link} key={option.label}>
            <Box
              sx={{
                backgroundColor: location.pathname.startsWith(option.link)
                  ? lighten(theme.palette.primary.main, 0.3)
                  : "",
                transition: "all 0.3s ease",
              }}
              px={2.5}
              py="28px"
            >
              <Typography>{option.label}</Typography>
            </Box>
          </Link>
        ))}
      </Box>
      <Box pr={2.5}>
        <FormControlLabel
          label="Spoiler Mode"
          labelPlacement="start"
          sx={{ color: theme.palette.common.white }}
          control={
            <Switch
              color="secondary"
              checked={spoilerMode}
              onChange={(_event, checked) => setSpoilerMode(checked)}
            />
          }
        />
      </Box>
    </Box>
  );
}
