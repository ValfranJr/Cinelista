import { getTrendingMovies } from "@/lib/api/tmdb";
import Grid from "./components/Grid";
import Title from "./components/Title";

export default async function Home() {
  const filmes = await getTrendingMovies();
  return (
    <>
      <Title title="Filmes em destaque" />
      {filmes.length === 0 ? (
        <p>Nenhum filme encontrado</p>
      ) : (
        <Grid filmes={filmes} />
      )}{" "}
    </>
  );
}
