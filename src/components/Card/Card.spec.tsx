import Card from "./index";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

jest.mock("react-router-dom", () => ({
  Link: ({ children }: any) => <a href="#">{children}</a>,
}));

describe("Card component", () => {
  let pokemonMock: any;

  beforeEach(() => {
    pokemonMock = {
      id: 1,
      name: "Pokemon mock",
      sprites: {
        other: {
          "official-artwork": {
            front_default: "img.png",
          },
        },
      },
      types: [
        {
          type: {
            name: "normal",
          },
        },
      ],
    };
  });

  it("should render correctly", () => {
    const onChangeMock = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Card pokemon={pokemonMock} onChange={onChangeMock} />
      </ThemeProvider>
    );

    const pokemon = screen.getByText(pokemonMock.name);

    expect(pokemon).toBeInTheDocument();
  });

  it("should call onChange when click button", () => {
    const onChangeMock = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Card pokemon={pokemonMock} onChange={onChangeMock} />
      </ThemeProvider>
    );

    const button = screen.getByText("Sortear outro");
    fireEvent.click(button);
    expect(onChangeMock).toHaveBeenCalled();
  });
});
