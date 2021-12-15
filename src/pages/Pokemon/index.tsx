import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../../services/api";
import {
  Container,
  Title,
  Image,
  Description,
  Button,
  ImageContainer,
  List,
  ListItem,
} from "./styles";

const Pokemon: React.FC = () => {
  const { id: pokemonId } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const getBackgroundType = (): any => {
    if (!pokemon) return "normal";

    let backgroundColor = pokemon.types[0].type.name;
    if (backgroundColor === "normal" && pokemon.types.length > 1) {
      backgroundColor = pokemon.types[1].type.name;
    }

    return backgroundColor;
  };

  useEffect(() => {
    api
      .get(`pokemon/${pokemonId}`)
      .then(({ data }) => {
        setPokemon(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (!pokemon || loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title backgroundType={getBackgroundType()}>
        <Button onClick={() => navigate(-1)}> {"<"} </Button> {pokemon.name}
      </Title>
      <ImageContainer backgroundType={getBackgroundType()}>
        <Image src={pokemon.sprites.other["official-artwork"].front_default} />
      </ImageContainer>
      <Description>
        <List>
          <ListItem>
            <strong>Espécie</strong> <span>{pokemon.species.name}</span>
          </ListItem>
          <ListItem>
            <strong>Altura</strong> <span>{pokemon.height} cm</span>
          </ListItem>
          <ListItem>
            <strong>Peso</strong> <span>{pokemon.weight}g</span>
          </ListItem>
        </List>
      </Description>
    </Container>
  );
};

export default Pokemon;
