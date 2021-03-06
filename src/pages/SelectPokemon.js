/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import {
  Grid,
  Container,
  Paper,
  styled,
  CircularProgress,
  Typography,
} from "@mui/material";

import PokeData from "../Components/PokeData";
import PokeStat from "../Components/PokeStat";
import PokeMove from "../Components/PokeMove";

function SelectPokemon(props) {
  let current_index = props.match.params.id;

  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [image_front, setImage_Front] = useState("");
  const [stats, setStats] = useState([]);
  const [national_no, setNational_NO] = useState("");
  const [type, setType] = useState([]);
  const [species, setSpecies] = useState("");
  const [height, setHeight] = useState(0.0);
  const [weight, setWeight] = useState(0.0);
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
        data.abilities.map((e) => {
          setAbilities((listAbilities) => [
            ...listAbilities,
            {
              name: e.ability.name,
              is_hidden: e.is_hidden,
            },
          ]);
        });

        setMoves(data.moves);
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

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function setCap() {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div>
      {notFound ? (
        <div>Pokemon Not Found</div>
      ) : loading ? (
        <Container sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Container>
      ) : (
        <Container>
          {image_front !== "" ? (
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
                  <Item sx={{ mt: "2rem" }}>Pok??dex data</Item>
                  <PokeData
                    national_no={national_no}
                    type={type}
                    species={species}
                    height={height}
                    weight={weight}
                    abilities={abilities}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sx={{ mt: "2rem" }}>
                <Item>
                  <Typography variant="h5">Base Stats</Typography>
                </Item>
                <PokeStat stats={stats} />
              </Grid>
              <Grid item xs={12} sx={{ mt: "2rem" }}>
                <Item>
                  <Typography variant="h5">Moves</Typography>
                </Item>
                <PokeMove moves={moves} />
              </Grid>
            </Container>
          ) : (
            <Container sx={{ textAlign: "center" }}>
              <CircularProgress />
            </Container>
          )}
        </Container>
      )}
    </div>
  );
}

export default SelectPokemon;
