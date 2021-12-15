import styled from "styled-components";

export const Container = styled.div``;

export interface BackgroundProps {
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

export const Title = styled.h1<BackgroundProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
  padding: 30px;
  background: ${({ theme, backgroundType }) =>
    theme.colors.backgroundType[backgroundType]};
`;

export const Image = styled.img`
  width: 130%;
  top: -80px;
  left: -80px;
  position: relative;
`;

export const Description = styled.div``;

export const Button = styled.button`
  border: none;
  color: #fff;
  font-size: 25px;
  background: #00000047;
  padding: 10px;
  border-radius: 25px;
  width: 50px;
  height: 50px;
`;

export const ImageContainer = styled.div<BackgroundProps>`
  background: ${({ theme, backgroundType }) =>
    theme.colors.backgroundType[backgroundType]};
  width: 350px;
  height: 350px;
  border-radius: 100%;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: #eee;
  padding: 30px;
  border-radius: 15px;
  position: relative;
  top: -20px;
  z-index: -1;
`;

export const ListItem = styled.li`
  color: #666;
`;
