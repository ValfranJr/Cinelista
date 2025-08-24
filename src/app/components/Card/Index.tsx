import { Filme } from "@/types/types";
import styles from "./Card.module.css";
import Link from "next/link";
import Image from "next/image";
import { useResumoFilme } from "@/app/hooks/useResumoFilme";

type Props = {
  filme: Filme;
};

const Card = ({ filme }: Props) => {
  const { title, id, overview, poster_path, vote_average } = filme;
  const resume = useResumoFilme(overview,256);
  return (
    <div key={id} className={styles.card}>
      <Link href={`/filmes/${id}`}>
        <Image
          className={styles.card__poster}
          src={`${process.env.NEXT_PUBLIC_TMDB_API_IMG_URL}${poster_path}`}
          alt={`Poster do Filme ${title}`}
          width={300}
          height={200}
        />
        <div className={styles.card__info}>
          <h3 className={styles.card__title}>{title}</h3>
          <p className={styles.card__description}>{resume}</p>
          <p className={styles.card__rating}>Nota: {vote_average}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
