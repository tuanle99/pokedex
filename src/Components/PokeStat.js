import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Stack,
  LinearProgress,
} from "@mui/material";

function PokeStat(props) {
  const { stats } = props;

  const normalise = (value) => ((value - 0) * 100) / (180 - 0);

  function stat_bar_color(stat) {
    if (stat < 60) {
      return "#ff7f0f";
    } else if (stat < 90) {
      return "#ffdd57";
    } else if (stat < 120) {
      return "#a0e515";
    } else {
      return "#00c2b8";
    }
  }

  function stat_name(sn) {
    switch (sn) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp.Atk";
      case "special-defense":
        return "Sp.Def";
      case "speed":
        return "Speed";
      default:
        return "";
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {stats.map((stat) => (
            <TableRow key={stat.stat.name}>
              <TableCell style={{ width: "10%", textAlign: "right" }}>
                {stat_name(stat.stat.name)}
              </TableCell>
              <TableCell style={{ width: "5%", textAlign: "left" }}>
                {stat.base_stat}
              </TableCell>
              <TableCell style={{ width: "85%", textAlign: "left" }}>
                <Stack sx={{ color: stat_bar_color(stat.base_stat) }}>
                  <LinearProgress
                    variant="determinate"
                    color="inherit"
                    value={normalise(stat.base_stat)}
                  />
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PokeStat;
