import React from "react";
import Button from "@mui/material/Button";

import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    width: 105,
  },
}));

export default function Pagination(props) {
  const classes = useStyles();
  return (
    <div style={{ height: 100 }}>
      <Stack
        direction="row"
        spacing={2}
        style={{ justifyContent: "center", marginTop: 50 }}
      >
        {props.gotoPrevPage ? (
          <Button
            size="large"
            className={classes.root}
            variant="contained"
            onClick={props.gotoPrevPage}
            startIcon={<NavigateBeforeIcon />}
          ></Button>
        ) : (
          <Button
            size="large "
            className={classes.root}
            variant="contained"
            disabled
            startIcon={<NavigateBeforeIcon />}
          ></Button>
        )}
        {props.gotoNextPage ? (
          <Button
            size="large"
            className={classes.root}
            onClick={props.gotoNextPage}
            variant="contained"
            endIcon={<NavigateNextIcon />}
          ></Button>
        ) : (
          <Button
            size="large"
            className={classes.root}
            variant="contained"
            disabled
            startIcon={<NavigateNextIcon />}
          ></Button>
        )}
      </Stack>
    </div>
  );
}
