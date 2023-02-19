import { theme } from "theme";
import { Styles } from "types";

export const useStyles: Styles = {
  container: {
    borderRadius: "4px",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    backgroundColor: theme.palette.grey[200],
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    cursor: "pointer",
  },
  iconButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
};
