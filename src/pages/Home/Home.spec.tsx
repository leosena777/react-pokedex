import { render, screen, cleanup, waitFor } from "@testing-library/react";
import Home from "./index";
import api from "../../services/api";
import MockAdapter from "axios-mock-adapter";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";

jest.mock("react-router-dom", () => ({
  Link: ({ children }: any) => <a href="#">{children}</a>,
}));

jest.mock("../../components/Card", () => ({
  __esModule: true,
  default: ({ pokemon }: any) => {
    return <div>{pokemon.name}</div>;
  },
}));

const pokemonMock = {
  id: 1,
  name: "Pokemon Mock",
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

var axiosMock = new MockAdapter(api);

describe("Home page", () => {
  beforeEach(() => {
    axiosMock.reset();
  });

  afterEach(cleanup);

  it("should render correctly with service", async () => {
    axiosMock.onGet().reply(200, { ...pokemonMock });

    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    const loading = screen.getByText("Loading...");
    const card = screen.queryByText("Pokemon Mock");

    expect(loading).toBeInTheDocument();
    expect(card).not.toBeInTheDocument();

    const awaitCard = await waitFor(() => screen.getByText("Pokemon Mock"));

    expect(loading).not.toBeInTheDocument();
    expect(awaitCard).toBeInTheDocument();
  });

  it("should render with error", async () => {
    axiosMock.onGet().reply(500, { ...pokemonMock });

    render(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    );

    const loading = screen.getByText("Loading...");

    expect(loading).toBeInTheDocument();

    const awaitError = await waitFor(() => screen.getByText("Error"));

    expect(loading).not.toBeInTheDocument();
    expect(awaitError).toBeInTheDocument();
  });
});
