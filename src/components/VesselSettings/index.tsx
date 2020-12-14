import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountTreeIcon from "@material-ui/icons/AccountTree";

const styles = (theme: any) => {
  return {
    vesselSetting: {
      position: "absolute" as const,
      top: 50,
      left: -10,
    },
  };
};

const useStyles = makeStyles(styles);

function Index({ handleClickSimulation, show, ...props }: any) {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {show && (
        <div className={classes.vesselSetting}>
          <div>
            <IconButton onClick={() => handleClickSimulation()}>
              <AccountTreeIcon
                color={isOpen ? "primary" : "inherit"}
                onClick={() => setIsOpen((previous) => !previous)}
              />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
