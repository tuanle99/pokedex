import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  ButtonBase,
  Pagination,
  CircularProgress,
} from "@mui/material";
import { useHistory } from "react-router-dom";

function ListAllPokemon(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [listPokemon, setListPokemon] = useState([]);
  const [maxCount, setMaxCount] = useState(0);

  useEffect(() => {}, []);

  getAllPokemon("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12");

  function getAllPokemon(url) {
    setListPokemon([]);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMaxCount(Math.floor(data.count / 12));

        for (let i of data.results) {
          fetch(i.url)
            .then((res) => res.json())
            // eslint-disable-next-line no-loop-func
            .then((res) => {
              setListPokemon((listPokemon) => [
                ...listPokemon,
                {
                  id: res.id,
                  name: i.name,
                  url: i.url,
                  image_url:
                    res.sprites.other["official-artwork"].front_default,
                },
              ]);
            });
        }
        console.log(listPokemon);
        setLoading(false);
      });
  }

  function setCap(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  const handlePage = (event, value) => {
    getAllPokemon(
      `https://pokeapi.co/api/v2/pokemon?offset=${(value - 1) * 12}&limit=12`
    );
  };

  return (
    <Container sx={{ mt: "5rem" }}>
      {loading ? (
        <Container sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Container>
      ) : (
        <Container>
          <Grid container>
            {listPokemon.map((p) => (
              <Grid item xs={6} md={3} key={p.id} sx={{ p: "1rem" }}>
                <ButtonBase
                  onClick={(event) => {
                    history.push(`/pokemon/${p.id}`);
                  }}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      image={p.image_url}
                      alt={p.name}
                    />
                    <CardContent>
                      {p.id}.{setCap(p.name)}
                    </CardContent>
                  </Card>
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
          <Container style={{ flex: 1 }} sx={{ m: "1rem" }}>
            <Pagination count={maxCount} onChange={handlePage} />
          </Container>
        </Container>
      )}
    </Container>
  );
}

export default ListAllPokemon;
