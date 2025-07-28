import Grid from "@/app/components/Grid";
import Title from "@/app/components/Title";
import { getTopMovies } from "@/lib/api/tmdb";

export const dynamic = "force-static";


const FilmesTopFilmes = async () => {
    const filmes = await getTopMovies();
    return (
        <>
            <Title title="Filmes Top Filmes" />
            <Grid filmes={filmes} />
        </>
    );
}

export default FilmesTopFilmes;