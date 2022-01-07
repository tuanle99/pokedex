/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
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
} from '@mui/material';

import PokeType from './PokeType';
import move_physical from '../images/categories_image/move_physical.png';
import move_special from '../images/categories_image/move_special.png';
import move_status from '../images/categories_image/move_status.png';

function PokeMove(props) {
  const { moves } = props;
  const [level, setLevel] = useState([]);
  const [machine, setMachine] = useState([]);
  //   const [evol, setEvol] = useState([]);
  //   const [egg, setEgg] = useState([]);
  //   const [tutor, setTutor] = useState([]);
  //   const [transfer, setTransfer] = useState([]);

  useEffect(() => {
    setLevel([]);
    setMachine([]);
    props.moves.map((m) => {
      if (m.version_group_details[0].move_learn_method.name === 'level-up') {
        fetch(m.move.url)
          .then((res) => res.json())
          .then((res) => {
            let p = res.power;
            let a = res.accuracy;
            if (res.power === null) {
              p = '-';
            }
            if (res.accuracy === null) {
              a = '-';
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
      } else if (
        m.version_group_details[0].move_learn_method.name === 'machine'
      ) {
        // console.log(m.move.url);
        // console.log(m.move.name);
        fetch(m.move.url)
          .then((res) => res.json())
          .then((res) => {
            let p = res.power;
            let a = res.accuracy;
            if (res.power === null) {
              p = '-';
            }
            if (res.accuracy === null) {
              a = '-';
            }
            setMachine((machine) => [
              ...machine,
              {
                // level: m.version_group_details[0].level_learned_at,
                move: res.name,
                type: res.type.name,
                cat: res.damage_class.name,
                power: p,
                acc: a,
              },
            ]);
          });
      }

      //tutor
      //egg
    });
  }, [props.moves]);

  function setCap(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function cat_image(type) {
    switch (type) {
      case 'physical':
        return move_physical;
      case 'special':
        return move_special;
      default:
        return move_status;
    }
  }

  return (
    <Container sx={{ mt: '1rem' }}>
      <Container>
        <Typography variant='h5'>Moves learnt by level up</Typography>
        <TableContainer
          component={Paper}
          sx={{ mt: '1rem' }}
          style={{ maxHeight: 400 }}>
          <Table sx={{ maxHeight: 0 }} aria-label='simple table'>
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
                <TableRow key={l.move}>
                  <TableCell>{l.level}</TableCell>
                  <TableCell>{setCap(l.move)}</TableCell>
                  <TableCell>
                    <PokeType type={l.type} />
                  </TableCell>
                  <TableCell>
                    <img
                      src={cat_image(l.cat)}
                      alt={l.cat}
                      style={{ height: '20px' }}
                      title={setCap(l.cat)}
                    />
                  </TableCell>
                  <TableCell>{l.power}</TableCell>
                  <TableCell>{l.acc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container>
        <Typography variant='h5'>Moves learnt by machine</Typography>
        <TableContainer
          component={Paper}
          sx={{ mt: '1rem' }}
          style={{ maxHeight: 400 }}>
          <Table sx={{ maxHeight: 0 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Move</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Cat.</TableCell>
                <TableCell>Power</TableCell>
                <TableCell>Acc.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {machine.map((m) => (
                <TableRow key={m.move}>
                  <TableCell>{setCap(m.move)}</TableCell>
                  <TableCell>
                    <PokeType type={m.type} />
                  </TableCell>
                  <TableCell>
                    <img
                      src={cat_image(m.cat)}
                      alt={m.cat}
                      style={{ height: '20px' }}
                      title={setCap(m.cat)}
                    />
                  </TableCell>
                  <TableCell>{m.power}</TableCell>
                  <TableCell>{m.acc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Container>
  );
}

export default PokeMove;
