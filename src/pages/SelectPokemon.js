import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  LinearProgress,
  Stack,
} from "@mui/material";

function SelectPokemon(props) {
  let current_index = props.match.params.id;

  const [notFound, setNotFound] = useState(false);

  const [name, setName] = useState("");
  const [image_front, setImage_Front] = useState("");
  const [stats, setStats] = useState([]);
  const [national_no, setNational_NO] = useState("");
  const [type, setType] = useState([]);
  const [species, setSpecies] = useState("");
  const [height, setHeight] = useState(0.0);
  const [weight, setWeight] = useState(0.0);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  function type_color(type_select) {
    switch (type_select) {
      case "normal":
        return "#A8A77A";
      case "fire":
        return "#EE8130";
      case "water":
        return "#6390F0";
      case "electric":
        return "#F7D02C";
      case "grass":
        return "#7AC74C";
      case "ice":
        return "#96D9D6";
      case "fighting":
        return "#C22E28";
      case "poison":
        return "#A33EA1";
      case "ground":
        return "#E2BF65";
      case "flying":
        return "#A98FF3";
      case "psychic":
        return "#F95587";
      case "bug":
        return "#A6B91A";
      case "rock":
        return "#B6A136";
      case "ghost":
        return "#735797";
      case "dragon":
        return "#6F35FC";
      case "dark":
        return "#705746";
      case "steel":
        return "#B7B7CE";
      case "fairy":
        return "#D685AD";
      default:
        return "";
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

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${current_index}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.forms[0].name);
        setImage_Front(data.sprites.other["official-artwork"].front_default);
        setStats(data.stats);
        if (data.id < 10) {
          setNational_NO(`00${data.id}`);
        } else if (data.id < 100) {
          setNational_NO(`0${data.id}`);
        } else {
          setNational_NO(`${data.id}`);
        }
        setType(data.types);
        setHeight(data.height / 10);
        setWeight(data.weight / 10);
      })
      .catch((e) => {
        console.log("Not current index");
        setNotFound(true);
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${current_index}`)
      .then((res) => res.json())
      .then((data) => {
        for (let i of data.genera) {
          if (i.language.name === "en") {
            setSpecies(i.genus);
          }
        }
      });
  }, []);

  function setCap() {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

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

  return (
    <div>
      {notFound ? (
        <div>Pokemon Not Found</div>
      ) : (
        <Container>
          <Grid container item sx={{ mt: "10rem" }}>
            <Grid item xs={12}>
              <Item style={{ fontSize: "20px", fontWeight: "bold" }}>
                {setCap()}
              </Item>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={image_front}
                alt="front"
                style={{ width: "100%", height: "100%" }}
                sx={{ px: "2rem" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Item sx={{ mt: "2rem" }}>Pokédex data</Item>
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
                          <div
                            key={t.type.name}
                            sx={{ m: 1 }}
                            style={{
                              borderRadius: 10,
                              padding: 5,
                              backgroundColor: type_color(t.type.name),
                              display: "inline-block",
                              width: "3rem",
                              textAlign: "center",
                              marginInline: "5px",
                            }}
                          >
                            {t.type.name}
                          </div>
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
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ mt: "2rem" }}>
            <Item>Stats</Item>
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
          </Grid>
        </Container>
      )}
    </div>
  );
}

export default SelectPokemon;
