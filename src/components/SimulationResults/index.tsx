import React, { useCallback, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { get } from "lodash";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { BaseFunctions } from "services/vessel/actions";
import { useDispatch } from "react-redux";
import produce from "immer";
import styles from "./styles";

const useStyles = makeStyles(styles);

interface SimulationResultProps {
  selectedVessel: any;
}

function Index({ selectedVessel }: SimulationResultProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    simulationRoutes,
    simulationRoutes: { loading, data },
  } = selectedVessel;

  const [rows, setRows] = useState(data);

  useEffect(() => {
    setRows(data);
  }, [data]);

  const handleUpdateRow = useCallback(
    (index: number, key: string, value: any) => {
      setRows((prevRows: any) =>
        produce(prevRows, (draft) => {
          draft[index][key] = value;
        })
      );
    },
    []
  );

  const handleUpdate = () => {
    dispatch(
      BaseFunctions.setState({
        field: "selectedVessel",
        simulationRoutes: {
          ...simulationRoutes,
          data: rows,
          update: true,
        },
      })
    );
  };

  const resultData = useCallback(() => {
    return (
      <Grid item xs={12} className={classes.tableWrapper}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Longitude</TableCell>
              <TableCell align="center">Latitude</TableCell>
              <TableCell align="center">Heading</TableCell>
              <TableCell align="center">Distance (m)</TableCell>
              <TableCell align="center">Speed (knot)</TableCell>
              <TableCell align="center">Moving Time (hours)</TableCell>
              <TableCell align="center">Timestamp</TableCell>
              <TableCell align="center">Created_at</TableCell>
              <TableCell align="center">
                {rows.length !== 0 && (
                  <>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      disableElevation
                      onClick={() => handleUpdate()}
                    >
                      Update
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any, index: number) => (
              <TableRow
                key={row.id}
                style={{
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  backgroundColor: "white",
                }}
              >
                <TableCell className={classes.tableCell} align="center">
                  <TextField
                    id="standard-basic"
                    value={get(row, "longitude")}
                    onChange={(e) =>
                      handleUpdateRow(index, "longitude", e.currentTarget.value)
                    }
                  />
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <TextField
                    id="standard-basic"
                    value={get(row, "latitude")}
                    onChange={(e) =>
                      handleUpdateRow(index, "latitude", e.currentTarget.value)
                    }
                  />
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <TextField
                    id="standard-basic"
                    value={get(row, "heading")}
                    disabled
                  />
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <TextField
                    id="standard-basic"
                    value={get(row, "distance")}
                    disabled
                    onChange={(e) =>
                      handleUpdateRow(index, "distance", e.currentTarget.value)
                    }
                  />
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <TextField
                    id="standard-basic"
                    value={get(row, "speed")}
                    onChange={(e) =>
                      handleUpdateRow(index, "speed", e.currentTarget.value)
                    }
                  />
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <TextField
                    id="standard-basic"
                    value={get(row, "movingTime")}
                    disabled
                    onChange={(e) =>
                      handleUpdateRow(
                        index,
                        "movingTime",
                        e.currentTarget.value
                      )
                    }
                  />
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <TextField
                    id="standard-basic"
                    value={get(row, "timestamp")}
                    onChange={(e) =>
                      handleUpdateRow(index, "timestamp", e.currentTarget.value)
                    }
                  />
                </TableCell>
                <TableCell className={classes.tableCell} align="center">
                  <TextField
                    id="standard-basic"
                    value={get(row, "createdAt")}
                    disabled
                    onChange={(e) =>
                      handleUpdateRow(index, "createdAt", e.currentTarget.value)
                    }
                  />
                </TableCell>
                <TableCell />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [simulationRoutes, rows]);

  return <>{!loading && resultData()}</>;
}

export default Index;
