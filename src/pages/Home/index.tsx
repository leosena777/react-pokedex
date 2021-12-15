import { useEffect, useState } from "react";
import { Container } from "./styles";
import api from "../../services/api";
import Card from "../../components/Card";

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<any>();
  const [pokemonId, setPokemonId] = useState<number>();
  const [loading, setLoading] = useState<boolean>(true);

  const getRandomPokemonId = () => {
    const randomPokemonId = Math.floor(Math.random() * 898) + 1;
    return randomPokemonId;
  };

  const changePokemon = () => {
    const randomPokemonId = getRandomPokemonId();
    setPokemonId(randomPokemonId);
  };

  useEffect(() => {
    if (!pokemonId) {
      changePokemon();
    } else {
      setLoading(true);
      api
        .get(`pokemon/${pokemonId}`)
        .then(({ data }) => {
          setPokemon(data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [pokemonId]);

  if (!pokemonId || !pokemon || loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Card pokemon={pokemon} onChange={changePokemon} />
    </Container>
  );
};

export default Home;
