import { Button, Title, Card, CardBody, Image } from "./styles";
import { Link } from "react-router-dom";

interface CardComponentProps {
  pokemon: any;
  onChange: () => void;
}

const CardComponent = ({ pokemon, onChange }: CardComponentProps) => {
  const getBackgroundType = (): any => {
    if (!pokemon) return "normal";

    let backgroundColor = pokemon.types[0].type.name;
    if (backgroundColor === "normal" && pokemon.types.length > 1) {
      backgroundColor = pokemon.types[1].type.name;
    }

    return backgroundColor;
  };

  return (
    <Card>
      <CardBody backgroundType={getBackgroundType()}>
        <Link to={`/pokemon/${pokemon.id}`}>
          <Image
            src={pokemon.sprites.other["official-artwork"].front_default}
          />
        </Link>

        <Title to={`/pokemon/${pokemon.id}`}> {pokemon.name}</Title>
        <Button onClick={onChange}>Sortear outro</Button>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
