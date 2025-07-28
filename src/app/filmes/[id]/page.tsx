import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./DetalheFilme.module.css";
import { getMovieDetails } from "@/lib/api/tmdb";

 type Props = {
  params: Promise<{
    id: number;
  }>
};

 const DetalheFilme = async({params}: Props) => {
    const { id } = await params;

    const details = await getMovieDetails(id);

    if (!details)
      return notFound();

    const { title, overview, poster_path, vote_average } = details;
  return (
    <>
      <div className={styles.detalhe}>
        <div className={styles.detalhe__container}>
          <Link className={styles.detalhe__voltar} href="/">
            Voltar
          </Link>
          <section>
            <figure>
              <img
                className={styles.detalhe__imagem}
                src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
                alt={details?.title}
              />
            </figure>
            <article className={styles.detalhe__info}>
              <h2>{title}</h2>
              <p>{overview}</p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};

export default DetalheFilme;