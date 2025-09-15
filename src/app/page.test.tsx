import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";
import { getTrendingMovies } from "@/lib/api/tmdb";

jest.mock("./../lib/api/tmdb", () => ({
  getTrendingMovies: jest.fn().mockResolvedValue([]),
}));

test("Exibe o título 'Filmes em destaque' na página inicial corretamente", async () => {
  const titulo = "Filmes em destaque";

  render(await Home());

  // verifica se o titulo da página aparece corretamente
  expect(await screen.findByText(titulo)).toBeInTheDocument();
});

test("Renderiza os filmes em destaque corretamente", async () => {
  (getTrendingMovies as jest.Mock).mockResolvedValue([
    {
      id: 1,
      title: "Filme teste",
      overview: "Teste",
      poster_path: "public/next.svg",
      vote_average: 8.5,
    },
  ]);
  render(await Home());

  // verifica se os filmes em destaque são renderizados corretamente
  expect(screen.getByText("Filme teste")).toBeInTheDocument();
});
test("Exibir uma mensagem quando não houver filmes disponíveis", async () => {
  (getTrendingMovies as jest.Mock).mockResolvedValue([]);
  render(await Home());

  // verifica se a mensagem de não haver filmes em destaque é exibida
  expect(screen.getByText("Nenhum filme encontrado")).toBeInTheDocument();
});
