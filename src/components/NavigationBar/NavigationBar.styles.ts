import { theme } from "theme";
import { Styles } from "types";

export const useStyles: Styles = {
  container: {
    backgroundColor: theme.palette.primary.main,
    boxShadow:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    height: 60,
    marginRight: 20,
  },
  mainText: {
    fontSize: 20,
    fontStyle: "italic",
    color: theme.palette.common.white,
    marginRight: 2.5,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
  },
};
