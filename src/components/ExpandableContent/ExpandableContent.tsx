import { Box, Collapse, IconButton, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { useStyles } from "./ExpandableContent.styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSetState } from "hooks/useSetState";
type ExpandableContentProps = {
  title?: string;
  children?: ReactElement;
};

export function ExpandableContent(props: ExpandableContentProps): ReactElement {
  const classes = useStyles;
  const { title, children } = props;
  const [state, setState] = useSetState({
    expanded: false,
  });
  const { expanded } = state;

  return (
    <Box
      sx={classes.container}
      onClick={() => setState({ expanded: !expanded })}
    >
      <Box p={2.5} minHeight="24px">
        <Typography>{title}</Typography>
      </Box>
      <IconButton sx={classes.iconButton}>
        <ChevronRightIcon
          sx={{
            transform: expanded ? "rotate(90deg)" : "",
            transition: "all 0.2s ease",
          }}
        />
      </IconButton>

      <Collapse in={expanded}>
        <Box>{children}</Box>
      </Collapse>
    </Box>
  );
}
