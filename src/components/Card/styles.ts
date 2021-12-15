import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled.button`
  background: #00000036;
  border: none;
  border-radius: 15px;
  padding: 10px 30px;
  color: #fff;
  display: inline-block;
`;

export const Title = styled(Link)`
  color: #fff;
  border-bottom: 1px solid #ffffff38;

  padding-bottom: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: capitalize;

  display: block;
  font-size: 22px;
`;

export const Card = styled.div`
  width: 300px;
  position: relative;
  transform: transform;
  transform: scale(1) rotate(0);
  transition: all 0.2s ease-in-out;

  & > div {
    box-shadow: 2px 2px 5px rgb(0 0 0 / 30%);
  }

  &:hover {
    transform: scale(1.2) rotate(10deg);
    & > div {
      box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
    }
  }
`;

interface CardBodyProps {
  backgroundType:
    | "bug"
    | "dark"
    | "dragon"
    | "electric"
    | "fairy"
    | "fighting"
    | "fire"
    | "flying"
    | "ghost"
    | "grass"
    | "ground"
    | "ice"
    | "normal"
    | "poison"
    | "psychic"
    | "rock"
    | "steel"
    | "water";
}

export const CardBody = styled.div<CardBodyProps>`
  border-radius: 30px;
  padding: 30px;
  border: 10px solid #fff;
  background: ${({ theme, backgroundType }) =>
    theme.colors.backgroundType[backgroundType]};
`;

export const Image = styled.img`
  width: 100%;
  top: -240px;
  left: 0px;
  filter: drop-shadow(5px 5px 5px #22222266);
`;
