/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  Typography,
} from "@mui/material";

import PokeType from "./PokeType";

function PokeMove(props) {
  const { moves } = props;
  const [level, setLevel] = useState([]);
  //   const [tm, setTM] = useState([]);
  //   const [evol, setEvol] = useState([]);
  //   const [egg, setEgg] = useState([]);
  //   const [tutor, setTutor] = useState([]);
  //   const [tr, setTR] = useState([]);

  useEffect(() => {
    setLevel([]);
    props.moves.map((m) => {
      if (m.version_group_details[0].move_learn_method.name === "level-up") {
        fetch(m.move.url)
          .then((res) => res.json())
          .then((res) => {
            let p = res.power;
            let a = res.accuracy;
            if (res.power === null) {
              p = "-";
            }
            if (res.accuracy === null) {
              a = "-";
            }
            setLevel((level) => [
              ...level,
              {
                level: m.version_group_details[0].level_learned_at,
                move: m.move.name,
                type: res.type.name,
                cat: res.damage_class.name,
                power: p,
                acc: a,
              },
            ]);
          });
      }
    });
  }, [props.moves]);

  function setCap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <Container sx={{ mt: "1rem" }}>
      <Typography variant="h5">Moves learnt by level up</Typography>
      <TableContainer component={Paper} sx={{ mt: "1rem" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Lv.</TableCell>
              <TableCell>Move</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Cat.</TableCell>
              <TableCell>Power</TableCell>
              <TableCell>Acc.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {level.map((l) => (
              <TableRow>
                <TableCell>{l.level}</TableCell>
                <TableCell>{setCap(l.move)}</TableCell>
                <TableCell>
                  <PokeType type={l.type} />
                </TableCell>
                <TableCell>{setCap(l.cat)}</TableCell>
                <TableCell>{l.power}</TableCell>
                <TableCell>{l.acc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default PokeMove;
