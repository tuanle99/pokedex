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
  Stack,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useHistory } from "react-router-dom";

function ListAllPokemon(props) {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [listPokemon, setListPokemon] = useState([]);
  const [maxCount, setMaxCount] = useState(0);

  const [listPoke, setListPoke] = useState([]);
  const [isSingleSearch, setIsSingleSearch] = useState(false);
  const [singlePokemon, setSinglePokemon] = useState();

  useEffect(() => {
    getAllPokemon("https://pokeapi.co/api/v2/pokemon?offset=0&limit=12");

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=1118")
      .then((res) => res.json())
      .then((res) => {
        setListPoke(res.results);
      });
  }, []);

  function getAllPokemon(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMaxCount(Math.floor(data.count / 12));
        setListPokemon([]);
        Promise.all(data.results.map((u) => fetch(u.url)))
          .then((responses) => Promise.all(responses.map((res) => res.json())))
          .then((data) => {
            setListPokemon(data);
          });
      });
    setLoading(false);
  }

  function getSinglePokemon(url) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setSinglePokemon(res);
      });
    setIsSingleSearch(true);
    // setLoading(false);
  }

  function setCap(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function setLowerCase(name) {
    return name.charAt(0).toLowerCase() + name.slice(1);
  }

  const handlePage = (event, value) => {
    getAllPokemon(
      `https://pokeapi.co/api/v2/pokemon?offset=${(value - 1) * 12}&limit=12`
    );
  };

  function getSingle(single) {
    // setLoading(true);
    console.log(single);
    if (single != null && single !== undefined) {
      getSinglePokemon(
        `https://pokeapi.co/api/v2/pokemon/${setLowerCase(single)}/`
      );
    } else {
      setIsSingleSearch(false);
    }
  }

  return (
    <Container sx={{ mt: "2rem" }}>
      {loading ? (
        <Container sx={{ textAlign: "center" }}>
          <CircularProgress />
        </Container>
      ) : (
        <Container>
          <Stack sx={{ mb: "2rem" }}>
            <Autocomplete
              options={listPoke.map((option) => setCap(option.name))}
              onChange={(event, newValue) => {
                getSingle(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Search Pokemon" />
              )}
            />
          </Stack>

          {!isSingleSearch ? (
            <Container>
              <Grid container>
                {listPokemon.map((p) => (
                  <Grid item xs={6} md={3} key={p.id} sx={{ p: "1rem" }}>
                    <ButtonBase
                      onClick={(event) => {
                        history.push(`/pokedex/pokemon/${p.id}`);
                      }}
                    >
                      <Card>
                        <CardMedia
                          component="img"
                          image={
                            p.sprites.other["official-artwork"].front_default
                          }
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
          ) : (
            <Container>
              {singlePokemon !== undefined ? (
                <Container>
                  <Grid
                    item
                    xs={6}
                    md={3}
                    key={singlePokemon.id}
                    sx={{ p: "1rem" }}
                  >
                    <ButtonBase
                      onClick={(event) => {
                        history.push(`/pokemon/${singlePokemon.id}`);
                      }}
                    >
                      <Card>
                        <CardMedia
                          component="img"
                          image={
                            singlePokemon.sprites.other["official-artwork"]
                              .front_default
                          }
                          alt={singlePokemon.name}
                        />
                        <CardContent>
                          {singlePokemon.id}.{setCap(singlePokemon.name)}
                        </CardContent>
                      </Card>
                    </ButtonBase>
                  </Grid>
                </Container>
              ) : (
                <div>"Error Occur Try Again Later"</div>
              )}
            </Container>
          )}
        </Container>
      )}
    </Container>
  );
}

export default ListAllPokemon;
