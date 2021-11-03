/* eslint-disable array-callback-return */
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";

import PokeType from "./PokeType";

function PokeData(props) {
  const { national_no, type, species, height, weight, abilities } = props;

  function setCap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell style={{ width: "30%" }}>National №</TableCell>
            <TableCell>
              <b>{national_no}</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ width: "30%" }}>Type</TableCell>
            <TableCell style={{ padding: 0 }}>
              {type.map((t) => (
                <PokeType key={t.type.name} type={t.type.name} />
              ))}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ width: "30%" }}>Species</TableCell>
            <TableCell>{species}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ width: "30%" }}>Height</TableCell>
            <TableCell>{height} m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ width: "30%" }}>Weight</TableCell>
            <TableCell>{weight} kg</TableCell>
          </TableRow>
          <TableRow>
            <TableCell style={{ width: "30%" }}>Abilities</TableCell>
            <TableCell>
              {abilities.map((a) => (
                <div key={a.name}>
                  <p>
                    {setCap(a.name)}
                    {a.is_hidden ? " (hidden ability)" : ""}
                  </p>
                </div>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PokeData;
