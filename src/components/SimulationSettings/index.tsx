import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import LayersClearIcon from "@material-ui/icons/LayersClear";
import SendIcon from "@material-ui/icons/Send";

const styles = (theme: any) => {
  return {
    root: {
      position: "fixed" as const,
      top: 100,
      right: 0,
    },
  };
};

const useStyles = makeStyles(styles);

function Index({
  showSimulationRoutes,
  handleClickClearDraw,
  handleClickClearDrawLayer,
  handleClickSend,
  show,
  ...props
}: any) {
  const classes = useStyles();

  return (
    <>
      {show && (
        <div className={classes.root}>
          <div>
            <IconButton
              color="secondary"
              onClick={() => handleClickClearDraw()}
            >
              <ClearIcon color="action" />
            </IconButton>
          </div>
          <div>
            <IconButton
              color="secondary"
              onClick={() => handleClickClearDrawLayer()}
            >
              <LayersClearIcon color="action" />
            </IconButton>
          </div>
          <div>
            <IconButton color="secondary" onClick={() => handleClickSend()}>
              <SendIcon color="action" />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
